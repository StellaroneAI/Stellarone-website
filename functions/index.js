import { initializeApp } from "firebase-admin/app";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { onCall, HttpsError } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { Resend } from "resend";
import OpenAI from "openai";

initializeApp();

const resendApiKey = defineSecret("RESEND_API_KEY");
const openaiApiKey = defineSecret("OPENAI_API_KEY");
const NOTIFICATION_EMAIL = "Praveen.Jayaraman@stellaronehealth.com";

const SYSTEM_PROMPT = `You are StellarOne AI, the official website assistant for StellarOne Health.
Answer questions about StellarOne Health, its services, healthcare technology, EasyMed, Stellar.AI, revenue cycle management, healthcare software engineering, integrations, consulting, and general company information.
Never invent products, customers, pricing, certifications, partnerships, clinical claims, security claims, or capabilities. If you do not know something, say so and offer to connect the visitor with the StellarOne Health team.
You are a business and technology assistant, not a medical professional. Do not diagnose, prescribe, interpret personal medical information, or provide individualized medical treatment. For urgent medical concerns, advise appropriate professional or emergency care.
Do not request or encourage patient health information, PHI, passwords, financial credentials, or other sensitive information. If such information is provided, do not analyze it and ask the visitor to remove it.
Be concise, professional, friendly, and useful. When a visitor expresses commercial intent, offer to connect them with the StellarOne Health team.`;

function cleanMessages(messages) {
  if (!Array.isArray(messages)) return [];
  return messages.filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-8).map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));
}

export const askStellarOneAI = onCall(
  { region: "asia-south1", secrets: [openaiApiKey], timeoutSeconds: 60, memory: "256MiB" },
  async (request) => {
    const messages = cleanMessages(request.data?.messages);
    if (!messages.length || !messages.some((m) => m.role === "user")) throw new HttpsError("invalid-argument", "A question is required.");
    const client = new OpenAI({ apiKey: openaiApiKey.value() });
    const response = await client.responses.create({ model: "gpt-5.6-mini", instructions: SYSTEM_PROMPT, input: messages, max_output_tokens: 500 });
    return { answer: response.output_text || "I don't have a useful answer for that yet. Please contact the StellarOne Health team." };
  }
);

export const notifyContactSubmission = onDocumentCreated(
  { document: "contactSubmissions/{submissionId}", region: "asia-south1", secrets: [resendApiKey] },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;
    const resend = new Resend(resendApiKey.value());
    const safe = (value = "") => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
    await resend.emails.send({
      from: "StellarOne Health Website <website@stellaronehealth.com>",
      to: [NOTIFICATION_EMAIL], replyTo: data.email,
      subject: `New website enquiry — ${data.name}`,
      html: `<h2>New StellarOne Health website enquiry</h2><p><strong>Name:</strong> ${safe(data.name)}</p><p><strong>Organization:</strong> ${safe(data.organization)}</p><p><strong>Email:</strong> ${safe(data.email)}</p><p><strong>Phone:</strong> ${safe(data.phone)}</p><p><strong>Message:</strong></p><p>${safe(data.message).replaceAll("\\n", "<br />")}</p><hr /><p>Submission ID: ${safe(event.params.submissionId)}</p>`,
    });
  }
);

import { initializeApp } from "firebase-admin/app";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import { Resend } from "resend";

initializeApp();

const resendApiKey = defineSecret("RESEND_API_KEY");

const NOTIFICATION_EMAIL = "Praveen.Jayaraman@stellaronehealth.com";

export const notifyContactSubmission = onDocumentCreated(
  {
    document: "contactSubmissions/{submissionId}",
    region: "asia-south1",
    secrets: [resendApiKey],
  },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    const resend = new Resend(resendApiKey.value());
    const safe = (value = "") => String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

    await resend.emails.send({
      from: "StellarOne Health Website <website@stellaronehealth.com>",
      to: [NOTIFICATION_EMAIL],
      replyTo: data.email,
      subject: `New website enquiry — ${data.name}`,
      html: `
        <h2>New StellarOne Health website enquiry</h2>
        <p><strong>Name:</strong> ${safe(data.name)}</p>
        <p><strong>Organization:</strong> ${safe(data.organization)}</p>
        <p><strong>Email:</strong> ${safe(data.email)}</p>
        <p><strong>Phone:</strong> ${safe(data.phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${safe(data.message).replaceAll("\\n", "<br />")}</p>
        <hr />
        <p>Submission ID: ${safe(event.params.submissionId)}</p>
      `,
    });
  }
);

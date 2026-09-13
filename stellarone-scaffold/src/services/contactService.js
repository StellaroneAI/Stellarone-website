import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const CONTACT_COLLECTION = "contactSubmissions";

export async function submitContactForm({
  name,
  organization,
  email,
  phone,
  message,
}) {
  const payload = {
    name: name.trim(),
    organization: organization.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    message: message.trim(),
    status: "new",
    source: "stellarone-website",
    createdAt: serverTimestamp(),
  };

  const documentRef = await addDoc(
    collection(db, CONTACT_COLLECTION),
    payload
  );

  return documentRef.id;
}

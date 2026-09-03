"use server";

export type ContactFormState = {
  ok: boolean;
  error?: string;
  mailto?: string;
};

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const company = clean(formData.get("company"));
  const interest = clean(formData.get("interest"));
  const message = clean(formData.get("message"));

  if (!name || name.length < 2) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!message || message.length < 10) {
    return { ok: false, error: "Please share a bit more about your project." };
  }

  const subject = `Portfolio enquiry from ${name}${interest ? ` — ${interest}` : ""}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    interest ? `Interest: ${interest}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:john@icreativate.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return { ok: true, mailto };
}

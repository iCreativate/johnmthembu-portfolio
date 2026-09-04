"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const interests = [
  "Brand & digital design",
  "Product / UX-UI",
  "AI consulting",
  "Full-stack build",
  "Venture collaboration",
  "Something else",
];

const fieldClass =
  "w-full bg-transparent border-0 border-b border-ink/15 px-0 py-3 text-body text-ink placeholder:text-stone/50 outline-none transition-[border-color] duration-300 focus:border-accent";

const CONTACT_EMAIL = "john@icreativate.co.za";

type Status = "idle" | "sending" | "error";
type DialogKind = "success" | "activate" | null;

export function ContactForm() {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [dialog, setDialog] = useState<DialogKind>(null);

  useEffect(() => {
    if (!dialog) return;

    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDialog(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [dialog]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this; humans leave it empty
    if (String(data.get("website") ?? "").trim()) {
      setStatus("idle");
      setDialog("success");
      form.reset();
      return;
    }

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      interest: String(data.get("interest") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    if (payload.name.length < 2) {
      setStatus("error");
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }
    if (payload.message.length < 10) {
      setStatus("error");
      setError("Please share a bit more about your project.");
      return;
    }

    const subject = `Portfolio enquiry from ${payload.name}${
      payload.interest ? ` — ${payload.interest}` : ""
    }`;

    try {
      // FormSubmit must be called from the browser (Origin/Referer). Server-side calls fail.
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            company: payload.company || "—",
            interest: payload.interest || "—",
            message: payload.message,
            _subject: subject,
            _template: "table",
            _replyto: payload.email,
            _captcha: "false",
          }),
        }
      );

      const result = (await response.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;

      const ok =
        result?.success === true ||
        result?.success === "true" ||
        String(result?.success).toLowerCase() === "true";

      const detail = typeof result?.message === "string" ? result.message : "";
      const needsActivation = /activat/i.test(detail);

      if (ok) {
        form.reset();
        setStatus("idle");
        setDialog("success");
        return;
      }

      if (needsActivation) {
        form.reset();
        setStatus("idle");
        setDialog("activate");
        return;
      }

      setStatus("error");
      setError(
        detail ||
          `Unable to send right now. Please email ${CONTACT_EMAIL} directly.`
      );
    } catch {
      setStatus("error");
      setError(`Network error. Please email ${CONTACT_EMAIL} directly.`);
    }
  }

  const dialogCopy =
    dialog === "activate"
      ? {
          eyebrow: "One more step",
          title: "Activate the contact form",
          body: `FormSubmit sent an activation link to ${CONTACT_EMAIL}. Open that email, click Activate Form once, then try sending again. After that, messages will arrive in your inbox.`,
        }
      : {
          eyebrow: "Message sent",
          title: "Thanks — I've got your note.",
          body: "Your message is on its way to my inbox. I'll get back to you soon.",
        };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <label className="block">
            <span className="text-label text-stone">Name</span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </label>

          <label className="block">
            <span className="text-label text-stone">Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClass}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <label className="block">
            <span className="text-label text-stone">Company</span>
            <input
              type="text"
              name="company"
              autoComplete="organization"
              placeholder="Optional"
              className={fieldClass}
            />
          </label>

          <label className="block">
            <span className="text-label text-stone">Interest</span>
            <select
              name="interest"
              defaultValue=""
              className={cn(fieldClass, "cursor-pointer appearance-none pr-6")}
            >
              <option value="" disabled>
                What are you looking for?
              </option>
              {interests.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-label text-stone">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about the project, timeline, and goals…"
            className={cn(fieldClass, "resize-y min-h-[8rem] leading-relaxed")}
          />
        </label>

        {error && (
          <p className="text-caption text-accent" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-6">
          <button
            type="submit"
            disabled={status === "sending"}
            className={cn(
              "inline-flex items-center justify-center border border-ink bg-ink px-8 py-4 text-label text-ivory transition-colors hover:bg-charcoal disabled:cursor-wait disabled:opacity-60"
            )}
            data-cursor="pointer"
          >
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>
          <p className="text-caption text-stone max-w-xs">
            Messages go to <span className="text-ink">{CONTACT_EMAIL}</span>. I
            usually reply within a couple of days.
          </p>
        </div>
      </form>

      <AnimatePresence>
        {dialog && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-[var(--page-margin)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-ink/55 backdrop-blur-sm"
              aria-label="Close dialog"
              onClick={() => setDialog(null)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-md border border-ink/10 bg-ivory p-8 shadow-[0_24px_80px_-32px_rgba(17,17,16,0.45)]"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setDialog(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center text-stone transition-colors hover:text-ink"
                aria-label="Close"
                data-cursor="pointer"
              >
                <X size={18} />
              </button>

              <p className="text-label text-accent mb-3">{dialogCopy.eyebrow}</p>
              <h3
                id={titleId}
                className="font-display text-display-sm text-ink pr-8"
              >
                {dialogCopy.title}
              </h3>
              <p className="mt-4 text-stone leading-relaxed">{dialogCopy.body}</p>

              <button
                type="button"
                onClick={() => setDialog(null)}
                className="mt-8 inline-flex border border-ink bg-ink px-6 py-3 text-label text-ivory transition-colors hover:bg-charcoal"
                data-cursor="pointer"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

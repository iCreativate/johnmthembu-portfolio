"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactFormState } from "@/app/contact/actions";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { ok: false };

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

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <MagneticButton
      type="submit"
      className={cn(
        "border border-ink bg-ink px-8 py-4 text-label text-ivory transition-colors hover:bg-charcoal",
        pending && "pointer-events-none opacity-60"
      )}
    >
      {pending ? "Sending…" : "Send message →"}
    </MagneticButton>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const openedMailto = useRef(false);

  useEffect(() => {
    if (state.ok && state.mailto && !openedMailto.current) {
      openedMailto.current = true;
      window.location.href = state.mailto;
    }
  }, [state]);

  if (state.ok) {
    return (
      <div
        className="border border-ink/10 bg-ivory-dark/40 px-6 py-10 sm:px-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-label text-accent mb-3">Message ready</p>
        <h3 className="font-display text-display-sm text-ink">
          Thanks — your email client should open next.
        </h3>
        <p className="mt-4 max-w-md text-stone leading-relaxed">
          If nothing opens, email me directly at{" "}
          <a
            href="mailto:john@icreativate.co.za"
            className="text-accent link-hover"
            data-cursor="pointer"
          >
            john@icreativate.co.za
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-8" noValidate>
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

      {state.error && (
        <p className="text-caption text-accent" role="alert">
          {state.error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-6">
        <SubmitButton />
        <p className="text-caption text-stone max-w-xs">
          Submissions open your email app so the message reaches{" "}
          <span className="text-ink">john@icreativate.co.za</span> directly.
        </p>
      </div>
    </form>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { useFocus } from "./focus";

const fields = [
  { id: "name", index: "01", label: "Name", type: "text", autoComplete: "name" },
  { id: "email", index: "02", label: "Email", type: "email", autoComplete: "email" },
] as const;

export default function Channel() {
  const { focus } = useFocus();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const dimmed = focus !== "all";

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setNotice(null);

    try {
      const response = await fetch("https://submit-form.com/mcTHcnZ80", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setNotice({ type: "error", message: "The signal did not send. Try again." });
        return;
      }

      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
      setNotice({ type: "success", message: "Signal received. Meet will reply." });
    } catch {
      setNotice({ type: "error", message: "The signal did not send. Try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`scroll-mt-16 border-t border-bone/10 px-5 py-20 transition-opacity duration-500 md:scroll-mt-10 md:px-10 md:py-28 ${
        dimmed ? "opacity-30" : "opacity-100"
      }`}
    >
      <p className="font-mono text-[11px] tracking-[0.28em] text-signal uppercase">04 / Contact</p>
      <h2 className="mt-3 max-w-3xl font-serif text-5xl tracking-tight md:text-7xl">Open a channel.</h2>
      <p className="mt-4 max-w-xl text-bone/65">Have an idea? Let&apos;s bring it to life together.</p>

      {submitted ? (
        <div className="mt-12 max-w-xl border border-bone/15 p-8">
          <p className="font-mono text-[11px] tracking-[0.2em] text-spark uppercase">Received</p>
          <p className="mt-3 font-serif text-4xl">Signal received.</p>
          <p className="mt-3 text-bone/70">Meet will get back to you.</p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setNotice(null);
            }}
            className="mt-8 bg-signal px-5 py-3 font-mono text-[11px] tracking-[0.18em] text-ground uppercase"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-12 max-w-3xl">
          <div className="grid gap-8 md:grid-cols-2">
            {fields.map((field) => (
              <label key={field.id} className="block" htmlFor={field.id}>
                <span className="font-mono text-[11px] tracking-[0.18em] text-bone/45 uppercase">
                  {field.index} {field.label}
                </span>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  required
                  value={formData[field.id]}
                  onChange={(event) => setFormData((prev) => ({ ...prev, [field.id]: event.target.value }))}
                  className="mt-2 w-full border-b border-bone/25 bg-transparent py-3 font-serif text-xl text-bone outline-none focus:border-signal"
                />
              </label>
            ))}
          </div>

          <label className="mt-8 block" htmlFor="message">
            <span className="font-mono text-[11px] tracking-[0.18em] text-bone/45 uppercase">03 Message</span>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
              className="mt-2 w-full resize-y border border-bone/20 bg-surface/70 px-4 py-3 font-sans text-base leading-relaxed text-bone outline-none focus:border-signal"
            />
          </label>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-signal px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-ground uppercase disabled:cursor-wait disabled:opacity-60"
            >
              {isSubmitting ? "Sending" : "Send the signal"}
            </button>
            {notice && (
              <p className={`font-mono text-xs ${notice.type === "success" ? "text-spark" : "text-signal"}`} role="status">
                {notice.message}
              </p>
            )}
          </div>
        </form>
      )}

      <footer className="mt-20 flex flex-wrap items-end justify-between gap-4 border-t border-bone/10 pt-6">
        <p className="font-mono text-[11px] tracking-[0.16em] text-bone/40 uppercase">Meet Shah · Cloud and ML</p>
        <p className="font-mono text-[11px] tracking-[0.16em] text-bone/40 uppercase">Model card · 2026</p>
      </footer>
    </section>
  );
}

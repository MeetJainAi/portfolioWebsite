"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";

export default function Channel() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

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
        setNotice("Message did not send. Try again.");
        return;
      }

      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch {
      setNotice("Message did not send. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "mt-2 w-full border-b border-[var(--line)] bg-transparent py-3 text-base text-[var(--ink)] outline-none transition-colors duration-200 focus:border-[var(--accent)]";

  return (
    <section id="contact" className="scroll-mt-16 border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-[1120px] gap-16 px-6 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--muted)]">Contact</p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.02] tracking-[-0.03em] md:text-6xl">Write to me.</h2>
          <p className="mt-6 max-w-sm text-[16px] leading-[1.7] text-[#c8c4ba]">Have an idea? Let&apos;s bring it to life together.</p>
          <ul className="mt-10 space-y-3">
            {profile.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)]">
                  {link.label} <span className="arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {submitted ? (
            <div>
              <p className="font-serif text-4xl">Received.</p>
              <p className="mt-4 text-[#c8c4ba]">Meet will get back to you.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-8 text-sm">
                Send another <span className="arrow">→</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block text-[12px] uppercase tracking-[0.16em] text-[var(--muted)]" htmlFor="name">
                  Name
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                    className={fieldClass}
                  />
                </label>
                <label className="block text-[12px] uppercase tracking-[0.16em] text-[var(--muted)]" htmlFor="email">
                  Email
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                    className={fieldClass}
                  />
                </label>
              </div>
              <label className="block text-[12px] uppercase tracking-[0.16em] text-[var(--muted)]" htmlFor="message">
                Message
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                  className={`${fieldClass} resize-y`}
                />
              </label>
              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border border-[var(--ink)] px-5 py-3 text-sm transition-colors duration-200 hover:bg-[var(--ink)] hover:text-[#0c0c0b] disabled:opacity-50"
                >
                  {isSubmitting ? "Sending" : "Send"}
                </button>
                {notice && (
                  <p className="text-sm text-[var(--accent)]" role="status">
                    {notice}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1120px] items-center justify-between border-t border-[var(--line)] px-6 py-6 text-sm text-[var(--muted)]">
        <p>Meet Shah</p>
        <p>Cloud and ML</p>
      </div>
    </section>
  );
}

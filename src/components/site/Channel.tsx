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
        setNotice("Failed to send message. Please try again.");
        return;
      }

      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch {
      setNotice("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const field =
    "mt-2 w-full border-b border-[#1a1208]/20 bg-transparent py-3 text-[#1a1208] outline-none transition-colors duration-300 focus:border-[#10241c]";

  return (
    <section id="contact" className="scroll-mt-16 lg:pr-[42vw]">
      <div className="grid lg:grid-cols-12">
        <div className="bg-[#ffb25a] px-5 py-16 text-[#1a1208] md:px-8 lg:col-span-5 lg:px-12 lg:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em]">05 — Contact</p>
          <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Let&apos;s
            <span className="block italic">Connect</span>
          </h2>
          <p className="mt-6 max-w-sm text-[16px] leading-[1.7]">Have an idea? Let&apos;s bring it to life together.</p>
          <a href={`mailto:${profile.email}`} className="mt-6 inline-block text-sm">
            {profile.email}
          </a>
          <ul className="mt-8 space-y-3">
            {profile.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm" target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {link.label} <span className="arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#f4efe6] px-5 py-16 text-[#1a1208] md:px-8 lg:col-span-7 lg:px-12 lg:py-20">
          {submitted ? (
            <div>
              <p className="font-serif text-5xl">Message sent.</p>
              <p className="mt-4 text-[#5c5348]">I will get back to you soon.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-8 text-sm">
                Send another <span className="arrow">→</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.16em]" htmlFor="name">
                  Name
                  <input id="name" name="name" required autoComplete="name" value={formData.name} onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))} className={field} />
                </label>
                <label className="block font-mono text-[11px] uppercase tracking-[0.16em]" htmlFor="email">
                  Email
                  <input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} className={field} />
                </label>
              </div>
              <label className="block font-mono text-[11px] uppercase tracking-[0.16em]" htmlFor="message">
                Message
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))} className={`${field} resize-y`} />
              </label>
              <div className="flex flex-wrap items-center gap-5">
                <button type="submit" disabled={isSubmitting} className="bg-[#1a1208] px-6 py-3 text-sm text-[#f4efe6] transition-colors duration-300 hover:bg-[#10241c] disabled:opacity-60">
                  {isSubmitting ? "Sending" : "Send message"}
                </button>
                {notice && (
                  <p className="text-sm" role="status">
                    {notice}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

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
    "mt-2 w-full border-b border-[#1a1612]/20 bg-transparent py-3 text-[#1a1612] outline-none transition-colors duration-300 placeholder:text-[#5e584f] focus:border-[#e25b38]";

  return (
    <section id="contact" className="scroll-mt-[4.25rem] grid lg:grid-cols-12">
      <div className="flex flex-col justify-between bg-[#e25b38] px-5 py-16 text-[#efe6d6] sm:px-8 lg:col-span-5 lg:px-12 lg:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#1a1612]">04 — Contact</p>
        <div className="mt-16 lg:mt-0">
          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Let&apos;s
            <span className="block italic">Connect</span>
          </h2>
          <p className="mt-6 max-w-sm text-[16px] leading-[1.7] text-[#efe6d6]/90">Have an idea? Let&apos;s bring it to life together.</p>
        </div>
        <ul className="mt-12 space-y-3">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="link-line text-sm">
                {link.label} <span className="arrow">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#f6f0e4] px-5 py-16 sm:px-8 lg:col-span-7 lg:px-14 lg:py-20">
        {submitted ? (
          <div className="flex h-full flex-col justify-center">
            <p className="font-serif text-5xl tracking-[-0.03em]">Message sent.</p>
            <p className="mt-4 max-w-sm text-[#5e584f]">I will get back to you soon.</p>
            <button type="button" onClick={() => setSubmitted(false)} className="mt-8 w-fit text-sm text-[#e25b38]">
              Send another <span className="arrow">→</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex h-full flex-col justify-center space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#5e584f]" htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  className={field}
                />
              </label>
              <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#5e584f]" htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  className={field}
                />
              </label>
            </div>
            <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#5e584f]" htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                className={`${field} resize-y`}
              />
            </label>
            <div className="flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#1a1612] px-6 py-3 text-sm text-[#efe6d6] transition-colors duration-300 hover:bg-[#e25b38] disabled:opacity-60"
              >
                {isSubmitting ? "Sending" : "Send message"}
              </button>
              {notice && (
                <p className="text-sm text-[#e25b38]" role="status">
                  {notice}
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

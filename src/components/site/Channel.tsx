"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";

export default function Channel() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setNotice(null);
    setFailed(false);

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
        setFailed(true);
        setNotice("Message did not send. Try again.");
        return;
      }

      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch {
      setFailed(true);
      setNotice("Message did not send. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-5 pb-16 pt-8 md:px-8 md:pb-20">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative bg-gradient-to-br from-[#3a2418] via-[#16141c] to-[#101820] p-8 md:p-12">
          <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[#e8a06a]/30 blur-3xl" />
          <p className="relative text-xs uppercase tracking-[0.32em] text-[#e8a06a]">Contact</p>
          <h2 className="relative mt-4 font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl">Let&apos;s build the next system.</h2>
          <p className="relative mt-5 max-w-sm text-white/70">Have an idea? Let&apos;s bring it to life together.</p>
          <ul className="relative mt-10 space-y-3">
            {profile.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 md:p-12">
          {submitted ? (
            <div className="flex h-full min-h-[280px] flex-col justify-center">
              <p className="font-serif text-5xl">Message received.</p>
              <p className="mt-4 text-white/70">Meet will get back to you.</p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 w-fit rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm text-white/60" htmlFor="name">
                  Name
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-[#e8a06a]"
                  />
                </label>
                <label className="block text-sm text-white/60" htmlFor="email">
                  Email
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-[#e8a06a]"
                  />
                </label>
              </div>
              <label className="block text-sm text-white/60" htmlFor="message">
                Message
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                  className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-[#e8a06a]"
                />
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#e8a06a] px-6 py-3 text-sm font-medium text-black transition hover:bg-white disabled:opacity-60"
                >
                  {isSubmitting ? "Sending" : "Send message"}
                </button>
                {notice && (
                  <p className={`text-sm ${failed ? "text-[#e8a06a]" : "text-white/70"}`} role="status">
                    {notice}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-sm text-white/35">Meet Shah · Cloud and ML engineer</p>
    </section>
  );
}

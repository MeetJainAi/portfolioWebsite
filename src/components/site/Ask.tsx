"use client";

import { FormEvent, useState } from "react";
import { replies } from "@/data/portfolio";
import { setSpeech } from "@/components/agent/signals";

const chips = ["orin", "terraform", "codex", "certs", "contact"];

export default function Ask() {
  const [query, setQuery] = useState("");

  const route = (raw: string) => {
    const text = raw.toLowerCase();
    const match = replies.find((reply) => reply.keys.some((key) => text.includes(key)));
    const line = match?.line ?? "I can route orin, terraform, codex, certs, or contact.";
    const target = match?.target ?? "signal";
    setSpeech(line);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(target)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!query.trim()) return;
    route(query);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="fixed bottom-4 left-4 right-4 z-40 flex flex-wrap items-center gap-2 border border-white/15 bg-[#0c0b10]/90 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md md:left-8 lg:right-[44vw]"
    >
      <label className="sr-only" htmlFor="ask">
        Ask the agent
      </label>
      <input
        id="ask"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Ask the agent"
        className="min-w-[10rem] flex-1 bg-transparent px-3 py-2 text-sm text-[#f4efe6] outline-none placeholder:text-[#a39cab]"
      />
      <div className="flex flex-wrap gap-1">
        {chips.map((chip) => (
          <button key={chip} type="button" onClick={() => route(chip)} className="border border-white/15 px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-[#ffb25a]">
            {chip}
          </button>
        ))}
      </div>
    </form>
  );
}

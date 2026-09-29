"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile, rail } from "@/data/portfolio";

const indexCopy: Record<string, string> = {
  signal: "Opening",
  work: "Systems shipped",
  stack: "Tools in practice",
  proof: "Credentials",
  contact: "Write directly",
};

export default function Signal() {
  const reduce = useReducedMotion();

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <section id="signal" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1120px] gap-16 px-6 pb-24 pt-32 lg:grid-cols-12 lg:pb-32 lg:pt-40">
        <div className="lg:col-span-7">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[13px] uppercase tracking-[0.18em] text-[var(--muted)]"
          >
            {profile.role}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-[clamp(4.25rem,7.4vw,6.75rem)] leading-[0.9] tracking-[-0.03em]"
          >
            Meet Shah
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[36rem] text-[17px] leading-[1.7] text-[#c8c4ba]"
          >
            {profile.bio}
          </motion.p>

          <motion.dl
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 grid max-w-lg grid-cols-3 border-t border-[var(--line)]"
          >
            {profile.stats.map((stat, index) => (
              <div key={stat.label} className={`pt-5 ${index < profile.stats.length - 1 ? "pr-4" : ""}`}>
                <dd className="font-serif text-4xl tracking-tight">{stat.value}</dd>
                <dt className="mt-2 text-[12px] leading-snug text-[var(--muted)]">{stat.label}</dt>
              </div>
            ))}
          </motion.dl>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            <button type="button" onClick={() => jump("work")} className="text-sm text-[var(--ink)]">
              View work <span className="arrow">→</span>
            </button>
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)]">
                {link.label} <span className="arrow">↗</span>
              </a>
            ))}
          </motion.div>
        </div>

        <nav className="lg:col-span-4 lg:col-start-9 lg:pt-16" aria-label="Contents">
          <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--muted)]">Contents</p>
          <ul className="mt-4 border-t border-[var(--line)]">
            {rail
              .filter((item) => item.id !== "signal")
              .map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => jump(item.id)}
                    className="group flex w-full items-baseline gap-4 border-b border-[var(--line)] py-5 text-left"
                  >
                    <span className="w-8 text-[13px] text-[var(--accent)]">{item.index}</span>
                    <span className="flex-1">
                      <span className="block text-lg">{item.label}</span>
                      <span className="mt-1 block text-sm text-[var(--muted)]">{indexCopy[item.id]}</span>
                    </span>
                    <span className="arrow text-sm text-[var(--muted)] group-hover:text-[var(--ink)]">→</span>
                  </button>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

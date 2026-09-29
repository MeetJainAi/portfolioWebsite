"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/portfolio";

function Poster() {
  const ticks = Array.from({ length: 14 }, (_, index) => index);

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 860" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <g stroke="#e8d3a4" strokeWidth="1.25" fill="none" opacity="0.75">
        <path d="M32 56 H54 M32 56 V78" />
        <path d="M608 56 H586 M608 56 V78" />
        <path d="M32 620 H54 M32 620 V598" />
        <path d="M608 620 H586 M608 620 V598" />
      </g>
      <g stroke="#e8d3a4" strokeOpacity="0.4">
        {ticks.map((tick) => (
          <line key={tick} x1="58" x2={tick % 3 === 0 ? 76 : 68} y1={96 + tick * 34} y2={96 + tick * 34} />
        ))}
      </g>
      <circle cx="372" cy="236" r="176" fill="none" stroke="#efe6d6" strokeOpacity="0.22" strokeWidth="1.25" />
      <circle cx="338" cy="214" r="104" fill="none" stroke="#e8d3a4" strokeOpacity="0.5" strokeWidth="1.25" />
      <rect x="0" y="332" width="236" height="14" fill="#e25b38" />
      <circle cx="196" cy="486" r="52" fill="#e8d3a4" />
      <circle cx="196" cy="486" r="16" fill="#16382f" />
      <path d="M196 486 C 270 430, 340 340, 430 286" fill="none" stroke="#efe6d6" strokeOpacity="0.4" strokeWidth="1.25" />
      <g className="drift">
        <circle cx="448" cy="198" r="84" fill="#e25b38" />
      </g>
    </svg>
  );
}

export default function Signal() {
  const reduce = useReducedMotion();

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <section id="signal" className="scroll-mt-[4.25rem] bg-[#efe6d6]">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e25b38]"
          >
            {profile.role}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-serif text-[clamp(4.75rem,8vw,7.5rem)] leading-[0.82] tracking-[-0.045em]"
          >
            Meet
            <span className="block italic text-[#16382f]">Shah</span>
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[26rem] text-[17px] leading-[1.7] text-[#3c3832]"
          >
            {profile.bio}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            <button
              type="button"
              onClick={() => jump("work")}
              className="bg-[#1a1612] px-5 py-3 text-sm text-[#efe6d6] transition-colors duration-300 hover:bg-[#e25b38]"
            >
              View the work
            </button>
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="link-line text-sm text-[#1a1612]">
                {link.label}
                <span className="arrow"> ↗</span>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="relative px-5 pb-8 sm:px-8 lg:px-0 lg:py-8 lg:pr-8">
          <div className="relative min-h-[540px] lg:min-h-[calc(100svh-8.5rem)]">
            <div className="absolute inset-0 overflow-hidden bg-[#16382f]">
              <Poster />
              <p className="absolute left-6 top-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[#e8d3a4]">
                Fig. 01 — Systems
              </p>
            </div>
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3 bg-[#e8d3a4] p-4 text-[#1a1612] shadow-[0_22px_50px_rgba(22,16,12,0.18)] sm:p-5 lg:-left-14 lg:bottom-8 lg:right-6 lg:gap-4 lg:p-6">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[clamp(1.7rem,3vw,2.7rem)] leading-none tracking-tight">{stat.value}</p>
                  <p className="mt-2 text-[11px] leading-snug text-[#3c3832]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

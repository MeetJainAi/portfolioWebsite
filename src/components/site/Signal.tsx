"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { profile, stats, ticker } from "@/data/portfolio";
import { speechRef, subscribeSpeech } from "@/components/agent/signals";
import { useEffect, useState } from "react";

const AgentCanvas = dynamic(() => import("@/components/agent/AgentCanvas"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

export default function Signal() {
  const reduce = useReducedMotion();
  const [speech, setSpeech] = useState(speechRef.current);

  useEffect(() => subscribeSpeech(() => setSpeech(speechRef.current)), []);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <section id="signal" className="scroll-mt-16">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,42vw)]">
        <div className="flex flex-col justify-center px-5 py-14 md:px-8 lg:min-h-[calc(100svh-4rem)] lg:px-12 lg:py-20">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ffb25a]"
          >
            {profile.role} · {profile.location}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-serif text-[clamp(4.4rem,8vw,7.4rem)] leading-[0.84] tracking-[-0.045em]"
          >
            Meet
            <span className="block italic text-[#5ee0b5]">Shah</span>
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-8 max-w-xl text-[17px] leading-[1.7] text-[#d9d3c8]"
          >
            {profile.summary}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#a39cab]"
          >
            {profile.agentLine}
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button type="button" onClick={() => jump("systems")} className="bg-[#ffb25a] px-5 py-3 text-sm text-[#1a1208] transition-colors duration-300 hover:bg-[#5ee0b5]">
              View the systems
            </button>
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-[#f4efe6]" target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {link.label} <span className="arrow">↗</span>
              </a>
            ))}
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[#a39cab]">
            {profile.residency} · {profile.availability}
          </p>
        </div>

        <div className="relative h-[460px] lg:fixed lg:right-0 lg:top-16 lg:h-[calc(100svh-4rem)] lg:w-[42vw]">
          <div className="absolute inset-0">
            <AgentCanvas />
          </div>
          <p className="pointer-events-none absolute left-5 right-5 top-4 hidden max-w-xs font-mono text-[12px] leading-relaxed text-[#ffb25a] lg:block">
            {speech}
          </p>
        </div>
      </div>

      <div className="border-y border-white/10 lg:pr-[42vw]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-white/10 px-5 py-6 md:border-l md:px-6 md:first:border-l-0">
              <p className="font-serif text-4xl tracking-tight text-[#ffb25a] md:text-5xl">{stat.value}</p>
              <p className="mt-2 max-w-[12rem] text-[12px] leading-snug text-[#a39cab]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-b border-white/10 py-3 lg:pr-[42vw]">
        <div className="ticker-track flex w-max gap-8 pr-8">
          {[...ticker, ...ticker].map((item, index) => (
            <span key={`${item}-${index}`} className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#a39cab]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

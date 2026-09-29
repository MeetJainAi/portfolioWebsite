"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/portfolio";
import Field from "./Field";

export default function Signal() {
  const reduce = useReducedMotion();

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <section id="signal" className="relative min-h-[100svh] overflow-hidden">
      <Field />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07070b] via-[#07070b]/88 to-[#07070b]/25 md:bg-gradient-to-r md:from-[#07070b] md:via-[#07070b]/75 md:to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:justify-center md:px-8 md:pb-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.32em] text-[#e8a06a]"
        >
          Cloud and machine learning
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 max-w-4xl font-serif text-[clamp(4.4rem,12vw,8.6rem)] leading-[0.84] tracking-[-0.04em]"
        >
          Meet
          <span className="block bg-gradient-to-r from-[#fff6ec] via-[#e8a06a] to-[#8f7cff] bg-clip-text text-transparent italic">
            Shah
          </span>
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl"
        >
          {profile.bio}
        </motion.p>

        <motion.dl
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-8 grid max-w-xl grid-cols-3 gap-3"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur-md md:px-4">
              <dd className="font-serif text-3xl text-white md:text-4xl">{stat.value}</dd>
              <dt className="mt-1 text-[10px] uppercase leading-tight tracking-[0.14em] text-white/50">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <button
            type="button"
            onClick={() => jump("work")}
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#e8a06a]"
          >
            See the work
          </button>
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/85 backdrop-blur-md transition hover:border-white/40 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

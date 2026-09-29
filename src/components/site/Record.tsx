"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { roles } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Record() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });

  return (
    <section id="record" className="scroll-mt-16 px-5 py-20 md:px-8 md:py-28 lg:pr-[42vw] lg:pl-12">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ffb25a]">01 — Record</p>
        <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-6xl">The engagements</h2>
      </Reveal>

      <div ref={ref} className="relative mt-14">
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10" />
        <motion.div
          className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-[#ffb25a]"
          style={{ scaleY: reduce ? 1 : scaleY }}
        />
        <ol className="space-y-12">
          {roles.map((role) => (
            <li key={`${role.org}-${role.when}`} className="relative pl-10">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-[#ffb25a] bg-[#0c0b10]" />
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#5ee0b5]">
                  {role.when} · {role.place}
                </p>
                <h3 className="mt-2 font-serif text-3xl tracking-[-0.03em] md:text-4xl">{role.title}</h3>
                <p className="mt-1 text-sm text-[#a39cab]">{role.org}</p>
                <ul className="mt-4 max-w-2xl space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="text-[15px] leading-[1.65] text-[#d9d3c8]">
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

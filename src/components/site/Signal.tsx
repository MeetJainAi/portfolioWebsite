"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { profile, projects, stats } from "@/data/portfolio";

export default function Signal() {
  const root = useRef<HTMLElement>(null);
  const featured = projects[0];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        yPercent: 110,
        duration: 1.05,
        stagger: 0.08,
        ease: "power4.out",
      });
      gsap.from(".hero-fade", {
        y: 16,
        opacity: 0,
        duration: 0.8,
        delay: 0.35,
        stagger: 0.06,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="signal" ref={root} className="scroll-mt-16 px-5 pb-8 pt-10 md:px-8 lg:px-12 lg:pt-14">
      <div className="mx-auto grid max-w-[1360px] items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="hero-fade font-mono text-[11px] uppercase tracking-[0.28em] text-[#c4622d]">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-4 font-serif text-[clamp(4.4rem,8vw,7rem)] leading-[0.84] tracking-[-0.045em]">
            <span className="block overflow-hidden">
              <span className="hero-line block">Meet</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block italic text-[#1c2b4a]">Shah</span>
            </span>
          </h1>
          <p className="hero-fade mt-8 max-w-xl text-[17px] leading-[1.7] text-[#3c3832]">{profile.summary}</p>
          <p className="hero-fade mt-3 max-w-xl text-[15px] leading-relaxed text-[#5e584f]">{profile.agentLine}</p>
          <div className="hero-fade mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#systems" className="bg-[#14120f] px-5 py-3 text-sm text-[#f3efe6] transition-colors duration-300 hover:bg-[#c4622d]">
              View the systems
            </a>
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {link.label} <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 lg:col-span-5">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-fade border-t border-[#14120f]/15 pt-3">
              <dt className="font-serif text-4xl tracking-tight text-[#1c2b4a] md:text-5xl">{stat.value}</dt>
              <dd className="mt-2 text-[12px] leading-snug text-[#5e584f]">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href={`#${featured.id}`} className="hero-fade mx-auto mt-12 grid max-w-[1360px] bg-[#1c2b4a] text-[#f3efe6] lg:grid-cols-12">
        <div className="p-6 md:p-8 lg:col-span-5 lg:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e7b89a]">Featured · {featured.kicker}</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{featured.title}</h2>
        </div>
        <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-7 lg:p-10">
          <p className="max-w-xl text-[16px] leading-[1.7] text-[#f3efe6]/85">{featured.summary}</p>
          <p className="mt-6 text-sm text-[#e7b89a]">{featured.stack.join("  ·  ")}</p>
        </div>
      </a>

      <p className="hero-fade mx-auto mt-4 max-w-[1360px] font-mono text-[11px] uppercase tracking-[0.16em] text-[#5e584f]">
        {profile.residency} · {profile.availability}
      </p>
    </section>
  );
}

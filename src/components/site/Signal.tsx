"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { profile, stats } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Signal() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (reduce || !desktop || !root.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=130%",
          pin: ".cutover-stage",
          scrub: 0.65,
          anticipatePin: 1,
        },
      });

      timeline
        .to(".line-before", { autoAlpha: 0, duration: 0.28, ease: "none" }, 0)
        .fromTo(".line-after", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.28, ease: "none" }, 0.22)
        .fromTo(".tape-fill", { scaleX: 0.08 }, { scaleX: 1, ease: "none" }, 0);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="signal" ref={root} className="scroll-mt-16 bg-[#101114] text-[#f7f3ea]">
      <div className="cutover-stage relative flex min-h-[100svh] flex-col justify-center px-5 pb-16 pt-28 md:px-8 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#ff5a1f]">Scene 00 · The window</p>
        <div className="mt-6 max-w-5xl lg:grid">
          <h1 className="line-before font-serif text-[clamp(3.4rem,8vw,7.2rem)] leading-[0.9] tracking-[-0.045em] lg:col-start-1 lg:row-start-1">
            Three days
            <span className="block">in the console.</span>
          </h1>
          <p className="line-after mt-3 font-serif text-[clamp(3.4rem,8vw,7.2rem)] leading-[0.9] tracking-[-0.045em] text-[#f0c14d] lg:col-start-1 lg:row-start-1 lg:mt-0 lg:opacity-0">
            Under two hours
            <span className="block">in Terraform.</span>
          </p>
        </div>
        <div className="mt-10 h-2 w-full max-w-xl bg-white/10">
          <div className="tape-fill h-full w-full bg-[#ff5a1f] lg:origin-left lg:scale-x-[0.08]" />
        </div>
        <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.18em] text-[#a39e96]">
          {profile.name} · {profile.role} · {profile.location}
        </p>
      </div>

      <div className="bg-[#f4efe4] px-5 py-16 text-[#14120f] md:px-8 md:py-24 lg:px-12">
        <div data-reveal className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ff5a1f]">The person on the change</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.9] tracking-[-0.04em] md:text-7xl">
              Meet
              <span className="block italic">Shah</span>
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.7]">{profile.summary}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5e584f]">{profile.agentLine}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href="#systems" className="bg-[#101114] px-5 py-3 text-sm text-[#f7f3ea] transition-colors duration-300 hover:bg-[#ff5a1f]">
                See the systems
              </a>
              {profile.links.map((link) => (
                <a key={link.label} href={link.href} className="text-sm" target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {link.label} <span className="arrow">↗</span>
                </a>
              ))}
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[#5e584f]">
              {profile.residency} · {profile.availability}
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4 lg:col-span-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex min-h-[150px] flex-col justify-between bg-[#101114] p-5 text-[#f7f3ea]">
                <dt className="font-serif text-5xl tracking-tight text-[#f0c14d]">{stat.value}</dt>
                <dd className="mt-4 text-[13px] leading-snug text-[#a39e96]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

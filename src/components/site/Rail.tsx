"use client";

import { useEffect, useState } from "react";
import { rail } from "@/data/portfolio";

export default function Rail() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("signal");

  useEffect(() => {
    const sections = rail
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const jump = (id: string) => {
    setOpen(false);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#1a1612]/10 bg-[#efe6d6]">
        <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <button type="button" onClick={() => jump("signal")} className="flex items-center gap-3 text-sm font-medium tracking-tight">
            <span className="grid h-8 w-8 place-items-center bg-[#16382f] font-serif text-[15px] italic text-[#efe6d6]">M</span>
            Meet Shah
          </button>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
            {rail.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => jump(item.id)}
                className={`text-sm transition-colors duration-300 ${
                  active === item.id ? "text-[#e25b38]" : "text-[#5e584f] hover:text-[#1a1612]"
                }`}
                aria-current={active === item.id ? "true" : undefined}
              >
                <span className="mr-1.5 font-mono text-[10px] tracking-wider">{item.index}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <button type="button" className="text-sm md:hidden" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 bg-[#efe6d6] px-6 pt-24 md:hidden">
          <ul>
            {rail.map((item) => (
              <li key={item.id} className="border-t border-[#1a1612]/10">
                <button type="button" onClick={() => jump(item.id)} className="flex w-full items-baseline gap-4 py-4 text-left">
                  <span className="w-8 font-mono text-sm text-[#e25b38]">{item.index}</span>
                  <span className="font-serif text-4xl">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

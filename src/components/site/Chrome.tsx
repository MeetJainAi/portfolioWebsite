"use client";

import { useEffect, useState } from "react";
import { rail } from "@/data/portfolio";

export default function Chrome() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("signal");

  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (bar) bar.style.transform = `scaleX(${progress})`;
      const marker = window.scrollY + 120;
      let current = rail[0].id;
      for (const item of rail) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= marker) current = item.id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id: string) => {
    setOpen(false);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <div id="scroll-progress" className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left scale-x-0 bg-[#ff5a1f]" />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#101114]/90 text-[#f7f3ea] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-5 md:px-8 lg:px-12">
          <button type="button" onClick={() => jump("signal")} className="flex items-center gap-3 text-sm">
            <span className="grid h-8 w-8 place-items-center bg-[#ff5a1f] font-serif text-[15px] italic text-[#1a0c06]">M</span>
            Meet Shah
          </button>
          <nav className="hidden items-center gap-5 md:flex" aria-label="Sections">
            {rail.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => jump(item.id)}
                className={`text-sm transition-colors duration-300 ${active === item.id ? "text-[#f0c14d]" : "text-[#a39e96] hover:text-[#f7f3ea]"}`}
                aria-current={active === item.id ? "true" : undefined}
              >
                <span className="mr-1 font-mono text-[10px]">{item.index}</span>
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
        <div className="fixed inset-0 z-30 bg-[#101114] px-6 pt-24 text-[#f7f3ea] md:hidden">
          <ul>
            {rail.map((item) => (
              <li key={item.id} className="border-t border-[#14120f]/10">
                <button type="button" onClick={() => jump(item.id)} className="flex w-full items-baseline gap-4 py-4 text-left">
                  <span className="w-8 font-mono text-sm text-[#ff5a1f]">{item.index}</span>
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

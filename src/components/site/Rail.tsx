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
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] }
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
      <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-3 py-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <button type="button" onClick={() => jump("signal")} className="px-3 font-serif text-lg tracking-tight">
            Meet Shah
          </button>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
            {rail.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => jump(item.id)}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active === item.id ? "bg-white text-black" : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className="rounded-full border border-white/15 px-3 py-1.5 text-sm md:hidden"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 flex flex-col justify-end bg-[#07070b]/92 px-6 pb-10 pt-28 backdrop-blur-xl md:hidden">
          <nav aria-label="Sections">
            <ul className="space-y-2">
              {rail.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => jump(item.id)}
                    className="font-serif text-5xl tracking-tight text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

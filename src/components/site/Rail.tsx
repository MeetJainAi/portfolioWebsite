"use client";

import { useEffect, useState } from "react";
import { rail } from "@/data/portfolio";

export default function Rail() {
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
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const jump = (id: string) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <nav
        aria-label="Sections"
        className="fixed inset-x-0 top-0 z-40 border-b border-bone/10 bg-ground/85 backdrop-blur-md md:hidden"
      >
        <ul className="flex justify-between gap-0 overflow-x-auto px-2 py-2">
          {rail.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => jump(item.id)}
                className={`whitespace-nowrap px-1 py-2 font-mono text-[10px] tracking-[0.08em] uppercase ${
                  active === item.id ? "text-signal" : "text-bone/55"
                }`}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.index} {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-28 flex-col justify-between border-r border-bone/10 bg-ground/80 px-3 py-8 md:flex">
        <p className="font-mono text-[10px] tracking-[0.32em] text-signal">MEET</p>
        <nav aria-label="Sections">
          <ul className="flex flex-col gap-5">
            {rail.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => jump(item.id)}
                    className="group flex items-center gap-2 text-left"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={`h-1.5 w-1.5 ${isActive ? "bg-signal" : "bg-bone/25 group-hover:bg-bone/70"}`}
                    />
                    <span className="flex flex-col">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-bone/40">{item.index}</span>
                      <span
                        className={`font-mono text-[11px] tracking-[0.14em] uppercase ${
                          isActive ? "text-bone" : "text-bone/55 group-hover:text-bone"
                        }`}
                      >
                        {item.label}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <p className="font-mono text-[10px] tracking-[0.28em] text-bone/35 [writing-mode:vertical-rl] rotate-180">
          MODEL CARD
        </p>
      </aside>
    </>
  );
}

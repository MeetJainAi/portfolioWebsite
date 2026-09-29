"use client";

import { useEffect, useState } from "react";
import { rail } from "@/data/portfolio";

export default function Rail() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("signal");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] }
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
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
          scrolled ? "border-b border-[var(--line)] bg-[#0c0c0b]/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6">
          <button type="button" onClick={() => jump("signal")} className="text-sm tracking-tight">
            Meet Shah
          </button>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
            {rail.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => jump(item.id)}
                className={`text-sm transition-colors duration-200 ${
                  active === item.id ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className="text-sm text-[var(--muted)] md:hidden"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 bg-[#0c0c0b] px-6 pt-24 md:hidden">
          <nav aria-label="Sections">
            <ul>
              {rail.map((item) => (
                <li key={item.id} className="border-t border-[var(--line)]">
                  <button type="button" onClick={() => jump(item.id)} className="flex w-full items-baseline gap-4 py-5 text-left">
                    <span className="w-8 text-sm text-[var(--accent)]">{item.index}</span>
                    <span className="font-serif text-4xl">{item.label}</span>
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

"use client";

import { skillGroups } from "@/data/portfolio";
import { useFocus } from "./focus";

function cellTone(level: number) {
  const t = (Math.min(100, Math.max(75, level)) - 75) / 25;
  const mix = (from: number, to: number) => Math.round(from + (to - from) * t);
  const r = mix(0x3a, 0xc8);
  const g = mix(0x42, 0xf5);
  const b = mix(0x14, 0x4b);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: luminance > 0.62 ? "#12110E" : "#F4F0E6",
  };
}

export default function Stack() {
  const { focus } = useFocus();
  const dimmed = focus !== "all";

  return (
    <section
      id="stack"
      className={`scroll-mt-16 border-t border-bone/10 px-5 py-20 transition-opacity duration-500 md:scroll-mt-10 md:px-10 md:py-28 ${
        dimmed ? "opacity-30" : "opacity-100"
      }`}
    >
      <p className="font-mono text-[11px] tracking-[0.28em] text-signal uppercase">02 / Stack</p>
      <h2 className="mt-3 font-serif text-5xl tracking-tight md:text-7xl">Activation map</h2>
      <p className="mt-4 max-w-xl text-bone/65">
        Brightness follows proficiency. Every cell is a tool used to ship the work above.
      </p>

      <div className="mt-12 space-y-8">
        {skillGroups.map((group) => (
          <div key={group.id} className="grid gap-4 md:grid-cols-[7rem_1fr] md:items-start">
            <h3 className="font-mono text-[11px] tracking-[0.22em] text-bone/50 uppercase">{group.label}</h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {group.skills.map((skill) => {
                const tone = cellTone(skill.level);
                return (
                  <li key={skill.name}>
                    <div
                      className="flex h-24 flex-col justify-between border border-black/20 p-3"
                      style={tone}
                      aria-label={`${skill.name}, ${skill.level} percent`}
                    >
                      <span className="font-mono text-[10px] tracking-[0.14em]">{skill.level}%</span>
                      <span className="font-serif text-lg leading-tight">{skill.name}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

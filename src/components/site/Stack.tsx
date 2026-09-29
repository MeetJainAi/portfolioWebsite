"use client";

import { skillGroups } from "@/data/portfolio";

const tones = [
  "from-[#3a2418]/80 to-white/[0.03]",
  "from-[#102833]/90 to-white/[0.03]",
  "from-[#221838]/90 to-white/[0.03]",
  "from-[#1a2410]/90 to-white/[0.03]",
];

export default function Stack() {
  const names = skillGroups.flatMap((group) => group.skills.map((skill) => skill.name));
  const loop = [...names, ...names];

  return (
    <section id="stack" className="scroll-mt-24 border-t border-white/10 py-24 md:py-32">
      <div className="overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
        <div className="ticker flex w-max gap-8 pr-8">
          {loop.map((name, index) => (
            <span key={`${name}-${index}`} className="font-serif text-2xl text-white/55 md:text-3xl">
              {name}
              <span className="mx-8 text-[#e8a06a]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.32em] text-[#e8a06a]">Stack</p>
        <h2 className="mt-3 max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">Tools with a pulse.</h2>
        <p className="mt-4 max-w-xl text-white/65">Brightness is the level. The brighter the chip, the more time it has spent in production.</p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div key={group.id} className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${tones[index]} p-6 md:p-8`}>
              <h3 className="font-serif text-3xl">{group.label}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-sm backdrop-blur-md"
                      aria-label={`${skill.name}, ${skill.level} percent`}
                    >
                      <span
                        className="h-2 w-2 rounded-full bg-[#e8a06a]"
                        style={{ boxShadow: `0 0 ${6 + skill.level / 8}px ${2 + skill.level / 40}px rgba(232,160,106,${0.25 + skill.level / 250})` }}
                      />
                      {skill.name}
                      <span className="text-xs text-white/45">{skill.level}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

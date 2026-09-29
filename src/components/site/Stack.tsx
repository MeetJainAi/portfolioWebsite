import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-16 border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1120px] px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--muted)]">Stack</p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.02] tracking-[-0.03em] md:text-6xl">Practice</h2>
          <p className="mt-5 max-w-md text-[16px] leading-[1.7] text-[#c8c4ba]">
            A working set. The mark is relative proficiency, not a scoreboard.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 0.04}>
              <h3 className="border-b border-[var(--line)] pb-3 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">{group.label}</h3>
              <ul className="mt-2">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="grid grid-cols-[minmax(0,8.5rem)_1fr_2rem] items-center gap-4 border-b border-[var(--line)] py-3">
                    <span className="text-sm">{skill.name}</span>
                    <span className="relative h-px bg-white/10" aria-hidden>
                      <span className="absolute inset-y-[-0.5px] left-0 bg-[#f2f0ea]" style={{ width: `${skill.level}%` }} />
                    </span>
                    <span className="text-right text-sm tabular-nums text-[var(--muted)]">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

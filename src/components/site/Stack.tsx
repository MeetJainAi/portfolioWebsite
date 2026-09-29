import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";

const tiles = [
  "md:col-span-7 bg-[#10241c]",
  "md:col-span-5 bg-[#3a2218]",
  "md:col-span-5 bg-[#17141f]",
  "md:col-span-7 bg-[#1a2430]",
  "md:col-span-6 bg-[#241c14]",
  "md:col-span-6 bg-[#14241c]",
];

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-16 px-5 py-20 md:px-8 md:py-28 lg:pr-[42vw] lg:pl-12">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ffb25a]">03 — Stack</p>
        <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-6xl">The working set</h2>
      </Reveal>
      <div className="mt-12 grid gap-3 md:grid-cols-12">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.04} className={tiles[index]}>
            <article className="flex min-h-[220px] flex-col justify-between p-6 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ffb25a]">{group.label}</p>
              <p className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-[-0.03em]">
                {group.skills.slice(0, 3).join(" · ")}
              </p>
              <p className="mt-4 text-sm text-[#f4efe6]/70">{group.skills.slice(3).join("  ·  ")}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

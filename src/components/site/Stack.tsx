import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";

const tiles = [
  { span: "md:col-span-7", ground: "bg-[#16382f] text-[#efe6d6]", min: "min-h-[300px] md:min-h-[340px]" },
  { span: "md:col-span-5", ground: "bg-[#e25b38] text-[#efe6d6]", min: "min-h-[260px]" },
  { span: "md:col-span-5", ground: "bg-[#e8d3a4] text-[#1a1612]", min: "min-h-[260px]" },
  { span: "md:col-span-7", ground: "bg-[#1a1612] text-[#efe6d6]", min: "min-h-[300px] md:min-h-[340px]" },
];

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-[4.25rem] bg-[#efe6d6] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1440px] lg:px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e25b38]">02 — Stack</p>
          <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-7xl">The working set</h2>
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-12">
          {skillGroups.map((group, index) => {
            const tile = tiles[index];
            const ranked = [...group.skills].sort((a, b) => b.level - a.level);
            const leads = ranked.slice(0, 2);
            const rest = ranked.slice(2);
            return (
              <Reveal key={group.id} delay={index * 0.05} className={tile.span}>
                <article className={`flex h-full flex-col justify-between p-7 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 md:p-9 ${tile.ground} ${tile.min}`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-70">{group.label}</p>
                  <div>
                    <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
                      {leads.map((skill) => (
                        <p key={skill.name} className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-none tracking-[-0.03em]">
                          {skill.name}
                        </p>
                      ))}
                    </div>
                    <p className="mt-6 max-w-lg text-sm leading-relaxed opacity-80">{rest.map((skill) => skill.name).join("  ·  ")}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

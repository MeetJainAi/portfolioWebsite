import { skillGroups } from "@/data/portfolio";

export default function Stack() {
  const [lead, ...rest] = skillGroups;

  return (
    <section id="stack" className="scroll-mt-16 px-5 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1360px]">
        <div data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#c4622d]">03 — Stack</p>
          <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-6xl">The working set</h2>
          <div data-draw className="mt-6 h-px w-24 bg-[#c4622d]" />
        </div>

        <article data-reveal className="mt-10 bg-[#1c2b4a] p-7 text-[#f3efe6] md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e7b89a]">{lead.label}</p>
          <p className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">{lead.skills.join(" · ")}</p>
        </article>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.map((group) => (
            <article key={group.id} data-reveal className="border border-[#14120f]/10 bg-[#f7f4ee] p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c4622d]">{group.label}</p>
              <p className="mt-4 font-serif text-3xl leading-tight tracking-[-0.03em]">{group.skills.slice(0, 3).join(" · ")}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#5e584f]">{group.skills.slice(3).join("  ·  ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

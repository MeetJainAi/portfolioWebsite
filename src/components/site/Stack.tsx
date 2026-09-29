import { skillGroups } from "@/data/portfolio";

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-16 bg-[#101114] px-5 py-20 text-[#f7f3ea] md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1360px]">
        <div data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ff5a1f]">Scene 03 · The manifest</p>
          <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.92] tracking-[-0.04em] md:text-6xl">What actually ships with the change.</h2>
        </div>
        <div data-reveal className="mt-12 border border-white/15">
          {skillGroups.map((group, index) => (
            <div key={group.id} className="grid gap-3 border-t border-white/15 px-5 py-6 first:border-t-0 md:grid-cols-12 md:px-8">
              <p className="font-mono text-[12px] text-[#f0c14d] md:col-span-3">
                {String(index + 1).padStart(2, "0")} {group.label}
              </p>
              <p className="font-serif text-2xl leading-snug tracking-[-0.03em] md:col-span-9 md:text-3xl">{group.skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

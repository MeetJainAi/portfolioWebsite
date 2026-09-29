import { roles } from "@/data/portfolio";

export default function Record() {
  return (
    <section id="record" className="scroll-mt-16 px-5 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-12">
        <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#c4622d]">01 — Record</p>
          <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-6xl">The engagements</h2>
          <div data-draw className="mt-6 h-px w-24 bg-[#c4622d]" />
        </div>
        <ol className="lg:col-span-8">
          {roles.map((role) => (
            <li key={`${role.title}-${role.when}`} data-reveal className="border-t border-[#14120f]/15 py-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#c4622d]">
                {role.when} · {role.place}
              </p>
              <h3 className="mt-2 font-serif text-3xl tracking-[-0.03em] md:text-4xl">{role.title}</h3>
              <p className="mt-1 text-sm text-[#5e584f]">{role.org}</p>
              <ul className="mt-4 max-w-2xl space-y-3">
                {role.points.map((point) => (
                  <li key={point} className="text-[15px] leading-[1.65] text-[#3c3832]">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

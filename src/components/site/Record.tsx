import { roles } from "@/data/portfolio";

export default function Record() {
  return (
    <section id="record" className="scroll-mt-16 bg-[#101114] px-5 py-20 text-[#f7f3ea] md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-12">
        <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ff5a1f]">Scene 01 · The shift</p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.04em] md:text-6xl">Four rooms. One through-line.</h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#a39e96]">
            Ahmedabad, then remote, then Toronto. The work gets closer to the cutover each time.
          </p>
        </div>
        <ol className="lg:col-span-8">
          {roles.map((role, index) => (
            <li key={`${role.title}-${role.when}`} data-reveal className="grid gap-4 border-t border-white/15 py-8 md:grid-cols-12">
              <p className="font-mono text-[12px] text-[#f0c14d] md:col-span-3">
                {String(index + 1).padStart(2, "0")}
                <span className="mt-2 block text-[#a39e96]">{role.when}</span>
              </p>
              <div className="md:col-span-9">
                <h3 className="font-serif text-3xl tracking-[-0.03em] md:text-4xl">{role.title}</h3>
                <p className="mt-1 text-sm text-[#a39e96]">
                  {role.org} · {role.place}
                </p>
                <ul className="mt-4 space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="text-[15px] leading-[1.65] text-[#f7f3ea]/85">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

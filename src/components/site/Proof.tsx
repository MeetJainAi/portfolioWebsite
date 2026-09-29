import { certifications, education } from "@/data/portfolio";

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-16 border-t border-[#14120f]/10 px-5 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1360px]">
        <div data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#c4622d]">04 — Proof</p>
          <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-6xl">Credentials</h2>
          <div data-draw className="mt-6 h-px w-24 bg-[#c4622d]" />
        </div>
        <ul className="mt-10 border-b border-[#14120f]/15">
          {certifications.map((cert, index) => (
            <li key={cert.id} data-reveal className="grid gap-3 border-t border-[#14120f]/15 py-6 md:grid-cols-12 md:items-center">
              <p className="font-mono text-sm text-[#c4622d] md:col-span-1">{String(index + 1).padStart(2, "0")}</p>
              <div className="md:col-span-8">
                <h3 className="font-serif text-2xl leading-tight">{cert.title}</h3>
                <p className="mt-1 text-sm text-[#5e584f]">{cert.issuer}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                {cert.href ? (
                  <a href={cert.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#c4622d]">
                    Verify <span className="arrow">↗</span>
                  </a>
                ) : (
                  <p className="text-sm text-[#5e584f]">On file</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} data-reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#c4622d]">
                {item.when} · {item.place}
              </p>
              <h3 className="mt-2 font-serif text-3xl">{item.school}</h3>
              <p className="mt-2 text-sm text-[#5e584f]">{item.credential}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { certifications, education } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-16 border-t border-white/10 px-5 py-20 md:px-8 md:py-28 lg:pr-[42vw] lg:pl-12">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ffb25a]">04 — Proof</p>
        <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-6xl">Credentials</h2>
      </Reveal>
      <ul className="mt-12 border-b border-white/10">
        {certifications.map((cert, index) => (
          <Reveal key={cert.id} delay={index * 0.03}>
            <li className="grid gap-3 border-t border-white/10 py-6 md:grid-cols-12 md:items-center">
              <p className="font-mono text-sm text-[#5ee0b5] md:col-span-1">{String(index + 1).padStart(2, "0")}</p>
              <div className="md:col-span-8">
                <h3 className="font-serif text-2xl leading-tight">{cert.title}</h3>
                <p className="mt-1 text-sm text-[#a39cab]">{cert.issuer}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                {cert.href ? (
                  <a href={cert.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#ffb25a]">
                    Verify <span className="arrow">↗</span>
                  </a>
                ) : (
                  <p className="text-sm text-[#a39cab]">On file</p>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <Reveal key={item.school}>
            <article>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#5ee0b5]">
                {item.when} · {item.place}
              </p>
              <h3 className="mt-2 font-serif text-3xl">{item.school}</h3>
              <p className="mt-2 text-sm text-[#a39cab]">{item.credential}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

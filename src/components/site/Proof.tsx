import { certifications } from "@/data/portfolio";
import Reveal from "./Reveal";

const marks = ["bg-[#16382f]", "bg-[#e25b38]", "bg-[#1a1612]", "bg-[#e8d3a4]"];

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-[4.25rem] border-t border-[#1a1612]/10 bg-[#efe6d6] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1440px] lg:px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e25b38]">03 — Proof</p>
          <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-7xl">Credentials</h2>
        </Reveal>

        <ul className="mt-12 border-b border-[#1a1612]/15">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.04}>
              <li className="group grid gap-4 border-t border-[#1a1612]/15 py-7 transition-colors duration-500 hover:bg-[#e8d3a4]/55 md:grid-cols-12 md:items-center md:gap-6 md:px-4">
                <div className="flex items-center gap-4 md:col-span-2">
                  <span className={`h-8 w-1.5 ${marks[index]}`} />
                  <p className="font-serif text-4xl tracking-tight">{cert.date}</p>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl leading-tight md:text-[1.7rem]">{cert.title}</h3>
                  <p className="mt-1 text-sm text-[#5e584f]">{cert.issuer}</p>
                </div>
                <p className="text-sm leading-relaxed text-[#3c3832] md:col-span-3">{cert.skills.join(" · ")}</p>
                <div className="md:col-span-2 md:text-right">
                  {cert.credentialUrl ? (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="link-line text-sm text-[#e25b38]">
                      Verify <span className="arrow">↗</span>
                    </a>
                  ) : (
                    <p className="text-sm text-[#5e584f]">On file</p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

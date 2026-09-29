import { certifications } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-16 border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1120px] px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--muted)]">Proof</p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.02] tracking-[-0.03em] md:text-6xl">Credentials</h2>
        </Reveal>

        <ol className="mt-12 border-t border-[var(--line)]">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.03}>
              <li className="grid gap-3 border-b border-[var(--line)] py-7 md:grid-cols-[4.5rem_1.4fr_1fr_auto] md:items-baseline md:gap-8">
                <span className="text-sm text-[var(--accent)]">{cert.date}</span>
                <div>
                  <h3 className="text-xl tracking-tight md:text-2xl">{cert.title}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{cert.issuer}</p>
                </div>
                <p className="text-sm text-[#c8c4ba]">{cert.skills.join(" · ")}</p>
                {cert.credentialUrl ? (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)]">
                    Verify <span className="arrow">↗</span>
                  </a>
                ) : (
                  <span className="text-sm text-[var(--muted)]">On file</span>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

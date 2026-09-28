"use client";

import { certifications } from "@/data/portfolio";
import { useFocus } from "./focus";

export default function Proof() {
  const { focus } = useFocus();
  const active = focus === "all" || focus === "proof";

  return (
    <section
      id="proof"
      className={`scroll-mt-16 border-t border-bone/10 px-5 py-20 transition-opacity duration-500 md:scroll-mt-10 md:px-10 md:py-28 ${
        active ? "opacity-100" : "opacity-30"
      }`}
    >
      <p className="font-mono text-[11px] tracking-[0.28em] text-signal uppercase">03 / Proof</p>
      <h2 className="mt-3 font-serif text-5xl tracking-tight md:text-7xl">Credentials</h2>

      <ol className="mt-12 divide-y divide-bone/10 border-y border-bone/10">
        {certifications.map((cert, index) => (
          <li key={cert.id} className="grid gap-3 py-7 md:grid-cols-[4rem_1.4fr_1fr_auto] md:items-baseline md:gap-6">
            <span className="font-mono text-[11px] tracking-[0.18em] text-signal">0{index + 1}</span>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl">{cert.title}</h3>
              <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-bone/45 uppercase">
                {cert.issuer} · {cert.date}
              </p>
            </div>
            <p className="font-mono text-xs tracking-[0.08em] text-bone/60 uppercase">{cert.skills.join(" · ")}</p>
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.18em] text-signal uppercase underline decoration-signal/40 underline-offset-4 hover:text-bone"
              >
                Verify
              </a>
            ) : (
              <span className="font-mono text-[11px] tracking-[0.18em] text-bone/30 uppercase">On file</span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

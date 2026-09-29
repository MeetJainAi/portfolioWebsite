import { certifications } from "@/data/portfolio";

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.32em] text-[#e8a06a]">Proof</p>
        <h2 className="mt-3 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">Credentials</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#7c6cf5]/30 blur-3xl transition duration-500 group-hover:bg-[#e8a06a]/40" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">{cert.date}</p>
                <h3 className="mt-4 font-serif text-3xl leading-tight">{cert.title}</h3>
                <p className="mt-2 text-sm text-white/60">{cert.issuer}</p>
                <p className="mt-5 text-sm text-white/70">{cert.skills.join(" · ")}</p>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
                  >
                    Verify
                  </a>
                ) : (
                  <p className="mt-6 text-sm text-white/40">Credential on file</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

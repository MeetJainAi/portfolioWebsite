import { projects } from "@/data/portfolio";

const plates = ["bg-[#f3efe6] text-[#14120f]", "bg-[#1c2b4a] text-[#f3efe6]", "bg-[#e5dfd2] text-[#14120f]"];

export default function Systems() {
  return (
    <section id="systems" className="scroll-mt-16">
      <div className="px-5 py-16 md:px-8 lg:px-12">
        <div data-reveal className="mx-auto max-w-[1360px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#c4622d]">02 — Systems</p>
          <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-6xl">Selected work</h2>
          <div data-draw className="mt-6 h-px w-24 bg-[#c4622d]" />
        </div>
      </div>
      {projects.map((project, index) => (
        <article key={project.id} id={project.id} className={plates[index]}>
          <div data-reveal className="mx-auto grid max-w-[1360px] gap-8 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-5">
              <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${index === 1 ? "text-[#e7b89a]" : "text-[#c4622d]"}`}>
                {project.index} — {project.kicker}
              </p>
              <h3 className="mt-3 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{project.title}</h3>
            </div>
            <div className="lg:col-span-7">
              <p className={`text-[16px] leading-[1.7] ${index === 1 ? "text-[#f3efe6]/85" : "text-[#3c3832]"}`}>{project.summary}</p>
              <ul className="mt-5 space-y-3">
                {project.points.map((point) => (
                  <li key={point} className={`text-[15px] leading-[1.65] ${index === 1 ? "text-[#f3efe6]/75" : "text-[#3c3832]"}`}>
                    {point}
                  </li>
                ))}
              </ul>
              <p className={`mt-6 text-sm ${index === 1 ? "text-[#e7b89a]" : "text-[#1c2b4a]"}`}>{project.stack.join("  ·  ")}</p>
              {project.href && (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex border border-current px-4 py-2 text-sm">
                  View code <span className="arrow ml-2">→</span>
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

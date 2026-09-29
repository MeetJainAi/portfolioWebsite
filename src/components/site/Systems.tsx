import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";

const themes = [
  "bg-[#10241c] text-[#f4efe6]",
  "bg-[#17141f] text-[#f4efe6]",
  "bg-[#2a1812] text-[#f4efe6]",
];

export default function Systems() {
  return (
    <section id="systems" className="scroll-mt-16">
      <div className="px-5 py-16 md:px-8 lg:pr-[42vw] lg:pl-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ffb25a]">02 — Systems</p>
          <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-6xl">Selected work</h2>
        </Reveal>
      </div>
      <div className="lg:pr-[42vw]">
        {projects.map((project, index) => (
          <article key={project.id} id={project.id} className={themes[index]}>
            <Reveal className="px-5 py-14 md:px-8 md:py-20 lg:px-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ffb25a]">
                {project.index} — {project.kicker}
              </p>
              <h3 className="mt-3 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{project.title}</h3>
              <p className="mt-5 max-w-2xl text-[16px] leading-[1.7] text-[#f4efe6]/80">{project.summary}</p>
              <ul className="mt-6 max-w-2xl space-y-3">
                {project.points.map((point) => (
                  <li key={point} className="text-[15px] leading-[1.65] text-[#f4efe6]/75">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-[#5ee0b5]">{project.stack.join("  ·  ")}</p>
              {project.href && (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex border border-current px-4 py-2 text-sm">
                  View code <span className="arrow ml-2">→</span>
                </a>
              )}
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}

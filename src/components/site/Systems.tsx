import { projects } from "@/data/portfolio";

const scenes = [
  { ground: "bg-[#f4efe4] text-[#14120f]", mute: "text-[#5e584f]", accent: "text-[#ff5a1f]" },
  { ground: "bg-[#ff5a1f] text-[#1a0c06]", mute: "text-[#1a0c06]/80", accent: "text-[#1a0c06]" },
  { ground: "bg-[#1a1e27] text-[#f7f3ea]", mute: "text-[#a39e96]", accent: "text-[#f0c14d]" },
];

export default function Systems() {
  return (
    <section id="systems" className="scroll-mt-16">
      {projects.map((project, index) => {
        const scene = scenes[index];
        return (
          <article key={project.id} id={project.id} className={`${scene.ground} min-h-[80vh]`}>
            <div data-reveal className="mx-auto flex min-h-[80vh] max-w-[1360px] flex-col justify-center px-5 py-20 md:px-8 lg:px-12">
              <p className={`font-mono text-[11px] uppercase tracking-[0.28em] ${scene.accent}`}>
                Scene 02 · {project.index} / 03 · {project.kicker}
              </p>
              <h2 className="mt-5 max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.04em]">{project.hook}</h2>
              <p className="mt-4 font-serif text-3xl italic tracking-[-0.03em]">{project.title}</p>
              <p className={`mt-6 max-w-2xl text-[16px] leading-[1.7] ${scene.mute}`}>{project.summary}</p>
              <ul className="mt-6 max-w-2xl space-y-3">
                {project.points.map((point) => (
                  <li key={point} className={`text-[15px] leading-[1.65] ${scene.mute}`}>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm">{project.stack.join("  ·  ")}</p>
              {project.href && (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit border border-current px-4 py-2 text-sm">
                  View code <span className="arrow ml-2">→</span>
                </a>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}

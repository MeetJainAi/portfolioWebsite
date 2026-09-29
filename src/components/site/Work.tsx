import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";

function PipelineDiagram() {
  const steps = ["Actions", "Docker", "SageMaker", "MLflow"];
  return (
    <svg viewBox="0 0 520 220" className="h-auto w-full" role="img" aria-label="Actions to Docker to SageMaker to MLflow, with a metrics return">
      {steps.map((step, index) => (
        <g key={step} transform={`translate(${16 + index * 128}, 28)`}>
          <rect width="104" height="48" fill="none" stroke="rgba(242,240,234,0.28)" />
          <text x="52" y="30" textAnchor="middle" fill="#f2f0ea" fontSize="13" fontFamily="Outfit, sans-serif">
            {step}
          </text>
        </g>
      ))}
      {[0, 1, 2].map((index) => (
        <path key={index} d={`M${122 + index * 128} 52 H${142 + index * 128}`} stroke="#c6a57a" strokeWidth="1.25" />
      ))}
      <path d="M432 76 C432 150, 68 150, 68 76" fill="none" stroke="rgba(242,240,234,0.28)" />
      <text x="250" y="176" textAnchor="middle" fill="#8d8a82" fontSize="12" fontFamily="Outfit, sans-serif">
        Live metrics
      </text>
    </svg>
  );
}

function CloudDiagram() {
  return (
    <svg viewBox="0 0 520 260" className="h-auto w-full" role="img" aria-label="AWS, Azure, and GCP joined by Terraform and Kubernetes">
      <path d="M260 42 L92 196 L428 196 Z" fill="none" stroke="rgba(242,240,234,0.28)" />
      <line x1="260" y1="118" x2="260" y2="42" stroke="#c6a57a" />
      <line x1="260" y1="118" x2="92" y2="196" stroke="#c6a57a" />
      <line x1="260" y1="118" x2="428" y2="196" stroke="#c6a57a" />
      {[
        ["AWS", 260, 42],
        ["Azure", 92, 196],
        ["GCP", 428, 196],
      ].map(([name, x, y]) => (
        <g key={String(name)}>
          <circle cx={Number(x)} cy={Number(y)} r="22" fill="#0c0c0b" stroke="rgba(242,240,234,0.4)" />
          <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fill="#f2f0ea" fontSize="12" fontFamily="Outfit, sans-serif">
            {name}
          </text>
        </g>
      ))}
      <text x="260" y="242" textAnchor="middle" fill="#8d8a82" fontSize="13" fontFamily="Outfit, sans-serif">
        Terraform · Kubernetes
      </text>
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="scroll-mt-16 border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1120px] px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--muted)]">Work</p>
          <h2 className="mt-4 max-w-xl font-serif text-5xl leading-[1.02] tracking-[-0.03em] md:text-6xl">Selected systems</h2>
        </Reveal>

        <div className="mt-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article id={project.id} className="grid gap-10 border-t border-[var(--line)] py-14 lg:grid-cols-12 lg:gap-8">
                <p className="text-sm text-[var(--accent)] lg:col-span-1">{project.index}</p>
                <div className="lg:col-span-5">
                  <h3 className="font-serif text-4xl leading-tight tracking-[-0.02em]">{project.title}</h3>
                  <p className="mt-5 max-w-md text-[16px] leading-[1.7] text-[#c8c4ba]">{project.problem}</p>
                  <p className="mt-6 text-sm text-[var(--muted)]">{project.techStack.join("  ·  ")}</p>
                  <dl className="mt-8 flex gap-10">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dd className="font-serif text-3xl">{metric.value}</dd>
                        <dt className="mt-1 max-w-[9rem] text-[12px] leading-snug text-[var(--muted)]">{metric.label}</dt>
                      </div>
                    ))}
                  </dl>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex text-sm"
                  >
                    View code <span className="arrow ml-2">→</span>
                  </a>
                </div>
                <div className="border border-[var(--line)] bg-[#141413] p-6 lg:col-span-6 lg:p-8">
                  {index === 0 ? <PipelineDiagram /> : <CloudDiagram />}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

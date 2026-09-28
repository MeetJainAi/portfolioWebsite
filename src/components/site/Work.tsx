"use client";

import { projects } from "@/data/portfolio";
import Frame from "./Frame";
import { useFocus } from "./focus";

function PipelineSchematic() {
  const steps = ["Actions", "Docker", "SageMaker", "MLflow"];
  return (
    <svg viewBox="0 0 640 210" className="h-auto w-full font-mono" role="img" aria-label="Pipeline from GitHub Actions through Docker and SageMaker to MLflow, with a monitoring loop">
      {steps.map((step, index) => (
        <g key={step}>
          <g transform={`translate(${20 + index * 158}, 36)`}>
            <rect width="120" height="58" fill="#1C1A16" stroke="rgba(244,240,230,0.7)" />
            <text x="60" y="35" textAnchor="middle" fill="#F4F0E6" fontSize="13">
              {step}
            </text>
          </g>
          {index < steps.length - 1 && (
            <g transform={`translate(${140 + index * 158}, 65)`}>
              <line x1="0" y1="0" x2="28" y2="0" stroke="#FF5C39" strokeWidth="2" />
              <polygon points="28,0 20,-5 20,5" fill="#FF5C39" />
            </g>
          )}
        </g>
      ))}
      <path d="M554 94 C554 168, 80 168, 80 94" fill="none" stroke="#C8F54B" strokeWidth="1.5" />
      <text x="320" y="178" textAnchor="middle" fill="#C8F54B" fontSize="12">
        live metrics
      </text>
    </svg>
  );
}

function CloudSchematic() {
  const clouds = [
    { name: "AWS", x: 320, y: 48 },
    { name: "Azure", x: 96, y: 230 },
    { name: "GCP", x: 544, y: 230 },
  ];
  return (
    <svg viewBox="0 0 640 300" className="h-auto w-full font-mono" role="img" aria-label="AWS, Azure, and GCP connected through Terraform and Kubernetes">
      <polygon points="320,48 96,230 544,230" fill="none" stroke="rgba(244,240,230,0.35)" />
      {clouds.map((cloud) => (
        <line key={cloud.name} x1="320" y1="150" x2={cloud.x} y2={cloud.y} stroke="#FF5C39" strokeWidth="1.25" />
      ))}
      {clouds.map((cloud) => (
        <g key={cloud.name}>
          <circle cx={cloud.x} cy={cloud.y} r="28" fill="#1C1A16" stroke="rgba(244,240,230,0.7)" />
          <text x={cloud.x} y={cloud.y + 4} textAnchor="middle" fill="#F4F0E6" fontSize="12">
            {cloud.name}
          </text>
        </g>
      ))}
      <rect x="248" y="124" width="144" height="52" fill="#12110E" stroke="#C8F54B" />
      <text x="320" y="146" textAnchor="middle" fill="#C8F54B" fontSize="11">
        TERRAFORM
      </text>
      <text x="320" y="164" textAnchor="middle" fill="#F4F0E6" fontSize="11">
        KUBERNETES
      </text>
    </svg>
  );
}

export default function Work() {
  const { focus } = useFocus();

  return (
    <section id="work" className="scroll-mt-16 border-t border-bone/10 px-5 py-20 md:scroll-mt-10 md:px-10 md:py-28">
      <p className="font-mono text-[11px] tracking-[0.28em] text-signal uppercase">01 / Work</p>
      <h2 className="mt-3 font-serif text-5xl tracking-tight md:text-7xl">Selected work</h2>

      <div className="mt-14 space-y-20">
        {projects.map((project, index) => {
          const active = focus === "all" || focus === project.focus;
          const Schematic = index === 0 ? PipelineSchematic : CloudSchematic;
          return (
            <article
              key={project.id}
              id={project.id}
              className={`scroll-mt-24 grid items-center gap-8 border-t border-bone/10 pt-10 transition-opacity duration-500 lg:grid-cols-2 ${
                active ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="font-mono text-[11px] tracking-[0.22em] text-bone/40 uppercase">Trace {project.index}</p>
                <h3 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{project.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-bone/75">{project.problem}</p>
                <p className="mt-5 font-mono text-xs tracking-[0.08em] text-bone/55 uppercase">
                  {project.techStack.join(" · ")}
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-mono text-xs tracking-[0.18em] text-signal uppercase underline decoration-signal/50 underline-offset-4 hover:text-bone"
                >
                  View code
                </a>
              </div>

              <div>
                <Frame className="bg-surface/50 p-4 md:p-6">
                  <Schematic />
                </Frame>
                <dl className="mt-6 grid grid-cols-2 gap-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd className="font-serif text-4xl text-spark md:text-5xl">{metric.value}</dd>
                      <dt className="mt-1 font-mono text-[10px] tracking-[0.16em] text-bone/50 uppercase">{metric.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

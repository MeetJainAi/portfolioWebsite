import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";

function PipelineArt() {
  const steps = ["Actions", "Docker", "SageMaker", "MLflow"];

  return (
    <svg viewBox="0 0 520 240" className="h-auto w-full" role="img" aria-label="Pipeline from Actions through Docker and SageMaker to MLflow">
      <rect x="28" y="132" width="464" height="8" fill="#e25b38" />
      {steps.map((step, index) => {
        const x = 36 + index * 122;
        return (
          <g key={step}>
            <rect x={x} y="64" width="108" height="72" fill="#efe6d6" stroke="#1a1612" strokeWidth="1" />
            <text x={x + 14} y="88" fill="#e25b38" fontSize="11" fontFamily="IBM Plex Mono, monospace">
              0{index + 1}
            </text>
            <text x={x + 14} y="114" fill="#1a1612" fontSize="13" fontFamily="Outfit, sans-serif">
              {step}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function CloudArt() {
  return (
    <svg viewBox="0 0 560 340" className="h-auto w-full" role="img" aria-label="AWS, Azure, and GCP connected through Terraform and Kubernetes">
      <path d="M280 64 L 108 262 L 452 262 Z" fill="#e8d3a4" fillOpacity="0.28" stroke="#1a1612" strokeWidth="1.25" />
      <circle cx="280" cy="64" r="34" fill="#16382f" />
      <circle cx="108" cy="262" r="34" fill="#1a1612" />
      <circle cx="452" cy="262" r="34" fill="#efe6d6" />
      <text x="280" y="69" textAnchor="middle" fill="#efe6d6" fontSize="13" fontFamily="Outfit, sans-serif">
        AWS
      </text>
      <text x="108" y="267" textAnchor="middle" fill="#efe6d6" fontSize="13" fontFamily="Outfit, sans-serif">
        Azure
      </text>
      <text x="452" y="267" textAnchor="middle" fill="#1a1612" fontSize="13" fontFamily="Outfit, sans-serif">
        GCP
      </text>
      <rect x="188" y="148" width="184" height="56" fill="#efe6d6" />
      <text x="280" y="172" textAnchor="middle" fill="#1a1612" fontSize="15" fontFamily="Outfit, sans-serif">
        Terraform
      </text>
      <text x="280" y="192" textAnchor="middle" fill="#5e584f" fontSize="12" fontFamily="Outfit, sans-serif">
        Kubernetes
      </text>
    </svg>
  );
}

export default function Work() {
  const [deploy, cloud] = projects;

  return (
    <section id="work" className="scroll-mt-[4.25rem]">
      <div className="bg-[#efe6d6] px-5 py-16 sm:px-8 md:py-24">
        <Reveal className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-6 lg:px-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e25b38]">01 — Work</p>
            <h2 className="mt-3 font-serif text-5xl tracking-[-0.04em] md:text-7xl">Selected systems</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#5e584f]">Two systems. Deployment on one side, three clouds on the other.</p>
        </Reveal>
      </div>

      <article id={deploy.id} className="bg-[#16382f] text-[#efe6d6]">
        <div className="grid lg:grid-cols-2">
          <Reveal className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e8d3a4]">{deploy.index}</p>
            <h3 className="mt-4 max-w-xl font-serif text-4xl leading-[1.02] tracking-[-0.03em] md:text-6xl">{deploy.title}</h3>
            <p className="mt-6 max-w-md text-[16px] leading-[1.7] text-[#e8d3a4]">{deploy.problem}</p>
            <p className="mt-6 text-sm text-[#efe6d6]/80">{deploy.techStack.join("  ·  ")}</p>
            <dl className="mt-8 flex gap-10 border-t border-[#efe6d6]/15 pt-6">
              {deploy.metrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="font-serif text-5xl tracking-tight text-[#e8d3a4]">{metric.value}</dd>
                  <dt className="mt-2 max-w-[9rem] text-[12px] leading-snug text-[#efe6d6]/75">{metric.label}</dt>
                </div>
              ))}
            </dl>
            <a
              href={deploy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit border border-[#efe6d6]/35 px-4 py-2.5 text-sm transition-colors duration-300 hover:bg-[#efe6d6] hover:text-[#16382f]"
            >
              View code <span className="arrow ml-2">→</span>
            </a>
          </Reveal>
          <Reveal delay={0.08} className="flex items-center bg-[#102820] px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
            <div className="w-full bg-[#f6f0e4] p-4 text-[#1a1612] shadow-[0_24px_50px_rgba(0,0,0,0.22)] sm:p-6">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#e25b38]">Deploy path</p>
              <PipelineArt />
            </div>
          </Reveal>
        </div>
      </article>

      <article id={cloud.id} className="bg-[#efe6d6] text-[#1a1612]">
        <div className="grid lg:grid-cols-2">
          <Reveal delay={0.08} className="order-2 flex items-center bg-[#e25b38] px-5 py-12 text-[#efe6d6] sm:px-8 lg:order-1 lg:px-12 lg:py-20">
            <div className="w-full">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#1a1612]">Three clouds</p>
              <CloudArt />
            </div>
          </Reveal>
          <Reveal className="order-1 flex flex-col justify-center px-5 py-16 sm:px-8 lg:order-2 lg:px-16 lg:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e25b38]">{cloud.index}</p>
            <h3 className="mt-4 max-w-xl font-serif text-4xl leading-[1.02] tracking-[-0.03em] md:text-6xl">{cloud.title}</h3>
            <p className="mt-6 max-w-md text-[16px] leading-[1.7] text-[#5e584f]">{cloud.problem}</p>
            <p className="mt-6 text-sm">{cloud.techStack.join("  ·  ")}</p>
            <dl className="mt-8 flex gap-10 border-t border-[#1a1612]/15 pt-6">
              {cloud.metrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="font-serif text-5xl tracking-tight text-[#e25b38]">{metric.value}</dd>
                  <dt className="mt-2 max-w-[9rem] text-[12px] leading-snug text-[#5e584f]">{metric.label}</dt>
                </div>
              ))}
            </dl>
            <a
              href={cloud.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit border border-[#1a1612] px-4 py-2.5 text-sm transition-colors duration-300 hover:bg-[#1a1612] hover:text-[#efe6d6]"
            >
              View code <span className="arrow ml-2">→</span>
            </a>
          </Reveal>
        </div>
      </article>
    </section>
  );
}

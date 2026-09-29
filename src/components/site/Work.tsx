"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/portfolio";

const visuals = [
  {
    wash: "from-[#3a2418] via-[#14121a] to-[#0c0c12]",
    glow: "bg-[#e8a06a]",
    steps: [
      { label: "Actions", className: "left-[6%] top-[42%]" },
      { label: "Docker", className: "left-[30%] top-[28%]" },
      { label: "SageMaker", className: "left-[54%] top-[46%]" },
      { label: "MLflow", className: "left-[76%] top-[24%]" },
    ],
  },
  {
    wash: "from-[#102028] via-[#12101c] to-[#0c0c12]",
    glow: "bg-[#5ec4d6]",
    steps: [
      { label: "AWS", className: "left-[38%] top-[12%]" },
      { label: "Azure", className: "left-[8%] top-[58%]" },
      { label: "GCP", className: "left-[68%] top-[58%]" },
    ],
  },
];

function StageVisual({ index }: { index: number }) {
  const visual = visuals[index];
  return (
    <div className={`relative min-h-[320px] overflow-hidden rounded-[24px] bg-gradient-to-br ${visual.wash} lg:min-h-full`}>
      <div className={`absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full ${visual.glow} opacity-30 blur-3xl`} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 420" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id={`flow-${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8a06a" />
            <stop offset="55%" stopColor="#fff6ec" />
            <stop offset="100%" stopColor="#7c6cf5" />
          </linearGradient>
        </defs>
        {index === 0 ? (
          <path
            d="M70 210 C 160 120, 220 120, 280 180 S 400 250, 520 130"
            fill="none"
            stroke={`url(#flow-${index})`}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M300 90 L 120 280 L 480 280 Z"
            fill="none"
            stroke={`url(#flow-${index})`}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        )}
      </svg>
      {visual.steps.map((step) => (
        <div
          key={step.label}
          className={`absolute ${step.className} rounded-full border border-white/25 bg-black/40 px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-white shadow-[0_0_36px_rgba(232,160,106,0.35)] backdrop-blur-md`}
        >
          {step.label}
        </div>
      ))}
      {index === 1 && (
        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 rounded-full border border-[#c8f54b]/40 bg-black/50 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#d6f58a] backdrop-blur-md">
          Terraform · Kubernetes
        </div>
      )}
    </div>
  );
}

export default function Work() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.32em] text-[#e8a06a]">Selected work</p>
        <h2 className="mt-3 max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
          Two systems, built to run.
        </h2>

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              id={project.id}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-between p-7 md:p-12">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/40">0{index + 1}</p>
                    <h3 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">{project.title}</h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">{project.problem}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <li key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
                    <dl className="flex gap-8">
                      {project.metrics.map((metric) => (
                        <div key={metric.label}>
                          <dd className="font-serif text-4xl text-[#e8a06a]">{metric.value}</dd>
                          <dt className="mt-1 max-w-[8rem] text-[10px] uppercase tracking-[0.16em] text-white/45">{metric.label}</dt>
                        </div>
                      ))}
                    </dl>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#e8a06a]"
                    >
                      View code
                    </a>
                  </div>
                </div>
                <StageVisual index={index} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

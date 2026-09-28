"use client";

import Frame from "./Frame";
import { useFocus } from "./focus";
import { chips, profile, prompts, type FocusId } from "@/data/portfolio";

function AttentionGraph({
  focus,
  onNode,
  tall = false,
}: {
  focus: FocusId;
  onNode: (node: (typeof nodes)[number]) => void;
  tall?: boolean;
}) {
  return (
    <Frame className={`bg-ground/40 ${tall ? "min-h-[520px]" : "min-h-[340px]"}`}>
      <p className="absolute left-4 top-4 z-10 font-mono text-[10px] tracking-[0.22em] text-bone/40 uppercase">
        Attention graph
      </p>
      <div className={`relative ${tall ? "h-[520px]" : "h-[340px]"}`}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
          {nodes
            .filter((node) => !node.core)
            .map((node, index) => {
              const hot = focus === "all" || focus === node.focus;
              return (
                <line
                  key={node.id}
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  pathLength={1}
                  className="graph-line"
                  style={{ animationDelay: `${index * 140}ms` }}
                  stroke={hot && focus !== "all" ? "#FF5C39" : "rgba(244,240,230,0.72)"}
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                  opacity={focus !== "all" && !hot ? 0.25 : 1}
                />
              );
            })}
        </svg>
        {nodes.map((node) => {
          const hot = node.core || focus === "all" || focus === node.focus;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => onNode(node)}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 text-left transition-opacity duration-500 ${
                hot ? "opacity-100" : "opacity-30"
              }`}
            >
              <span
                className={`flex flex-col items-center ${
                  node.core
                    ? "h-20 w-20 justify-center rounded-full border border-signal bg-ground lg:h-24 lg:w-24"
                    : "min-w-[4.5rem] border border-bone/20 bg-ground/90 px-2 py-2"
                }`}
              >
                <span className={`font-mono text-[10px] tracking-[0.16em] uppercase ${node.core ? "text-signal" : "text-bone/45"}`}>
                  {node.sub}
                </span>
                <span className={`font-serif text-bone ${node.core ? "text-xl lg:text-2xl" : "text-lg"}`}>{node.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </Frame>
  );
}

const nodes: {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  target: string;
  focus: FocusId | null;
  core?: boolean;
}[] = [
  { id: "meet", x: 50, y: 50, label: "Meet", sub: "core", target: "signal", focus: "all", core: true },
  { id: "deploy", x: 24, y: 24, label: "MLOps", sub: "pipeline", target: "project-deploy", focus: "deploy" },
  { id: "cloud", x: 78, y: 26, label: "Clouds", sub: "three", target: "project-cloud", focus: "cloud" },
  { id: "stack", x: 24, y: 76, label: "Stack", sub: "map", target: "stack", focus: null },
  { id: "proof", x: 76, y: 74, label: "Proof", sub: "certs", target: "proof", focus: "proof" },
];

export default function Signal() {
  const { focus, toggleFocus, clearFocus, goTo } = useFocus();

  const onNode = (node: (typeof nodes)[number]) => {
    if (node.focus && node.focus !== "all") {
      toggleFocus(node.focus);
      return;
    }
    if (node.id === "meet") {
      clearFocus();
      goTo("signal");
      return;
    }
    goTo(node.target);
  };

  return (
    <header id="signal" className="scroll-mt-16 px-5 pb-20 pt-8 md:scroll-mt-10 md:px-10 md:pb-28 md:pt-12">
      <p className="font-mono text-[11px] tracking-[0.32em] text-bone/45 uppercase">
        Model card · Meet Shah · Status available
      </p>

      <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
        <div>
          <h1 className="font-serif text-[clamp(4.6rem,11vw,8.25rem)] leading-[0.84] tracking-[-0.03em] text-bone">
            Meet
            <span className="block italic text-bone/85">Shah</span>
          </h1>
          <p className="mt-5 font-serif text-2xl italic text-bone/80 md:text-3xl">{profile.role}.</p>
          <div className="mt-8 lg:hidden">
            <AttentionGraph focus={focus} onNode={onNode} />
          </div>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/70">{profile.bio}</p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-bone/10 py-5">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-bone/45 uppercase">{stat.label}</dt>
                <dd className="mt-1 font-serif text-3xl text-spark md:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {profile.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-[0.18em] text-bone uppercase underline decoration-signal/70 decoration-1 underline-offset-4 hover:text-signal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Frame className="mt-8 bg-surface/70">
            <div className="flex items-center gap-3 border-b border-bone/10 px-4 py-3">
              <span className="text-signal" aria-hidden>
                ▸
              </span>
              <p className="font-mono text-sm text-bone" aria-live="polite">
                {prompts[focus]}
                <span className="blink ml-1 inline-block h-4 w-[2px] translate-y-[2px] bg-signal align-middle" />
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 px-3 py-3">
              {chips.map((chip) => {
                const pressed = focus === chip.id;
                return (
                  <button
                    key={chip.id}
                    type="button"
                    aria-pressed={pressed}
                    onClick={() => toggleFocus(chip.id)}
                    className={`px-3 py-2 font-mono text-[11px] tracking-[0.16em] uppercase ${
                      pressed
                        ? "bg-signal text-ground"
                        : "border border-bone/20 text-bone/80 hover:border-signal hover:text-bone"
                    }`}
                  >
                    {chip.label}
                  </button>
                );
              })}
              {focus !== "all" && (
                <button
                  type="button"
                  onClick={clearFocus}
                  className="px-3 py-2 font-mono text-[11px] tracking-[0.16em] text-bone/50 uppercase hover:text-bone"
                >
                  Show all
                </button>
              )}
            </div>
          </Frame>
        </div>

        <div className="hidden lg:block">
          <AttentionGraph focus={focus} onNode={onNode} tall />
        </div>
      </div>
    </header>
  );
}

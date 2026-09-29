import Channel from "./Channel";
import Proof from "./Proof";
import Rail from "./Rail";
import Signal from "./Signal";
import Stack from "./Stack";
import Work from "./Work";

export default function Site() {
  return (
    <div className="relative min-h-screen bg-[#07070b] text-[#f6f1ea]">
      <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.14] mix-blend-overlay" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      <a
        href="#signal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>
      <Rail />
      <main>
        <Signal />
        <Work />
        <Stack />
        <Proof />
        <Channel />
      </main>
    </div>
  );
}

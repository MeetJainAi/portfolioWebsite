import Channel from "./Channel";
import Proof from "./Proof";
import Rail from "./Rail";
import Signal from "./Signal";
import Stack from "./Stack";
import Work from "./Work";

export default function Site() {
  return (
    <div className="min-h-screen bg-[#efe6d6] text-[#1a1612]">
      <div className="pointer-events-none fixed inset-y-0 left-0 z-50 hidden w-2 bg-[#e25b38] md:block" aria-hidden />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-[#1a1612] focus:px-3 focus:py-2 focus:text-sm focus:text-[#efe6d6]"
      >
        Skip to work
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

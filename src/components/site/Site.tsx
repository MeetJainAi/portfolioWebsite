import Channel from "./Channel";
import Proof from "./Proof";
import Rail from "./Rail";
import Signal from "./Signal";
import Stack from "./Stack";
import Work from "./Work";

export default function Site() {
  return (
    <div className="min-h-screen bg-[#0c0c0b] text-[#f2f0ea]">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[#f2f0ea] focus:px-3 focus:py-2 focus:text-sm focus:text-[#0c0c0b]"
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

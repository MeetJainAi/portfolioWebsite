import Channel from "./Channel";
import Chrome from "./Chrome";
import MotionRoot from "./motion";
import Proof from "./Proof";
import Record from "./Record";
import Signal from "./Signal";
import Stack from "./Stack";
import Systems from "./Systems";

export default function Site() {
  return (
    <MotionRoot>
      <div className="min-h-screen bg-[#101114] text-[#f7f3ea]">
        <a
          href="#systems"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-[#ff5a1f] focus:px-3 focus:py-2 focus:text-sm focus:text-[#1a0c06]"
        >
          Skip to work
        </a>
        <Chrome />
        <main>
          <Signal />
          <Record />
          <Systems />
          <Stack />
          <Proof />
          <Channel />
        </main>
      </div>
    </MotionRoot>
  );
}

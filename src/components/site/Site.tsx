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
      <div className="min-h-screen bg-[#f3efe6] text-[#14120f]">
        <a
          href="#systems"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-[#14120f] focus:px-3 focus:py-2 focus:text-sm focus:text-[#f3efe6]"
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

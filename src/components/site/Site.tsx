import Ask from "./Ask";
import Channel from "./Channel";
import Chrome from "./Chrome";
import Proof from "./Proof";
import Record from "./Record";
import Signal from "./Signal";
import Stack from "./Stack";
import Systems from "./Systems";

export default function Site() {
  return (
    <div className="min-h-screen bg-[#0c0b10] pb-24 text-[#f4efe6]">
      <a
        href="#systems"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-[#ffb25a] focus:px-3 focus:py-2 focus:text-sm focus:text-[#1a1208]"
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
      <Ask />
    </div>
  );
}

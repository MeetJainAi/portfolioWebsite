"use client";

import Channel from "./Channel";
import { FocusProvider } from "./focus";
import Proof from "./Proof";
import Rail from "./Rail";
import Signal from "./Signal";
import Stack from "./Stack";
import Work from "./Work";

export default function Site() {
  return (
    <FocusProvider>
      <a
        href="#signal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-signal focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-ground"
      >
        Skip to content
      </a>
      <Rail />
      <main className="relative pt-14 md:pt-0 md:pl-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_480px_at_85%_0%,rgba(255,92,57,0.16),transparent_60%),radial-gradient(700px_420px_at_0%_80%,rgba(200,245,75,0.06),transparent_55%)]" />
        <Signal />
        <Work />
        <Stack />
        <Proof />
        <Channel />
      </main>
    </FocusProvider>
  );
}

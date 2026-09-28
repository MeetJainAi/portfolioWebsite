"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { chips, type FocusId } from "@/data/portfolio";

type FocusContextValue = {
  focus: FocusId;
  toggleFocus: (id: Exclude<FocusId, "all">) => void;
  clearFocus: () => void;
  goTo: (sectionId: string) => void;
};

const FocusContext = createContext<FocusContextValue | null>(null);

function scrollToId(id: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
}

export function FocusProvider({ children }: { children: React.ReactNode }) {
  const [focus, setFocus] = useState<FocusId>("all");

  const value = useMemo<FocusContextValue>(
    () => ({
      focus,
      toggleFocus: (id) => {
        const next = focus === id ? "all" : id;
        setFocus(next);
        if (next === "all") return;
        const target = chips.find((chip) => chip.id === next)?.target;
        if (target) scrollToId(target);
      },
      clearFocus: () => setFocus("all"),
      goTo: (sectionId) => {
        setFocus("all");
        scrollToId(sectionId);
      },
    }),
    [focus]
  );

  return <FocusContext.Provider value={value}>{children}</FocusContext.Provider>;
}

export function useFocus() {
  const context = useContext(FocusContext);
  if (!context) {
    throw new Error("useFocus must be used within FocusProvider");
  }
  return context;
}

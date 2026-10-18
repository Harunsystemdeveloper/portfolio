"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

/** Sant när ljust läge är aktivt (klassen .light på <html>). */
export function useIsLight() {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains("light"),
    () => false,
  );
}

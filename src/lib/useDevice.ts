"use client";

import { useSyncExternalStore } from "react";

const SMALL = "(max-width: 767px)";
const COARSE = "(pointer: coarse)";

function subscribe(callback: () => void) {
  const queries = [SMALL, COARSE].map((q) => window.matchMedia(q));
  queries.forEach((mq) => mq.addEventListener("change", callback));
  return () => queries.forEach((mq) => mq.removeEventListener("change", callback));
}

// Returnerar en bitmask (primitivt värde krävs av useSyncExternalStore)
function getSnapshot() {
  const nav = navigator as Navigator & { deviceMemory?: number };
  const weak = (nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 4;
  return (
    (window.matchMedia(SMALL).matches ? 1 : 0) |
    (window.matchMedia(COARSE).matches ? 2 : 0) |
    (weak ? 4 : 0)
  );
}

/** Information om enheten, eller null under serverrendering. */
export function useDevice() {
  const mask = useSyncExternalStore(subscribe, getSnapshot, () => -1);
  if (mask < 0) return null;
  const small = (mask & 1) !== 0;
  const coarse = (mask & 2) !== 0;
  const weak = (mask & 4) !== 0;
  return { small, coarse, lowPower: small || weak };
}

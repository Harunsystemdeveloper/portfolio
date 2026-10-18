"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Årtalet läses i webbläsaren så att sidan kan förrenderas statiskt. */
export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => null);
  return <span>{year}</span>;
}

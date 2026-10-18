"use client";

/** Årtalet räknas ut i webbläsaren så att sidan kan förrenderas statiskt. */
export default function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}

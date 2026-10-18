"use client";

import { useIsLight } from "@/lib/useIsLight";

export default function ThemeToggle() {
  const isLight = useIsLight();

  function toggle() {
    const next = !isLight;
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Byt till mörkt läge" : "Byt till ljust läge"}
      title={isLight ? "Mörkt läge" : "Ljust läge"}
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-gold hover:text-gold"
    >
      {isLight ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}

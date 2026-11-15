"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, person } from "@/data/content";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const progress = useRef<HTMLSpanElement>(null);

  // Förloppsindikatorn uppdateras direkt i DOM:en för att slippa omrenderingar
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${ratio})`;
      setScrolled(window.scrollY > 12);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Markerar den sektion som just nu syns mitt på skärmen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const link of navLinks) {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    }
    const top = document.getElementById("top");
    if (top) observer.observe(top);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`relative mx-auto max-w-6xl overflow-hidden rounded-2xl border transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled || open
            ? "border-line bg-bg/75 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav aria-label="Huvudmeny" className="flex h-14 items-center justify-between pr-2 pl-3 sm:pr-3">
          <a href="#top" className="group flex items-center gap-2.5 font-display font-semibold" onClick={() => setOpen(false)}>
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold to-cyan text-sm font-bold text-on-accent transition-transform duration-500 group-hover:rotate-[8deg]">
              {initials}
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-[15px]">{person.name}</span>
              <span className="font-mono text-[10px] font-normal tracking-wider text-subtle uppercase">.NET · Cloud · AI</span>
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm transition ${
                      isActive ? "bg-surface text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {isActive && <span aria-hidden className="absolute top-1/2 left-1.5 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan" />}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#kontakt" className="btn btn-primary !px-4 !py-2 text-sm md:hidden lg:inline-flex">
              Anställ mig
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
              aria-expanded={open}
              aria-controls="mobilmeny"
              aria-label={open ? "Stäng menyn" : "Öppna menyn"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-5" aria-hidden>
                <span className={`absolute left-0 h-0.5 w-5 bg-fg transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute top-1.5 left-0 h-0.5 w-5 bg-fg transition ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 h-0.5 w-5 bg-fg transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </nav>

        <div id="mobilmeny" hidden={!open} className="border-t border-line md:hidden">
          <ul className="flex flex-col p-2">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 rounded-xl px-3 py-3 font-display text-xl transition hover:bg-surface hover:text-cyan"
                >
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <span
          ref={progress}
          aria-hidden
          className={`absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-cyan transition-opacity ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </header>
  );
}

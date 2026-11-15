"use client";

import { useEffect } from "react";

/**
 * Håller dekorativa animationer borta från huvudtråden när de inte behövs:
 * - sätter .anim-ready på <html> först när sidan laddat klart och webbläsaren är ledig
 * - pausar animationerna i sektioner som inte syns (attributet data-paused)
 */
export default function MotionGate() {
  useEffect(() => {
    let idleId: number | undefined;
    let timer: number | undefined;
    const start = () => {
      timer = window.setTimeout(() => {
        const ready = () => document.documentElement.classList.add("anim-ready");
        if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(ready, { timeout: 3000 });
        else ready();
      }, 600);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.target.toggleAttribute("data-paused", !entry.isIntersecting);
    });
    document.querySelectorAll("main > section").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("load", start);
      window.clearTimeout(timer);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      observer.disconnect();
    };
  }, []);

  return null;
}

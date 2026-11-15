"use client";

import { useEffect } from "react";

/**
 * Håller dekorativa animationer borta från huvudtråden när de inte behövs:
 * - sätter .anim-ready på <html> först när sidan laddat klart och webbläsaren är ledig
 * - pausar animationerna i sektioner som inte syns (attributet data-paused)
 *
 * Båda startar efter hydreringen, så att React inte ser attribut som servern inte renderade.
 */
export default function MotionGate() {
  useEffect(() => {
    let idleId: number | undefined;
    let timer: number | undefined;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.target.toggleAttribute("data-paused", !entry.isIntersecting);
    });

    const ready = () => {
      document.querySelectorAll("main > section").forEach((el) => observer.observe(el));
      document.documentElement.classList.add("anim-ready");
    };
    const start = () => {
      timer = window.setTimeout(() => {
        if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(ready, { timeout: 3000 });
        else ready();
      }, 600);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      window.removeEventListener("load", start);
      window.clearTimeout(timer);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      observer.disconnect();
    };
  }, []);

  return null;
}

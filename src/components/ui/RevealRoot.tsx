"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]:not(.is-in)";

/**
 * Ger alla [data-reveal]-element klassen "is-in" när de scrollas in i bild.
 * Bevakar även element som läggs till senare (t.ex. vid omrendering), så att
 * inget innehåll kan fastna osynligt.
 */
export default function RevealRoot() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px 40px 0px" },
    );
    const observeAll = () => document.querySelectorAll(SELECTOR).forEach((el) => observer.observe(el));
    observeAll();

    let frame = 0;
    const mutations = new MutationObserver(() => {
      if (!frame) frame = requestAnimationFrame(() => ((frame = 0), observeAll()));
    });
    mutations.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

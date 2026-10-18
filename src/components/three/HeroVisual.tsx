"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDevice } from "@/lib/useDevice";
import { useIsLight } from "@/lib/useIsLight";
import SceneFallback from "./SceneFallback";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

/** Laddar 3D-scenen när webbläsaren är ledig och pausar den när den inte syns. */
export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const device = useDevice();
  const light = useIsLight();
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);

  // Vänta tills sidan är interaktiv innan det tunga 3D-paketet hämtas
  useEffect(() => {
    if (reducedMotion || !device) return;
    const delay = device.lowPower ? 1200 : 200;
    let idleId: number | undefined;
    const timer = window.setTimeout(() => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(() => setReady(true), { timeout: 2000 });
      } else {
        setReady(true);
      }
    }, delay);
    return () => {
      window.clearTimeout(timer);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
    };
  }, [reducedMotion, device]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: "100px",
    });
    observer.observe(el);
    const onVisibility = () => setVisible(!document.hidden && el.getBoundingClientRect().bottom > 0);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const show3D = ready && device && !reducedMotion;

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0" aria-hidden>
      {show3D ? (
        <HeroScene
          lowPower={device.lowPower}
          interaction={device.coarse ? "scroll" : "pointer"}
          active={visible}
          light={light}
        />
      ) : (
        <SceneFallback />
      )}
    </div>
  );
}

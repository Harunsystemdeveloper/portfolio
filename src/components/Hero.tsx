import { person } from "@/data/content";
import Icon from "./ui/Icon";
import HeroVisual from "./three/HeroVisual";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-rubrik" className="relative isolate flex min-h-svh items-start overflow-hidden lg:items-center">
      <div className="bg-grid absolute inset-0 -z-20 opacity-60" aria-hidden />
      <div className="absolute inset-0 -z-10">
        <HeroVisual />
      </div>
      {/* Gör texten läsbar ovanpå scenen */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg/70 to-transparent lg:bg-gradient-to-r lg:from-bg lg:via-bg/60 lg:to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-[34svh] sm:px-6 lg:pt-24 lg:pb-16">
        <div className="max-w-xl">
          <p className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted backdrop-blur sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            {person.status}
          </p>

          <h1 id="hero-rubrik" className="font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {person.name}
          </h1>
          <p className="animate-rise mt-4 font-display text-xl font-medium text-gradient sm:text-2xl" style={{ animationDelay: "80ms" }}>
            {person.title}
          </p>
          <p className="animate-rise mt-6 text-base leading-relaxed text-muted sm:text-lg" style={{ animationDelay: "160ms" }}>
            {person.pitch}
          </p>

          <p className="animate-rise mt-5 flex items-center gap-2 text-sm text-muted" style={{ animationDelay: "200ms" }}>
            <Icon name="pin" width={16} height={16} className="text-cyan" />
            {person.location}
          </p>

          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "260ms" }}>
            <a
              href="#projekt"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-medium text-[#060914] shadow-[0_0_30px_var(--glow-gold)] transition hover:bg-gold-strong"
            >
              Se mina projekt
              <Icon name="arrow" width={18} height={18} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 font-medium backdrop-blur transition hover:border-cyan hover:text-cyan"
            >
              Kontakta mig
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

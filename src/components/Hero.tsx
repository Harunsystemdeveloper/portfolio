import { heroHeadline, heroStats, person } from "@/data/content";
import AgentGraph from "./hero/AgentGraph";
import Icon from "./ui/Icon";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-rubrik" className="relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-32 pb-20 sm:px-6 sm:pt-40 lg:min-h-svh lg:grid-cols-12 lg:gap-8 lg:pt-28 lg:pb-16">
        <div className="lg:col-span-7">
          <p className="animate-rise mb-8 inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pr-4 pl-1.5 text-sm">
            <span className="flex shrink-0 items-center gap-2 rounded-full bg-green/15 px-2.5 py-0.5 font-mono text-xs font-medium text-green">
              <span className="relative flex h-2 w-2">
                <span className="motion-pulse absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
              </span>
              Tillgänglig
            </span>
            <span className="truncate text-muted">{person.status}</span>
          </p>

          <h1 id="hero-rubrik">
            <span
              className="animate-rise block font-mono text-xs tracking-[0.18em] text-muted uppercase sm:text-sm"
              style={delay(60)}
            >
              {person.name} <span className="text-subtle">/</span> Systemutvecklare
            </span>
            <span
              className="animate-rise mt-5 block font-display text-[2.6rem] leading-[0.98] font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-[4.5rem]"
              style={delay(120)}
            >
              {heroHeadline.map((part, i) =>
                part.accent ? (
                  <span key={i} className="text-gradient">
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </span>
          </h1>

          <p className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty" style={delay(200)}>
            {person.pitch} Baserad i {person.location.replace(" · ", ", ")}.
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={delay(260)}>
            <a href="#projekt" className="btn btn-primary group">
              Se mina case
              <Icon name="arrow" width={18} height={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#kontakt" className="btn btn-ghost">
              Kontakta mig
            </a>
            <span className="flex items-center gap-1 sm:ml-1">
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-surface hover:text-cyan"
              >
                <Icon name="linkedin" />
              </a>
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-surface hover:text-cyan"
              >
                <Icon name="github" />
              </a>
            </span>
          </div>

          <dl className="animate-rise mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6" style={delay(320)}>
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-muted sm:text-sm">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-rise lg:col-span-5" style={delay(200)}>
          <AgentGraph />
        </div>
      </div>
    </section>
  );
}

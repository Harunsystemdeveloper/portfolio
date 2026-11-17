import { heroHeadline, heroQuote, person } from "@/data/content";
import AgentGraph from "./hero/AgentGraph";
import Icon from "./ui/Icon";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-rubrik" className="relative isolate overflow-hidden">
      {/* Rutnätet finns bara här uppe, som en svag teknisk fond bakom diagrammet */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-50"
        style={{ maskImage: "radial-gradient(ellipse 80% 70% at 70% 30%, black 20%, transparent 75%)" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pt-32 pb-16 sm:px-8 sm:pt-40 lg:min-h-svh lg:grid-cols-12 lg:gap-6 lg:pt-28 lg:pb-20">
        <div className="lg:col-span-7">
          <p className="animate-rise mb-9 inline-flex max-w-full items-center gap-2.5 text-sm text-muted">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="motion-pulse absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            <span className="truncate">
              <span className="text-fg">Tillgänglig</span> · {person.status}
            </span>
          </p>

          <h1 id="hero-rubrik">
            <span className="animate-rise block text-base text-muted" style={delay(60)}>
              Hej, jag heter <span className="text-fg">{person.name}</span>.
            </span>
            <span
              className="animate-rise mt-4 block font-display text-[2.35rem] leading-[1.04] font-medium tracking-[-0.03em] text-balance sm:text-[3.3rem] lg:text-[3.8rem]"
              style={delay(120)}
            >
              {heroHeadline.map((part, i) =>
                part.accent ? (
                  <span key={i} className="accent text-gold">
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </span>
          </h1>

          <p className="animate-rise mt-7 max-w-lg text-lg leading-relaxed text-muted text-pretty" style={delay(200)}>
            {person.pitch}
          </p>
          <p className="animate-rise mt-4 flex items-center gap-2 text-sm text-muted" style={delay(220)}>
            <Icon name="pin" width={15} height={15} className="text-gold" />
            {person.city}
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-4" style={delay(260)}>
            <a href="#projekt" className="btn btn-primary group">
              Se mina projekt
              <Icon name="arrow" width={18} height={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#kontakt" className="link-underline pb-0.5 font-medium">
              Kontakta mig
            </a>
            <span className="flex items-center gap-1">
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:text-gold"
              >
                <Icon name="linkedin" />
              </a>
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:text-gold"
              >
                <Icon name="github" />
              </a>
            </span>
          </div>

          <figure className="animate-rise mt-14 max-w-md" style={delay(320)}>
            <blockquote className="accent text-xl leading-snug text-fg/80 sm:text-2xl">
              <span aria-hidden className="text-gold">
                &ldquo;
              </span>
              {heroQuote.text}
              <span aria-hidden className="text-gold">
                &rdquo;
              </span>
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted">
              <span className="text-fg">{heroQuote.author}</span>, {heroQuote.role}
            </figcaption>
          </figure>
        </div>

        <div className="animate-rise lg:col-span-5 lg:-mr-6" style={delay(200)}>
          <AgentGraph />
        </div>
      </div>
    </section>
  );
}

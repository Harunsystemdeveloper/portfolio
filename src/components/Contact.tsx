"use client";

import { useState, type FormEvent } from "react";
import { person } from "@/data/content";
import CopyEmail from "./CopyEmail";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

const inputClass =
  "w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-fg placeholder:text-subtle transition focus:border-cyan focus:bg-bg focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Ingen backend: formuläret öppnar besökarens e-postprogram med ifylld text
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("namn") ?? "");
    const subject = `Kontakt via portfolio – ${name}`;
    const body = `${data.get("meddelande") ?? ""}\n\n– ${name} (${data.get("epost") ?? ""})`;
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="kontakt" aria-labelledby="kontakt-rubrik" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal className="card ring-gradient relative isolate overflow-hidden !rounded-[2rem] p-6 sm:p-12 lg:p-16">
        <div aria-hidden className="absolute -top-64 -left-56 -z-10 h-[36rem] w-[36rem] glow-gold" />
        <div aria-hidden className="absolute -right-56 -bottom-64 -z-10 h-[36rem] w-[36rem] glow-cyan" />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-cyan uppercase">
              <span className="text-subtle">05</span>
              <span aria-hidden className="h-px w-8 bg-cyan/50" />
              Kontakt
            </p>
            <h2
              id="kontakt-rubrik"
              className="font-display text-4xl leading-[1.02] font-semibold tracking-[-0.03em] text-balance sm:text-6xl"
            >
              Har du en roll där jag passar? <span className="text-gradient">Låt oss prata.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Söker du en systemutvecklare inom .NET, C#, Cloud eller AI? Hör av dig – jag svarar gärna.
            </p>

            <a
              href={`mailto:${person.email}`}
              className="group mt-10 inline-flex max-w-full items-center gap-3 font-display text-2xl font-medium tracking-tight break-all sm:text-4xl"
            >
              <span className="bg-gradient-to-r from-gold to-cyan bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                {person.email}
              </span>
              <Icon
                name="arrow"
                width={28}
                height={28}
                className="shrink-0 -rotate-45 text-gold transition-transform group-hover:rotate-0"
              />
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <CopyEmail email={person.email} />
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
                <Icon name="linkedin" width={16} height={16} />
                LinkedIn
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
                <Icon name="github" width={16} height={16} />
                GitHub
              </a>
            </div>

            <p className="mt-10 flex items-center gap-2 text-sm text-muted">
              <Icon name="pin" width={16} height={16} className="text-cyan" />
              {person.location}
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 lg:col-span-2" aria-label="Kontaktformulär">
            <p className="font-display text-xl font-semibold">Eller skicka ett meddelande</p>
            <div>
              <label htmlFor="namn" className="mb-1.5 block text-sm font-medium">
                Namn
              </label>
              <input id="namn" name="namn" required autoComplete="name" className={inputClass} placeholder="Ditt namn" />
            </div>
            <div>
              <label htmlFor="epost" className="mb-1.5 block text-sm font-medium">
                E-post
              </label>
              <input
                id="epost"
                name="epost"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
                placeholder="du@foretag.se"
              />
            </div>
            <div>
              <label htmlFor="meddelande" className="mb-1.5 block text-sm font-medium">
                Meddelande
              </label>
              <textarea
                id="meddelande"
                name="meddelande"
                required
                rows={4}
                className={`${inputClass} resize-y`}
                placeholder="Berätta kort om rollen eller uppdraget…"
              />
            </div>
            <button type="submit" className="btn btn-primary group w-full">
              Skicka meddelande
              <Icon name="arrow" width={18} height={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <p role="status" className="text-sm text-muted">
              {sent ? "Ditt e-postprogram öppnas med meddelandet ifyllt." : "Formuläret öppnar ditt e-postprogram."}
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

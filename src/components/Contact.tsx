"use client";

import { useState, type FormEvent } from "react";
import { person } from "@/data/content";
import CopyEmail from "./CopyEmail";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

const inputClass =
  "w-full rounded-xl border border-transparent bg-bg/70 px-4 py-3 text-fg placeholder:text-subtle transition focus:border-gold/60 focus:bg-bg focus:outline-none";

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
    <section id="kontakt" aria-labelledby="kontakt-rubrik" className="mx-auto max-w-6xl px-5 pt-16 pb-24 sm:px-8 sm:pt-24 sm:pb-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <p className="mb-4 text-sm text-gold">Kontakt</p>
          <h2
            id="kontakt-rubrik"
            className="font-display text-[2.4rem] leading-[1.05] font-medium tracking-[-0.025em] text-balance sm:text-6xl"
          >
            Har du en roll där jag passar? <span className="accent text-gold">Låt oss prata.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Söker du en hungrig systemutvecklare inom C# och .NET med ett brinnande intresse för AI? Hör av dig, jag svarar gärna.
          </p>

          <a
            href={`mailto:${person.email}`}
            className="group mt-10 inline-flex max-w-full items-center gap-3 font-display text-2xl font-medium tracking-tight break-all sm:text-[2.1rem]"
          >
            <span className="link-underline pb-1">{person.email}</span>
            <Icon
              name="arrow"
              width={24}
              height={24}
              className="shrink-0 -rotate-45 text-gold transition-transform duration-500 group-hover:rotate-0"
            />
          </a>

          <a
            href={person.phone.href}
            className="mt-4 flex w-fit items-center gap-3 text-xl text-muted transition hover:text-fg"
          >
            <Icon name="phone" width={18} height={18} className="text-gold" />
            <span>
              <span className="sr-only">Ring </span>
              {person.phone.display}
            </span>
          </a>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <CopyEmail email={person.email} />
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 pb-0.5">
              <Icon name="linkedin" width={16} height={16} />
              LinkedIn
            </a>
            <a href={person.github} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 pb-0.5">
              <Icon name="github" width={16} height={16} />
              GitHub
            </a>
          </div>

          <p className="mt-10 flex items-center gap-2 text-sm text-muted">
            <Icon name="pin" width={15} height={15} className="text-gold" />
            {person.location}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:pt-10">
          <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8" aria-label="Kontaktformulär">
            <p className="font-display text-xl font-medium">Eller skriv ett meddelande</p>
            <div>
              <label htmlFor="namn" className="mb-1.5 block text-sm text-muted">
                Namn
              </label>
              <input id="namn" name="namn" required autoComplete="name" className={inputClass} placeholder="Ditt namn" />
            </div>
            <div>
              <label htmlFor="epost" className="mb-1.5 block text-sm text-muted">
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
              <label htmlFor="meddelande" className="mb-1.5 block text-sm text-muted">
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
        </Reveal>
      </div>
    </section>
  );
}

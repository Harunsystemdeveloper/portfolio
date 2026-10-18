"use client";

import { useState, type FormEvent } from "react";
import { isPlaceholder, person } from "@/data/content";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

const channels = [
  { label: "E-post", value: person.email, href: `mailto:${person.email}`, icon: "mail" },
  { label: "LinkedIn", value: "Min profil", href: person.linkedin, icon: "linkedin" },
  { label: "GitHub", value: "Harunsystemdeveloper", href: person.github, icon: "github" },
];

const inputClass =
  "w-full rounded-xl border border-line bg-bg-soft/70 px-4 py-3 text-fg placeholder:text-muted/70 transition focus:border-cyan focus:outline-none";

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
    <Section id="kontakt" eyebrow="Kontakt" title="Låt oss bygga något tillsammans">
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="space-y-4 lg:col-span-2">
          <p className="text-lg leading-relaxed text-muted">
            Letar du efter en utvecklare inom AI, LLM-integration eller moln? Hör av dig – jag svarar gärna.
          </p>
          <ul className="space-y-3 pt-2">
            {channels.map((c) => {
              const missing = isPlaceholder(c.href.replace("mailto:", ""));
              const external = c.icon !== "mail" && !missing;
              return (
                <li key={c.label}>
                  <a
                    href={missing ? undefined : c.href}
                    aria-disabled={missing || undefined}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:border-gold/50"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                      <Icon name={c.icon} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-wider text-muted uppercase">{c.label}</span>
                      <span className="block truncate font-medium">{missing ? c.href : c.value}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-line bg-surface p-5 backdrop-blur sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
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
            </div>
            <div>
              <label htmlFor="meddelande" className="mb-1.5 block text-sm font-medium">
                Meddelande
              </label>
              <textarea
                id="meddelande"
                name="meddelande"
                required
                rows={5}
                className={`${inputClass} resize-y`}
                placeholder="Berätta kort om rollen eller uppdraget…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-medium text-[#060914] shadow-[0_0_30px_var(--glow-gold)] transition hover:bg-gold-strong sm:w-auto"
            >
              Skicka meddelande
              <Icon name="arrow" width={18} height={18} />
            </button>
            <p role="status" className="text-sm text-muted">
              {sent ? "Ditt e-postprogram öppnas med meddelandet ifyllt." : "Formuläret öppnar ditt e-postprogram."}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

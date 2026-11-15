import { isPlaceholder, person } from "@/data/content";
import CurrentYear from "./CurrentYear";
import Icon from "./ui/Icon";

const socials = [
  { label: "GitHub", href: person.github, icon: "github" },
  { label: "LinkedIn", href: person.linkedin, icon: "linkedin" },
  { label: "E-post", href: `mailto:${person.email}`, icon: "mail" },
].filter((s) => !isPlaceholder(s.href.replace("mailto:", "")));

const stack = ["Next.js 16", "React 19", "Tailwind 4", "Vercel"];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
      <div className="flex flex-col gap-8 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">{person.name}</p>
          <p className="mt-1 text-sm text-muted">{person.title}</p>
          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-subtle">
            <span>Byggd med</span>
            {stack.map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>·</span>}
                <span className="text-muted">{item}</span>
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex items-center gap-2">
            {socials.map((s) => {
              const external = s.icon !== "mail";
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-cyan hover:text-cyan"
                  >
                    <Icon name={s.icon} width={18} height={18} />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="flex items-center gap-4 text-sm text-subtle">
            © <CurrentYear /> {person.name}
            <a href="#top" className="font-mono text-xs text-muted transition hover:text-cyan">
              Till toppen ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

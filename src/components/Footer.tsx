import { isPlaceholder, person } from "@/data/content";
import CurrentYear from "./CurrentYear";
import Icon from "./ui/Icon";

const socials = [
  { label: "GitHub", href: person.github, icon: "github" },
  { label: "LinkedIn", href: person.linkedin, icon: "linkedin" },
  { label: "E-post", href: `mailto:${person.email}`, icon: "mail" },
].filter((s) => !isPlaceholder(s.href.replace("mailto:", "")));

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
      <div className="flex flex-col gap-8 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">{person.name}</p>
          <p className="mt-1 text-sm text-muted">{person.title}</p>
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

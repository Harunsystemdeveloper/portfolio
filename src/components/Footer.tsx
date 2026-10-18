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
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © <CurrentYear /> {person.name}. Byggd med Next.js.
        </p>
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
                  className="grid h-10 w-10 place-items-center rounded-full border border-line transition hover:border-gold hover:text-gold"
                >
                  <Icon name={s.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

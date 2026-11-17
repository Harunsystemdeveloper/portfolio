import Reveal from "./Reveal";

/** Eget motto mellan sektionerna, i kursiv serif som en randanteckning. */
export default function Motto({ text, align = "center" }: { text: string; align?: "left" | "center" | "right" }) {
  const position = { left: "justify-start", center: "justify-center", right: "justify-end" }[align];
  return (
    <Reveal className={`mx-auto flex max-w-6xl px-5 py-6 sm:px-8 ${position}`}>
      <p className="accent text-2xl text-muted sm:text-3xl">{text}</p>
    </Reveal>
  );
}

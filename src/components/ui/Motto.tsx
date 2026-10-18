import Reveal from "./Reveal";

/** Egenskrivet motto mellan sektionerna. */
export default function Motto({ text }: { text: string }) {
  return (
    <Reveal className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-6 sm:px-6 sm:py-14">
      <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" />
      <p className="text-center font-display text-lg font-medium tracking-wide text-gradient sm:text-2xl">
        {text}
      </p>
      <span aria-hidden className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" />
    </Reveal>
  );
}

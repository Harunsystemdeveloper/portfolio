import Reveal from "./Reveal";

/** Egenskrivet motto mellan sektionerna. */
export default function Motto({ text }: { text: string }) {
  return (
    <Reveal className="mx-auto flex max-w-6xl items-center gap-5 px-4 py-4 sm:px-6">
      <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-transparent to-line-strong" />
      <p className="text-center font-display text-xl font-medium tracking-tight text-gradient sm:text-3xl">
        {text}
      </p>
      <span aria-hidden className="h-px flex-1 bg-gradient-to-l from-transparent to-line-strong" />
    </Reveal>
  );
}

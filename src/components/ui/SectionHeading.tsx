import Reveal from "./Reveal";

type Props = { eyebrow: string; title: string; id: string };

export default function SectionHeading({ eyebrow, title, id }: Props) {
  return (
    <Reveal className="mb-8 sm:mb-14">
      <p className="mb-3 font-display text-sm font-medium tracking-[0.2em] text-cyan uppercase">
        {eyebrow}
      </p>
      <h2 id={id} className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}

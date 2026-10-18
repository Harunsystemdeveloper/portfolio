/**
 * Statisk version av 3D-scenen: visas medan scenen laddar och när
 * användaren valt reducerad rörelse.
 */
export default function SceneFallback() {
  const steps = Array.from({ length: 7 }, (_, i) => ({
    x: 40 + i * 52,
    h: 40 + i * 34 + Math.sin(i * 1.7) * 10,
  }));
  const top = steps[steps.length - 1];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 440 340"
        className="absolute right-[-10%] bottom-[4%] w-[110%] max-w-none opacity-80 lg:top-1/2 lg:right-[2%] lg:bottom-auto lg:w-[52%] lg:-translate-y-1/2"
      >
        <defs>
          <linearGradient id="fb-step" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="var(--gold)" />
            <stop offset="1" stopColor="var(--cyan)" />
          </linearGradient>
          <radialGradient id="fb-glow">
            <stop offset="0" stopColor="var(--gold-strong)" stopOpacity="0.9" />
            <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {steps.map((s, i) => (
          <rect
            key={i}
            x={s.x}
            y={320 - s.h}
            width={38}
            height={s.h}
            rx={4}
            fill="url(#fb-step)"
            opacity={0.35 + i * 0.08}
          />
        ))}
        <path
          d={`M20 300 ${steps.map((s) => `L${s.x + 19} ${310 - s.h}`).join(" ")} L${top.x + 40} 20`}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.7"
        />
        <circle cx={top.x + 40} cy={20} r={22} fill="url(#fb-glow)" />
        <circle cx={top.x + 40} cy={20} r={5} fill="#fff4d6" />
      </svg>
    </div>
  );
}

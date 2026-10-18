import { ImageResponse } from "next/og";
import { person } from "@/data/content";

// Genereras vid build – visas när sidan delas på LinkedIn, Slack m.m.
export const alt = `${person.name} – ${person.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bars = [90, 150, 210, 280, 360];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px",
          background: "radial-gradient(circle at 80% 30%, #142042 0%, #060914 60%)",
          color: "#e8ebf4",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ fontSize: 28, color: "#38d6f5", letterSpacing: 4, textTransform: "uppercase" }}>
            Portfolio
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, marginTop: 16 }}>{person.name}</div>
          <div style={{ fontSize: 40, color: "#f5b942", marginTop: 12 }}>{person.title}</div>
          <div style={{ fontSize: 26, color: "#9ba5bd", marginTop: 28, lineHeight: 1.4 }}>
            .NET · C# · Cloud · AI
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 420 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                width: 48,
                height: h,
                borderRadius: 8,
                background: "linear-gradient(180deg, #ffcf6b, #38d6f5)",
                opacity: 0.5 + i * 0.12,
              }}
            />
          ))}
        </div>
      </div>
    ),
    size,
  );
}

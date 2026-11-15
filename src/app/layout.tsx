import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { isPlaceholder, person, site } from "@/data/content";
import Background from "@/components/ui/Background";
import MotionGate from "@/components/ui/MotionGate";
import RevealRoot from "@/components/ui/RevealRoot";
import Spotlight from "@/components/ui/Spotlight";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// Används för absoluta länkar i Open Graph. Faller tillbaka på Vercels URL tills domänen är ifylld.
function siteUrl() {
  if (!isPlaceholder(site.url)) return site.url;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return vercel ? `https://${vercel}` : "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: site.title,
  description: site.description,
  authors: [{ name: person.name }],
  keywords: ["systemutvecklare", ".NET", "C#", "Azure", "Cloud", "AI", "LLM", "AI-agenter", "MCP"],
  openGraph: {
    type: "website",
    locale: site.locale,
    title: site.title,
    description: site.description,
    siteName: person.name,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070f" },
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
  ],
};

// Körs före första renderingen så att rätt tema visas direkt (ingen blinkning).
// Klassen "js" gör att scroll-animationerna bara döljer innehåll när JavaScript faktiskt körs.
const themeScript = `document.documentElement.classList.add('js');try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      className={`${geist.variable} ${geistMono.variable} ${display.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Hoppa till innehållet
        </a>
        <Background />
        {children}
        <RevealRoot />
        <MotionGate />
        <Spotlight />
      </body>
    </html>
  );
}

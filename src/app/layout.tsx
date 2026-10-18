import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { isPlaceholder, person, site } from "@/data/content";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const display = Space_Grotesk({
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
  keywords: ["systemutvecklare", "AI-utvecklare", "LLM", "AI-agenter", "MCP", ".NET", "Azure", "Next.js"],
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
    { media: "(prefers-color-scheme: dark)", color: "#060914" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
  ],
};

// Körs före första renderingen så att rätt tema visas direkt (ingen blinkning).
const themeScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${inter.variable} ${display.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-black"
        >
          Hoppa till innehållet
        </a>
        {children}
      </body>
    </html>
  );
}

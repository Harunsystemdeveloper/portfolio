# Harun Ali – Portfolio

Personlig portfolio byggd med Next.js (App Router), TypeScript, Tailwind CSS, React Three Fiber och Framer Motion.

Live: https://harunsoftwaretech.com

## Kör lokalt

Kräver Node.js 20 eller senare.

```bash
npm install
npm run dev
```

Öppna sedan http://localhost:3000 i webbläsaren. Sidan laddas om automatiskt när du sparar en fil.

Övriga kommandon:

| Kommando        | Vad det gör                                 |
| --------------- | ------------------------------------------- |
| `npm run build` | Bygger en produktionsversion                |
| `npm run start` | Kör produktionsversionen (efter `build`)    |
| `npm run lint`  | Kontrollerar koden med ESLint               |

## Ändra innehåll

**Allt innehåll finns i [`src/data/content.ts`](src/data/content.ts)**: namn, pitch, om mig, erfarenheter, projekt, kompetenser, kontaktuppgifter och motton. Du behöver inte röra komponenterna.

- Platshållare står inom hakparenteser, t.ex. `[DIN E-POST]` och `[GITHUB-LÄNK]`. Sök efter `[` i filen för att hitta allt som är kvar att fylla i.
- Länkar som fortfarande är platshållare visas som text i stället för trasiga länkar.
- **CV:** lägg din CV-fil som `public/cv.pdf`. Knappen "Ladda ner CV" pekar dit.
- Nytt projekt: lägg till ett objekt i listan `projects`. Med `ongoing: true` får kortet en "Pågående"-badge.

## Struktur

```
src/
├─ app/
│  ├─ layout.tsx            Typsnitt, SEO-metadata och temaskript
│  ├─ page.tsx              Sätter ihop sektionerna
│  ├─ globals.css           Färger (mörkt/ljust läge) och animationer
│  ├─ icon.svg              Favicon
│  └─ opengraph-image.tsx   Delningsbild, genereras vid build
├─ components/
│  ├─ three/                3D-scenen i hero (laddas först när sidan är klar)
│  ├─ ui/                   Återanvändbara delar (Reveal, Section, Motto, Icon)
│  └─ *.tsx                 En komponent per sektion
├─ data/content.ts          ALLT innehåll
└─ lib/                     Hjälp-hooks (enhetsinfo, tema)
```

### Prestanda och tillgänglighet

- 3D-scenen laddas med `dynamic(..., { ssr: false })` när webbläsaren är ledig. Fram till dess visas en statisk SVG.
- Upplösningen är begränsad (dpr max 1,5) och scenen pausas när den inte syns.
- På mobil och svagare datorer används en förenklad scen med färre objekt.
- Med `prefers-reduced-motion` visas bara den statiska versionen och animationerna stängs av.

## Deploya på Vercel

1. Gå till [vercel.com](https://vercel.com) och logga in med GitHub.
2. Välj **Add New → Project** och importera repot `Harunsystemdeveloper/portfolio`.
3. Vercel känner igen Next.js automatiskt. Behåll standardinställningarna och klicka på **Deploy**.
4. Varje `git push` till `main` deployas sedan automatiskt.

### Koppla domänen från Namecheap

1. I Vercel: öppna projektet → **Settings → Domains** → lägg till `harunsoftwaretech.com` och `www.harunsoftwaretech.com`.
2. I Namecheap: **Domain List → Manage → Advanced DNS**. Ta bort befintliga standardposter för `@` och `www` (t.ex. "URL Redirect" och "CNAME parkingpage"), och lägg sedan till:

   | Typ   | Host  | Värde                  |
   | ----- | ----- | ---------------------- |
   | A     | `@`   | `76.76.21.21`          |
   | CNAME | `www` | `cname.vercel-dns.com` |

   Kontrollera värdena mot det som Vercel visar under Domains, eftersom Vercel ibland anger projektspecifika värden.
3. Det kan ta från några minuter upp till ett par timmar innan DNS har uppdaterats. Vercel ordnar HTTPS-certifikatet automatiskt.

Domänen är redan inlagd som `site.url` i `src/data/content.ts`. Den används för länkarna i Open Graph-bilden.

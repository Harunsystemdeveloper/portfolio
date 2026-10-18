/**
 * ALLT innehåll på sidan finns här. Ändra texter, länkar och projekt i den här
 * filen – komponenterna behöver du inte röra.
 *
 * Platshållare är markerade med [HAKPARENTESER]. Sök efter "[" för att hitta dem.
 */

export const site = {
  // Din domän (köpt på Namecheap, kopplad via Vercel)
  url: "https://harunsoftwaretech.com",
  title: "Harun Ali – Systemutvecklare inom .NET, C#, Cloud & AI",
  description:
    "Systemutvecklare som bygger praktiska AI-lösningar för den svenska marknaden – LLM-integrationer, AI-agenter, MCP och molninfrastruktur.",
  locale: "sv_SE",
};

export const person = {
  name: "Harun Ali",
  title: "Systemutvecklare – .NET, C#, Cloud & AI",
  pitch: "Jag brinner för tech och älskar att bygga smarta lösningar som gör verklig skillnad.",
  status: "Söker tjänst inom systemutveckling",
  location: "Linköping · Östergötland",
  // Lägg din CV-fil i /public/cv.pdf
  cvUrl: "/cv.pdf",
  email: "Harunali2002@icloud.com",
  linkedin: "https://www.linkedin.com/in/harun-a-90a835329",
  github: "https://github.com/Harunsystemdeveloper",
};

export const navLinks = [
  { href: "#om-mig", label: "Om mig" },
  { href: "#erfarenhet", label: "Erfarenhet" },
  { href: "#projekt", label: "Projekt" },
  { href: "#kompetenser", label: "Kompetenser" },
  { href: "#kontakt", label: "Kontakt" },
];

// Profiltexten från CV:t
export const about = [
  "Systemutvecklare med starkt tekniskt fokus och praktisk erfarenhet av .NET, Cloud och AI.",
  "Jag brinner för tech och älskar att bygga smarta lösningar som gör verklig skillnad.",
  "Just nu söker jag en tjänst inom systemutveckling och jag är alltid hungrig på att lära mig nytt.",
];

export const aboutFacts = [
  { label: "Utbildning", value: "Systemutvecklare .NET, TUC Yrkeshögskola (aug 2024 – maj 2026)" },
  { label: "Språk", value: "Svenska och engelska (flytande), spanska (grundläggande)" },
  { label: "Intressen", value: "Sport & träning, entreprenörskap" },
  { label: "Plats", value: person.location },
];

export type Experience = {
  role: string;
  company: string;
  /** Visas efter företaget, t.ex. kund eller avdelning */
  context?: string;
  period: string;
  location?: string;
  bullets: string[];
  current?: boolean;
};

// Samma ordning som i CV:t
export const experiences: Experience[] = [
  {
    role: "IT-Konsult · IT-Supporttekniker",
    company: "Castra AB",
    context: "Region Östergötland",
    period: "Juni 2026 – Pågående",
    location: "Linköping",
    current: true,
    bullets: [
      "Anställd som konsult på Castra med uppdrag hos Region Östergötland, avdelningen Centrum för IT & Medicinsk Teknik.",
      "Första kontakten för regionens medarbetare vid tekniska problem och frågor.",
      "Felsöker, installerar och ger support på hårdvara, mjukvara och nätverk så att vård- och administrativ personal har tekniken som krävs för sitt dagliga arbete.",
      "Skapar och följer upp supportärenden i ärendehanteringssystem, vilket utvecklar min kommunikations- och bemötandeförmåga.",
    ],
  },
  {
    role: "Cloud Engineer",
    company: "Åhlens AB",
    context: "IT & Infrastructure",
    period: "Dec 2025 – Maj 2026",
    location: "Stockholm",
    bullets: [
      "Byggde och förvaltade skalbara molnlösningar i Microsoft Azure för en av Sveriges största detaljhandlare.",
      "Utvecklade och underhöll .NET-baserade system i C# med fokus på driftsäkerhet och prestanda.",
      "Ansvarade för säkerhet, behörigheter och åtkomstkontroll samt genomförde kostnadsoptimeringar i infrastrukturen.",
    ],
  },
  {
    role: "Cloud Engineer · Degree Project",
    company: "Examensarbete",
    context: "Åhlens AB",
    period: "Dec 2025 – Maj 2026",
    location: "Stockholm",
    bullets: [
      "Designade och byggde en skalbar dataplattform i Azure där rådata omvandlas till strukturerad, affärskritisk information.",
      "Tillämpade avancerad SQL-modellering och data warehouse-arkitektur med faktatabeller och dimensionstabeller.",
      "Implementerade feature engineering för AI/ML och automatiserade datakvalitetskontroller.",
    ],
  },
  {
    role: "AI-strateg & utvecklare",
    company: "Guldkassan AB",
    period: "Juli 2025 – Maj 2026",
    location: "Stockholm",
    bullets: [
      "Hjälpte företaget bli mer effektivt genom att identifiera och implementera AI-lösningar i det dagliga arbetet.",
      "Drev integration av AI-verktyg i affärsprocesser för att automatisera arbetsflöden och höja produktiviteten.",
      "Deltog i utvecklingsprocessen för företagets webbplats, från koncept till lansering.",
    ],
  },
  {
    role: "Systemutvecklare",
    company: "Vertel AB",
    period: "Mar – Jun 2025",
    location: "Linköping",
    bullets: [
      "Tog ägarskap över moduler och automatiseringsflöden i Odoo från kravanalys till driftsatt lösning med Python och XML.",
      "Integrerade AI-verktyg i arbetsflödet och höjde leveranstakten och kvaliteten.",
    ],
  },
  {
    role: "Fullstackutvecklare",
    company: "Transfer Galaxy AB",
    period: "Jan 2023 – Maj 2024",
    bullets: [
      "Fullstackutveckling med C# i backend och HTML, CSS och JavaScript i frontend.",
      "Byggde responsiva och användarvänliga webbsidor i HTML, CSS och JavaScript.",
      "Arbetade med SQL och databaser och kopplade ihop webbsidorna med dem.",
      "Validerade och granskade kod för att hitta brister och fel innan publicering.",
    ],
  },
];

export type Project = {
  title: string;
  role?: string;
  period?: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
  ongoing?: boolean;
  links: { label: string; href: string }[];
};

// "Pågående fördjupning" i CV:t
export const projects: Project[] = [
  {
    title: "AI-agenter & MCP",
    role: "Fördjupningsprogram",
    period: "Sep 2026 – Pågående",
    description: "Utvecklar mina kunskaper inom AI-agenter och MCP-servrar, byggda från grunden.",
    bullets: [
      "Agentloop med tool use, indatavalidering och felhantering mot Anthropic API (Claude).",
      "MCP-server (SQLite) och multi-agent-system i LangGraph med human-in-the-loop och evals.",
    ],
    ongoing: true,
    links: [{ label: "GitHub", href: "[GITHUB-LÄNK]" }],
  },
  {
    title: "Rekryo",
    role: "Founder & Lead Developer",
    period: "2025 – Pågående",
    bullets: [
      "Bygger på fritiden en AI-driven rekryteringsplattform som matchar jobbsökare med tjänster via automatisk CV-analys och matchningspoäng.",
      "Bygger hela plattformen helt med hjälp av olika AI-verktyg från kodgenerering till design och testning.",
      "Plattformen ger rekryterare verktyg för kandidatsökning, intervjubokning och pipelinehantering med målet att göra kvalitativ rekrytering tillgänglig för alla företag oavsett storlek.",
    ],
    ongoing: true,
    links: [{ label: "Besök", href: "[LÄNK]" }],
  },
];

// Samma grupper som i CV:t
export const skillGroups = [
  {
    title: "AI & Generative AI",
    icon: "spark",
    skills: ["LLM (Azure OpenAI, Claude)", "MCP-server-utveckling", "Prompt Engineering", "Microsoft Copilot", "Azure AI"],
  },
  {
    title: "Backend",
    icon: "code",
    skills: [".NET 10 & C#", "ASP.NET Core", "Minimal APIs", "REST API:er", "SQL & databaser"],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud & Data",
    icon: "cloud",
    skills: ["Microsoft Azure", "Synapse", "Data Lake", "Data Factory", "Data Warehousing & ETL"],
  },
  {
    title: "Verktyg",
    icon: "tool",
    skills: ["Python", "Odoo ERP", "Git", "LangGraph", "pytest", "Agile / Scrum"],
  },
  {
    title: "Lär mig just nu",
    icon: "rocket",
    skills: ["Docker", "GitHub Actions", "Terraform / Bicep"],
    learning: true,
  },
] as const;

// Egna motton som visas mellan sektionerna
export const mottos = {
  afterHero: "Bygg. Lär. Upprepa.",
  afterExperience: "Varje idé börjar som en prototyp.",
  afterProjects: "Från idé till produktion – ett steg i taget.",
};

/** Hjälpfunktion: är värdet fortfarande en platshållare? */
export const isPlaceholder = (value: string) => value.startsWith("[") || value.includes("[DIN-");

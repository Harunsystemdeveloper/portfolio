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

// Senaste först
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
    role: "Utvecklare",
    company: "Vertel AB",
    period: "[PERIOD]",
    bullets: ["Utveckling av Python-moduler för Odoo (ERP)."],
  },
  {
    role: "[FYLL I ROLL]",
    company: "Transfer Galaxy",
    period: "[PERIOD]",
    bullets: ["[FYLL I BESKRIVNING]"],
  },
];

export type Project = {
  title: string;
  role?: string;
  description: string;
  tags: string[];
  ongoing?: boolean;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Rekryo",
    role: "Grundare & Lead Developer",
    description:
      "AI-driven jobbmatchningsplattform för den svenska arbetsmarknaden. CV-uppladdning med AI-analys, jobbmatchning med poäng, kompetensgapsanalys, generering av intervjufrågor och en talangpool där rekryterare hittar kandidater som valt att synas. Agentarkitektur med tool-use-loop för jobbsökning och rankning.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase (RLS)", "Claude Sonnet"],
    links: [{ label: "Besök", href: "[LÄNK]" }],
  },
  {
    title: "MCP-server för anteckningar & uppgifter",
    description:
      "Produktionsklar MCP-server med SQLite, väldokumenterade verktyg och resurser, felhantering – plus en agent som använder den.",
    tags: ["Python", "MCP", "SQLite"],
    ongoing: true,
    links: [{ label: "GitHub", href: "[GITHUB-LÄNK]" }],
  },
  {
    title: "Multi-agent-system",
    description:
      "Researcher-, Analyst-, Writer- och Reviewer-agenter med LangGraph, human-in-the-loop och loggning, byggt ovanpå MCP-servern.",
    tags: ["Python", "LangGraph", "MCP"],
    ongoing: true,
    links: [{ label: "GitHub", href: "[GITHUB-LÄNK]" }],
  },
  {
    title: "Svensk textklassificerare",
    description: "Textklassificering på svenska med scikit-learn.",
    tags: ["Python", "scikit-learn"],
    links: [{ label: "GitHub", href: "[GITHUB-LÄNK]" }],
  },
  {
    title: "Guldkassan.se",
    description:
      "Företagswebb som ersatte manuell kundhantering via DM med ett strukturerat kontaktflöde.",
    tags: ["WordPress", "Elementor"],
    links: [{ label: "Besök", href: "[LÄNK]" }],
  },
];

export const skillGroups = [
  {
    title: "AI",
    icon: "spark",
    skills: ["LLM-integration (Claude/Anthropic SDK)", "AI-agenter", "MCP", "RAG", "scikit-learn"],
  },
  { title: "Backend & språk", icon: "code", skills: [".NET / C#", "Python", "TypeScript"] },
  { title: "Frontend", icon: "layout", skills: ["Next.js", "React", "Tailwind CSS"] },
  {
    title: "Moln & data",
    icon: "cloud",
    skills: ["Azure", "Azure Synapse Analytics", "Supabase"],
  },
  { title: "Verktyg", icon: "tool", skills: ["Git / GitHub", "VS Code", "Claude Code"] },
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

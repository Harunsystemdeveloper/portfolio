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
    "Systemutvecklare med starkt tekniskt fokus och praktisk erfarenhet av .NET, C#, Microsoft Azure och AI – LLM, AI-agenter och MCP-servrar.",
  locale: "sv_SE",
};

export const person = {
  name: "Harun Ali",
  title: "Systemutvecklare – .NET, C#, Cloud & AI",
  pitch: "Jag brinner för tech och älskar att bygga smarta lösningar som gör verklig skillnad.",
  status: "Söker tjänst inom systemutveckling",
  location: "Linköping · Östergötland",
  email: "Harunali2002@icloud.com",
  linkedin: "https://www.linkedin.com/in/harun-a-90a835329",
  github: "https://github.com/Harunsystemdeveloper",
};

// Stora rubriken i hero. Delarna med "accent" färgas.
export const heroHeadline: { text: string; accent?: boolean }[] = [
  { text: "Jag bygger " },
  { text: ".NET-system", accent: true },
  { text: ", molnplattformar och " },
  { text: "AI-agenter", accent: true },
  { text: " som gör verklig skillnad." },
];

export const heroStats = [
  { value: "3+", label: "år i branschen" },
  { value: "5", label: "arbetsgivare & uppdrag" },
  { value: "2", label: "egna AI-projekt pågår" },
];

// "Utforskar just nu" – visas i Om mig-sektionen
export const exploring = ["RAG med riktig evaluation", "Agents + tool use + MCP", "FastAPI & Docker", "Tracing, cost & guardrails"];

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
  "Jag brinner för tech och älskar att bygga smarta, väl genomtänkta lösningar som skapar verklig nytta.",
  "Just nu söker jag främst tjänster inom AI-utveckling, men är även öppen för systemutvecklingsroller där jag får kombinera min bakgrund med modern AI-teknik. Jag är ständigt nyfiken och driven att lära mig mer.",
];

export type AboutFact = {
  label: string;
  icon: string;
  /** Kortets accentfärg */
  accent: "gold" | "cyan" | "violet" | "green";
  title: string;
  /** Rader under rubriken. "level" (1–3) visar en nivåmätare, t.ex. för språk. */
  details: { name: string; value?: string; level?: number }[];
  /** Kort kontextrad längst ner i kortet */
  note?: string;
};

export const aboutFacts: AboutFact[] = [
  {
    label: "Utbildning",
    icon: "cap",
    accent: "gold",
    title: "Systemutvecklare .NET",
    details: [{ name: "TUC Yrkeshögskola" }, { name: "Aug 2024 – Maj 2026" }],
  },
  {
    label: "Språk",
    icon: "globe",
    accent: "cyan",
    title: "Svenska & engelska",
    details: [
      { name: "Svenska", value: "Flytande", level: 3 },
      { name: "Engelska", value: "Flytande", level: 3 },
      { name: "Spanska", value: "Grundläggande", level: 1 },
    ],
    note: "Arbetar obehindrat på både svenska och engelska.",
  },
  {
    label: "Intressen",
    icon: "heart",
    accent: "violet",
    title: "Det som driver mig",
    details: [
      { name: "Sport & träning", value: "håller energin och disciplinen uppe" },
      { name: "Entreprenörskap", value: "driver Rekryo som founder" },
    ],
    note: "Samma driv på träningen som i koden.",
  },
  {
    label: "Plats",
    icon: "pin",
    accent: "green",
    title: person.location,
    details: [
      { name: "Öppen för möjligheter i regionen" },
      { name: "Öppen för jobb i hela Sverige" },
      { name: "Remote / distans" },
    ],
    note: "Söker tjänst inom systemutveckling – helst inom AI-utveckling, där jag kan fortsätta utveckla mina AI-kunskaper.",
  },
];

export type Experience = {
  role: string;
  company: string;
  /** Visas efter företaget, t.ex. kund eller avdelning */
  context?: string;
  period: string;
  location?: string;
  /** En mening om det viktigaste resultatet – visas alltid */
  highlight: string;
  tags: string[];
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
    highlight: "Första linjens IT-stöd för vård- och administrativ personal i Region Östergötland.",
    tags: ["IT-support", "Hårdvara", "Nätverk", "Ärendehantering"],
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
    highlight: "Skalbara Azure-lösningar och .NET-system för en av Sveriges största detaljhandlare.",
    tags: ["Azure", "C#", ".NET", "Behörigheter", "Kostnadsoptimering"],
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
    highlight: "Dataplattform i Azure som gör rådata till strukturerad, affärskritisk information.",
    tags: ["Azure", "SQL", "Data Warehouse", "Feature engineering"],
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
    highlight: "Identifierade och införde AI-lösningar som automatiserade företagets arbetsflöden.",
    tags: ["AI-strategi", "Automatisering", "AI-verktyg", "Webb"],
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
    highlight: "Ägde Odoo-moduler och automatiseringsflöden från kravanalys till driftsatt lösning.",
    tags: ["Odoo", "Python", "XML", "AI-verktyg"],
    bullets: [
      "Tog ägarskap över moduler och automatiseringsflöden i Odoo från kravanalys till driftsatt lösning med Python och XML.",
      "Integrerade AI-verktyg i arbetsflödet och höjde leveranstakten och kvaliteten.",
    ],
  },
  {
    role: "Junior Fullstackutvecklare",
    company: "Transfer Galaxy AB",
    period: "Jan 2023 – Maj 2024",
    highlight: "Utvecklade i befintliga system – C# i backend och HTML, CSS och JavaScript i frontend.",
    tags: ["C#", "HTML & CSS", "JavaScript", "Kodvalidering"],
    bullets: [
      "Fick chansen att arbeta med utveckling i befintliga system, både i C# och i frontend.",
      "Arbetade med frontend och design i främst HTML, CSS och JavaScript.",
      "Validerade koden innan den publicerades, så att fel upptäcktes i tid.",
    ],
  },
];

export type Project = {
  title: string;
  role?: string;
  period?: string;
  /** Kort säljande mening under titeln */
  tagline: string;
  /** Utmaningen projektet löser */
  problem: string;
  /** Rubrik för problem (standard: "Utmaningen") */
  problemLabel?: string;
  /** Vad du byggt – samma punkter som i CV:t */
  bullets: string[];
  /** Rubrik för punkterna (standard: "Vad jag byggt") */
  bulletsLabel?: string;
  /** Det projektet åstadkommer, i korta fraser */
  outcomes: string[];
  /** Rubrik för outcomes (standard: "Resultat") */
  outcomesLabel?: string;
  tags: string[];
  ongoing?: boolean;
  /** Vilken kodritad mockup som visas tills en riktig bild finns */
  mockup: "agent" | "platform";
  /** Valfri skärmdump i /public/projekt. Ersätter mockupen. Ange bildens verkliga mått i pixlar. */
  image?: { src: string; width: number; height: number; caption: string };
  links: { label: string; href: string }[];
};

// "Pågående fördjupning" i CV:t
export const projects: Project[] = [
  {
    title: "Applied AI Developer 2026",
    role: "AI-fördjupning · fördjupningskurs",
    period: "Sep 2026 – Pågående",
    tagline: "Från AI-demo till produktion: RAG med riktig evaluation, agenter med MCP och production-skills.",
    problemLabel: "Fokus",
    problem:
      "I prioritetsordning: 1) RAG med riktig evaluation, 2) agents + tool use + MCP, 3) production-skills – FastAPI, Docker, tracing, cost och guardrails.",
    bulletsLabel: "Upplägg i tre faser",
    bullets: [
      "Fas 1 · Production RAG med evaluation (6–7 v): Document Q&A-system med hybrid search + reranking, citations, golden evaluation set (≥30 frågor), metrics för retrieval, faithfulness och answer relevancy samt enkel UI.",
      "Fas 2 · Agents + tool use + MCP (5–6 v): en agent som använder flera verktyg, har egen MCP-server, loggar steg, mäter success rate och har human-in-the-loop.",
      "Fas 3 · Production & observability (4 v): det bästa projektet görs production-ready med FastAPI, Docker, tracing + cost tracking, guardrails och CI med evaluation.",
    ],
    outcomesLabel: "Projekt",
    outcomes: [
      "production-rag-with-evals – RAG med hybrid search, citations och evals",
      "agent-with-mcp-tools – agent med egen MCP-server och human-in-the-loop",
    ],
    tags: [
      "Python",
      "LlamaIndex / LangChain",
      "OpenAI · Anthropic · Azure OpenAI",
      "Chroma → Qdrant / Azure AI Search",
      "FastAPI",
      "Docker",
    ],
    ongoing: true,
    mockup: "agent",
    links: [{ label: "GitHub", href: "[GITHUB-LÄNK]" }],
  },
  {
    title: "Rekryo",
    role: "Founder & Lead Developer",
    period: "2025 – Pågående",
    tagline: "AI-driven rekrytering som gör kvalitativ matchning tillgänglig för alla företag.",
    problem:
      "Bra rekrytering kräver tid och verktyg som många företag saknar. Målet är att göra kvalitativ rekrytering tillgänglig för alla företag oavsett storlek.",
    bullets: [
      "Bygger på fritiden en AI-driven rekryteringsplattform som matchar jobbsökare med tjänster via automatisk CV-analys och matchningspoäng.",
      "Bygger hela plattformen helt med hjälp av olika AI-verktyg från kodgenerering till design och testning.",
      "Plattformen ger rekryterare verktyg för kandidatsökning, intervjubokning och pipelinehantering med målet att göra kvalitativ rekrytering tillgänglig för alla företag oavsett storlek.",
    ],
    outcomes: [
      "Automatisk CV-analys med matchningspoäng",
      "Kandidatsökning, intervjubokning och pipeline på ett ställe",
      "Byggd AI-first – från kodgenerering till design och test",
    ],
    tags: ["AI / LLM", "CV-analys", "Matchning", "Pipeline", "Full stack"],
    ongoing: true,
    mockup: "platform",
    image: { src: "/projekt/rekryo.png", width: 1260, height: 864, caption: "Rekryo · startsida" },
    links: [{ label: "Besök", href: "[LÄNK]" }],
  },
];

// Samma grupper som i CV:t
export const skillGroups = [
  {
    title: "AI & Generative AI",
    icon: "spark",
    note: "Mitt fokus just nu – från promptar till agenter i produktion.",
    skills: ["LLM (Azure OpenAI, Claude)", "MCP-server-utveckling", "Prompt Engineering", "Microsoft Copilot", "Azure AI"],
  },
  {
    title: "Backend",
    icon: "code",
    note: "Kärnan i min utbildning och mina uppdrag.",
    skills: [".NET 10 & C#", "ASP.NET Core", "Minimal APIs", "REST API:er", "SQL & databaser"],
  },
  {
    title: "Frontend",
    icon: "layout",
    note: "Responsiva gränssnitt som är lätta att använda.",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud & Data",
    icon: "cloud",
    note: "Från rådata till affärskritisk information i Azure.",
    skills: ["Microsoft Azure", "Synapse", "Data Lake", "Data Factory", "Data Warehousing & ETL"],
  },
  {
    title: "Verktyg",
    icon: "tool",
    note: "Det jag använder varje dag för att leverera.",
    skills: ["Python", "Odoo ERP", "Git", "LangGraph", "pytest", "Agile / Scrum"],
  },
] as const;

// Visas i AI-kortet under Kompetenser: var AI-kunskaperna faktiskt använts
export const aiInPractice = [
  { where: "Guldkassan AB", what: "AI-verktyg integrerade i affärsprocesser" },
  { where: "Rekryo", what: "AI-driven matchning och CV-analys" },
  { where: "Fördjupning", what: "RAG med evaluation, agenter och MCP" },
];

// Egna motton som visas mellan sektionerna
export const mottos = {
  afterHero: "Bygg. Lär. Upprepa.",
  afterExperience: "Varje idé börjar som en prototyp.",
  afterProjects: "Från idé till produktion – ett steg i taget.",
};

/** Hjälpfunktion: är värdet fortfarande en platshållare? */
export const isPlaceholder = (value: string) => value.startsWith("[") || value.includes("[DIN-");

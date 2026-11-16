/**
 * ALLT innehåll på sidan finns här. Ändra texter, länkar och projekt i den här
 * filen – komponenterna behöver du inte röra.
 *
 * Platshållare är markerade med [HAKPARENTESER]. Sök efter "[" för att hitta dem.
 */

export const site = {
  // Din domän (köpt på Namecheap, kopplad via Vercel)
  url: "https://www.harunsoftwaretech.com",
  title: "Harun Ali – Systemutvecklare inom .NET, C#, Cloud & AI",
  description:
    "Systemutvecklare med starkt tekniskt fokus och praktisk erfarenhet av .NET, C#, Microsoft Azure och AI – LLM, AI-agenter och MCP-servrar.",
  locale: "sv_SE",
};

export const person = {
  name: "Harun Ali",
  title: "Systemutvecklare – .NET, C#, Cloud & AI",
  pitch: "Jag utvecklar i C# och .NET och brinner för att omsätta ny teknik och AI i lösningar som fungerar i verkligheten.",
  status: "Söker tjänst inom systemutveckling",
  location: "Linköping · Östergötland",
  /** Kort platsangivelse i heron */
  city: "Linköping, Sweden",
  email: "Harunali2002@icloud.com",
  phone: { display: "073-636 97 01", href: "tel:+46736369701" },
  linkedin: "https://www.linkedin.com/in/harun-a-90a835329",
  github: "https://github.com/Harunsystemdeveloper",
};

// Stora rubriken i hero. Delarna med "accent" färgas.
export const heroHeadline: { text: string; accent?: boolean }[] = [
  { text: "Driven " },
  { text: "systemutvecklare", accent: true },
  { text: " som utforskar " },
  { text: "AI på djupet", accent: true },
  { text: "." },
];

export const heroStats = [
  { value: "3+", label: "år i branschen" },
  { value: "10", label: "AI-verktyg i praktiken" },
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
  "Jag vill jobba med systemutveckling på riktigt, och använda AI där det faktiskt gör nytta. Det är där jag lär mig mest och trivs bäst.",
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
    note: "Disciplin och uthållighet som jag tar med mig in i arbetet.",
  },
  {
    label: "Plats",
    icon: "pin",
    accent: "green",
    title: person.location,
    details: [
      { name: "Öppen för att arbeta i hela Sverige" },
      { name: "Både på plats och på distans" },
    ],
    note: "Söker tjänst inom systemutveckling, gärna med inslag av AI.",
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
    tags: ["IT-support", "Hårdvara", "Nätverk", "Ärendehantering", "Copilot", "ChatGPT"],
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
    highlight: "Införde AI-verktyg som automatiserade återkommande uppgifter och sparade tid för personalen.",
    tags: ["AI-strategi", "Automatisering", "ChatGPT", "Claude", "Perplexity", "Gemini", "Grok", "Lovable"],
    bullets: [
      "Hjälpte företaget bli mer effektivt genom att identifiera och implementera AI-lösningar i det dagliga arbetet.",
      "Deltog i utvecklingsprocessen för företagets webbplats, från koncept till lansering.",
      "Tog fram och införde AI-verktyg som automatiserade återkommande uppgifter och sparade tid för personalen.",
    ],
  },
  {
    role: "Systemutvecklare",
    company: "Vertel AB",
    period: "Mar – Jun 2025",
    location: "Linköping",
    highlight: "Arbetade med moduler och automatiseringsflöden i Odoo ERP, från kravanalys till färdig lösning.",
    tags: ["Odoo", "Python", "XML", "Perplexity", "ChatGPT"],
    bullets: [
      "Fick möjlighet att arbeta med affärssystemet Odoo ERP och utveckla kunskaper inom systemets moduler och automatiseringsflöden, från kravanalys till färdig lösning med Python och XML.",
      "Utforskade även användningen av AI-verktyg som stöd för felsökning, problemlösning och kodförbättring.",
    ],
  },
  {
    role: "Junior Fullstackutvecklare",
    company: "Transfer Galaxy AB",
    period: "Jan 2023 – Maj 2024",
    highlight: "Vidareutvecklade befintliga system i C# och gjorde webbgränssnitten responsiva för alla skärmstorlekar.",
    tags: ["C#", "HTML & CSS", "JavaScript", "Responsiv design", "Kodvalidering"],
    bullets: [
      "Vidareutvecklade befintliga system med C# i backend och HTML, CSS och JavaScript i frontend.",
      "Gjorde webbsidorna responsiva, så att de fungerade och såg bra ut på mobil, surfplatta och desktop.",
      "Granskade och validerade kod före publicering, så att fel fångades innan de nådde användarna.",
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
  /**
   * Valfri skärmdump i /public/projekt. Ersätter mockupen. Ange bildens verkliga mått i pixlar.
   * srcLight visas i ljust tema (samma mått som src).
   */
  image?: { src: string; srcLight?: string; width: number; height: number; caption: string };
  links: { label: string; href: string }[];
  /** Kort notis under länkarna, t.ex. att sidan är under utveckling */
  linkNote?: string;
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
      "MCP-server-utveckling",
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
    tags: [
      "TypeScript",
      "React",
      "Supabase",
      "PostgreSQL",
      "Anthropic Claude",
      "AI / LLM",
      "Pipeline",
      "Git",
      "Claude Code",
      "Grok",
      "Gemini",
      "Copilot",
    ],
    ongoing: true,
    mockup: "platform",
    image: {
      src: "/projekt/rekryo.png",
      srcLight: "/projekt/rekryo-ljus.png",
      width: 1260,
      height: 864,
      caption: "Rekryo · startsida",
    },
    links: [{ label: "Besök", href: "https://rekryo.vercel.app/" }],
    linkNote: "Sidan är under pågående utveckling – vissa funktioner är inte helt färdiga än.",
  },
];

// Samma grupper som i CV:t
export const skillGroups = [
  {
    title: "AI & Generative AI",
    icon: "spark",
    note: "Mitt fokus just nu – från promptar till agenter i produktion.",
    skills: ["LLM (Azure OpenAI, Claude)", "Prompt Engineering", "Microsoft Copilot", "Cursor", "Codex"],
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
    note: "Verktyg och arbetssätt jag har använt i projekt och uppdrag.",
    skills: ["C#", "Python", "Git", "Claude Code", "Cursor", "Codex", "Lovable", "Agile / Scrum"],
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

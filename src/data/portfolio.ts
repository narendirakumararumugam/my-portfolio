import { Database, Users, Bug, Layers, GitPullRequest, Rocket } from "lucide-react";

export type Line = { kind: "in" | "out" | "ok" | "err"; text: string };

export const SCRIPT: Line[] = [
  { kind: "in", text: "whoami" },
  {
    kind: "ok",
    text: `→ ${import.meta.env.VITE_DEV_NAME} · software engineer @ ${import.meta.env.VITE_DEV_COMPANY} · Chennai, India`,
  },
  { kind: "in", text: "connect --linkedin" },
  { kind: "ok", text: `→ ${import.meta.env.VITE_DEV_LINKEDIN_URL} · connection established` },
  { kind: "in", text: "connect --github" },
  { kind: "ok", text: `→ ${import.meta.env.VITE_DEV_GITHUB_URL} · authenticated` },
  { kind: "in", text: "connect --email" },
  { kind: "ok", text: `→ ${import.meta.env.VITE_DEV_EMAIL} · SMTP ready` },
  { kind: "in", text: "echo 'Open to Backend, AI Platform & Full-Stack Engineering roles'" },
  { kind: "ok", text: "Open to Backend, AI Platform & Full-Stack Engineering roles" },
];

export type Event = {
  hash: string;
  type: "commit" | "merge" | "release";
  title: string;
  org: string;
  date: string;
  bullets: string[];
  tag?: string;
};

export const LOG: Event[] = [
  {
    hash: "7c91d0e",
    type: "commit",
    tag: "enterprise ai",
    title: "Enterprise Multi-Agent AI Platform",
    org: "NielsenIQ · Chennai",
    date: "Apr 2026 — Present",
    bullets: [
      "Co-designed an enterprise Multi-Agent AI platform using Spring AI and Azure OpenAI",
      "RAG, MCP integrations, and Human-in-the-Loop approval workflows",
      "AI orchestration for enterprise knowledge retrieval and workflow automation",
      "Designed secure context management using PostgreSQL (pgvector) and Redis",
    ],
  },
  {
    hash: "e11c4d0",
    type: "merge",
    tag: "current project",
    title: "Cloud ETL Platform · Software Engineer",
    org: "NielsenIQ · Chennai",
    date: "Jul 2025 — present",
    bullets: [
      "Developing backend services for a cloud-native ETL platform processing ~11 TB of retailer data monthly",
      "Handling 15+ structured and semi-structured input formats",
      "Migrating core capabilities from legacy .NET Framework to a distributed Apache Spark architecture",
      "Delivering scalable batch-processing enhancements on Databricks + Azure",
    ],
  },
  {
    hash: "9f3c1a2",
    type: "commit",
    tag: "project rotation",
    title: "Retailer Data Standardization Platform",
    org: "NielsenIQ · Chennai",
    date: "Jun 2024 — Jul 2025",
    bullets: [
      "Redesigned report processing & SQL execution — 3–5 min → 10–15 s (~95% faster)",
      "Automated retailer onboarding with configurable templates — ~80% less manual config",
      "Built AI-powered engineering utilities to streamline repetitive design tasks",
      "Delivered enterprise features, production enhancements, and onboarding capabilities",
    ],
  },
  {
    hash: "4b2e7d1",
    type: "commit",
    tag: "modernization PoC",
    title: "Legacy Platform Modernization (Migration PoC)",
    org: "NielsenIQ · Chennai",
    date: "May 2024 — Jun 2024",
    bullets: [
      "Delivered proprietary Java → Spring Boot + Angular PoC 20 days ahead of schedule",
      "Built 10 Angular screens including 5 complex business workflows",
      "Implemented Spring Security bridging legacy and modern applications",
      "Created reusable UI components accelerating future feature development",
    ],
  },
  {
    hash: "1a02f8b",
    type: "commit",
    tag: "first project",
    title: "Enterprise Monitoring Platform",
    org: "NielsenIQ · Chennai",
    date: "Oct 2023 — Apr 2024",
    bullets: [
      "Architected and independently built an internal monitoring platform with Spring Boot, Angular, PostgreSQL",
      "Replaced Excel-based tracking for 8 enterprise apps spanning ~30 processing stages",
      "Designed schema, REST APIs, backend services, and Angular UI end-to-end",
      "Automated SLA monitoring, giving leadership centralized operational visibility",
    ],
  },
  {
    hash: "init...",
    type: "commit",
    title: "git init · B.E. Computer Science",
    org: "College of Engineering Guindy · Chennai",
    date: "2019 — 2023 · GPA 8.89",
    bullets: ["Coursework: Operating Systems, Data Structures, ML, Networking, Databases"],
  },
];

export const METRICS = [
  {
    icon: Database,
    k: "11 TB+",
    l: "data processed / month",
    trend: "production scale",
    spark: [3, 5, 4, 6, 7, 8, 9, 11, 10, 12],
  },
  {
    icon: Users,
    k: "100+",
    l: "engineering teams served",
    trend: "internal platform",
    spark: [40, 52, 61, 70, 78, 85, 92, 96, 99, 104],
  },
  {
    icon: Bug,
    k: "30+",
    l: "critical defects resolved",
    trend: "across 3 services",
    spark: [12, 10, 9, 8, 7, 6, 6, 5, 4, 3],
  },
  {
    icon: Layers,
    k: "20+",
    l: "epics delivered end-to-end",
    trend: "design → ship",
    spark: [2, 3, 4, 6, 7, 9, 11, 14, 17, 20],
  },
  {
    icon: GitPullRequest,
    k: "500+",
    l: "pull requests reviewed",
    trend: "mentorship",
    spark: [10, 40, 90, 150, 210, 280, 340, 400, 460, 520],
  },
  {
    icon: Rocket,
    k: "12+",
    l: "production releases owned",
    trend: "0 rollbacks",
    spark: [1, 2, 3, 4, 5, 7, 8, 9, 11, 12],
  },
];

export type Project = {
  name: string;
  visibility: "Public" | "Private";
  description: string;
  achievements: string[];
  stack: string[];
  stars: number;
  forks: number;
  updated: string;
  language: string;
  langColor: string;
  filter: string[];
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "cloud-etl-platform",
    visibility: "Private",
    description:
      "Cloud-native ETL platform processing ~11 TB of retailer data monthly across 15+ structured and semi-structured formats. Migrating a legacy .NET codebase to a distributed Spark architecture on Azure Databricks.",
    achievements: [
      "~11 TB retailer data / month",
      "15+ input formats supported",
      "Legacy .NET → Spark + Databricks",
    ],
    stack: ["Apache Spark", "Databricks", "Azure", "Java", ".NET"],
    stars: 411,
    forks: 78,
    updated: "in progress",
    language: "Java",
    langColor: "oklch(0.78 0.16 60)",
    filter: ["backend", "data"],
  },
  {
    name: "retailer-data-standardization",
    visibility: "Private",
    description:
      "Large-scale retailer data standardization platform: enterprise features, production enhancements, and onboarding automation. Redesigned report processing and SQL execution for a dramatic performance jump.",
    achievements: [
      "Report gen: 3–5 min → 10–15 s (~95% faster)",
      "~80% less manual onboarding config",
      "AI-powered engineering utilities",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "SQL"],
    stars: 348,
    forks: 62,
    updated: "Jul 2025",
    language: "Java",
    langColor: "oklch(0.78 0.16 60)",
    filter: ["backend", "data"],
  },
  {
    name: "enterprise-monitoring-platform",
    visibility: "Private",
    description:
      "Internal monitoring platform replacing Excel-based tracking for 8 enterprise applications across ~30 processing stages. Architected end-to-end — schema, REST APIs, backend services, and Angular UI.",
    achievements: [
      "Replaced Excel tracking for 8 apps",
      "~30 processing stages monitored",
      "Automated SLA reporting for leadership",
    ],
    stack: ["Spring Boot", "Angular", "PostgreSQL", "REST APIs"],
    stars: 248,
    forks: 42,
    updated: "Apr 2024",
    language: "TypeScript",
    langColor: "oklch(0.72 0.18 235)",
    filter: ["frontend", "backend"],
  },
  {
    name: "legacy-modernization-poc",
    visibility: "Private",
    description:
      "Proof of concept migrating a proprietary Java framework to Spring Boot + Angular. Delivered 20 days early with 10 Angular screens (5 complex workflows) and seamless auth bridging legacy and modern sessions.",
    achievements: [
      "Delivered 20 days ahead of schedule",
      "10 Angular screens · 5 complex workflows",
      "Spring Security auth between legacy + modern",
    ],
    stack: ["Spring Boot", "Angular", "Spring Security", "TypeScript"],
    stars: 167,
    forks: 24,
    updated: "Jun 2024",
    language: "TypeScript",
    langColor: "oklch(0.72 0.18 235)",
    filter: ["frontend", "backend"],
  },
  {
    name: "enterprise-multi-agent-ai-platform",
    visibility: "Private",
    description:
      "Enterprise Multi-Agent AI platform providing a unified conversational interface for domain-specific knowledge retrieval and workflow automation. Implements Spring AI, Azure OpenAI, RAG, and MCP to orchestrate AI agents across multiple business domains with secure Human-in-the-Loop governance.",
    achievements: [
      "Multi-Agent AI orchestration",
      "RAG using PostgreSQL + pgvector",
      "MCP enterprise tool integration",
      "Human-in-the-Loop approvals",
    ],
    stack: [
      "Spring Boot",
      "Spring AI",
      "Azure OpenAI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "MCP",
      "JWT",
    ],
    stars: 521,
    forks: 96,
    updated: "design phase",
    language: "Java",
    langColor: "oklch(0.78 0.16 60)",
    filter: ["backend", "ai"],
  },
  {
    name: "smartprint",
    visibility: "Public",
    description:
      "Personal project: full-stack print management app for document uploads, print order management, and real-time order tracking with JWT auth and WebSocket live updates.",
    achievements: [
      "JWT authentication",
      "WebSocket live order tracking",
      "REST APIs with layered architecture",
    ],
    stack: ["Spring Boot", "Angular", "PostgreSQL", "WebSockets", "JWT"],
    stars: 34,
    forks: 6,
    updated: "in progress",
    language: "Java",
    langColor: "oklch(0.78 0.16 60)",
    filter: ["frontend", "backend", "personal"],
    url: "https://github.com/narendirakumararumugam/smartprint",
  },
];

export const GROUPS: { name: string; items: { name: string; years: number }[] }[] = [
  {
    name: "languages",
    items: [
      { name: "Java", years: 3 },
      { name: "TypeScript", years: 3 },
      { name: "JavaScript", years: 6 },
      { name: "SQL", years: 6 },
      { name: "NoSQL", years: 1 },
      { name: "C#", years: 2 },
    ],
  },
  {
    name: "frameworks",
    items: [
      { name: "Spring Boot", years: 3 },
      { name: "Angular", years: 3 },
      { name: "React", years: 3 },
      { name: ".NET Framework", years: 2 },
    ],
  },
  {
    name: "databases",
    items: [
      { name: "PostgreSQL", years: 3 },
      { name: "MongoDB", years: 1 },
      { name: "SQL Server", years: 6 },
    ],
  },
  {
    name: "cloud & big data",
    items: [
      { name: "Apache Spark", years: 1 },
      { name: "Azure Databricks", years: 1 },
      { name: "Microsoft Azure", years: 1 },
    ],
  },
  {
    name: "tools",
    items: [
      { name: "Git / GitHub", years: 6 },
      { name: "Docker", years: 1 },
      { name: "Kubernetes", years: 1 },
      { name: "Kafka", years: 1 },
      { name: "GitHub Copilot", years: 2 },
    ],
  },
  {
    name: "practices",
    items: [
      { name: "REST APIs", years: 6 },
      { name: "System Design", years: 3 },
      { name: "Unit Testing", years: 3 },
      { name: "Code Reviews", years: 3 },
      { name: "Agile / Scrum", years: 3 },
    ],
  },
];

export const currentlyExploring = [
  ["big data", "Apache Spark · Databricks"],
  ["cloud", "Azure · containerized workloads"],
  ["streaming", "Kafka · event-driven design"],
  ["orchestration", "Docker · Kubernetes"],
  ["ai", "Spring AI · Azure OpenAI · Multi-Agent Systems · RAG · MCP"],
];

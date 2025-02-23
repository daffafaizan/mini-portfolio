import { Project } from "@/interfaces/project";
import {
  BLOG_API_LINK,
  PORTFOLIO_V2_LINK,
  DERMATIFY_LINK,
  INVITE_LINK,
  JWT_TEMPLATE_LINK,
  NUBENGINE_LINK,
  PORTFOLIO_V1_LINK,
  POMODORO_LINK,
  TODOLIST_API_LINK,
  TODOLIST_LINK,
  VLECTURE_LINK,
  TEAMDR_LINK,
  EUREQA_LINK,
  QUORUM_AI_LINK,
  FOLIO_LINK
} from "@/data/links";

export const projects: Project[] = [
  {
    id: 1,
    code: "dermatify",
    title: "Dermatify",
    description:
      "Skin issue image recognition",
    link: DERMATIFY_LINK,
    status: "FINISHED",
    technologies: [
      "HapiJS",
      "FastAPI",
      "Firestore",
      "Cloud Bucket",
      "Terraform",
      "GCP",
    ],
  },
  {
    id: 2,
    code: "vlecture",
    title: "Vlecture",
    description:
      "Lecture retention assistant platform",
    link: VLECTURE_LINK,
    status: "FINISHED",
    technologies: [
      "FastAPI",
      "NextJS",
      "OpenAI",
      "PostgreSQL",
      "TailwindCSS",
      "AWS",
    ],
  },
  {
    id: 3,
    code: "todolist",
    title: "Todolist",
    description:
      "Minimalist todolist",
    link: TODOLIST_LINK,
    status: "FINISHED",
    technologies: [
      "NextJS",
      "ExpressJS",
      "MongoDB",
      "TailwindCSS",
      "GCP",
      "Netlify",
    ],
  },
  {
    id: 4,
    code: "pomotimer",
    title: "Pomotimer",
    description:
      "Minimalist pomodoro timer",
    link: POMODORO_LINK,
    status: "FINISHED",
    technologies: ["ViteJS", "TailwindCSS", "Netlify"],
  },
  {
    id: 5,
    code: "invite",
    title: "Invite",
    description:
      "Team-matching platform",
    link: INVITE_LINK,
    status: "FINISHED",
    technologies: ["Django", "PostgreSQL", "TailwindCSS", "Docker", "GCP"],
  },
  {
    id: 6,
    code: "nubengine",
    title: "Nubengine",
    description:
      "Medical document search engine",
    link: NUBENGINE_LINK,
    status: "FINISHED",
    technologies: ["Django", "TailwindCSS", "GCP"],
  },
  {
    id: 7,
    code: "portfolio-v1",
    title: "Portfolio V1",
    description:
      "First iteration of portfolio",
    link: PORTFOLIO_V1_LINK,
    status: "FINISHED",
    technologies: ["ViteJS", "TailwindCSS", "Netlify"],
  },
  {
    id: 8,
    code: "fahd-portfolio",
    title: "Portfolio Ipat",
    description:
      "Portfolio for my brother",
    link: "",
    status: "FINISHED",
    technologies: ["NextJS", "TailwindCSS", "Netlify"],
  },
  {
    id: 9,
    code: "blog-api",
    title: "Blog API",
    description:
      "Portfolio's blog backend",
    link: BLOG_API_LINK,
    status: "FINISHED",
    technologies: ["Gin", "MongoDB", "Atlas", "Koyeb"],
  },
  {
    id: 10,
    code: "todolist-api",
    title: "Todolist API",
    description:
      "Todolist's backend",
    link: TODOLIST_API_LINK,
    status: "FINISHED",
    technologies: ["ExpressJS", "PostgreSQL", "ElephantSQL", "GCP"],
  },
  {
    id: 11,
    code: "portfolio-v2",
    title: "Portfolio V2",
    description: "Second iteration of portfolio",
    link: PORTFOLIO_V2_LINK,
    status: "FINISHED",
    technologies: ["NextJS", "TailwindCSS", "Netlify"],
  },
  {
    id: 12,
    code: "jwt-template",
    title: "JWT Template",
    description:
      "ExpressJS template for JWT",
    link: JWT_TEMPLATE_LINK,
    status: "FINISHED",
    technologies: ["ExpressJS"],
  },
  {
    id: 13,
    code: "teamdr",
    title: "Teamdr",
    description:
      "Team and member matching platform",
    link: TEAMDR_LINK,
    status: "ONGOING",
    technologies: ["ExpressJS", "NextJS", "Vercel", "PostgreSQL"],
  },
  {
    id: 14,
    code: "quorum-ai",
    title: "QuorumAI",
    description:
      "AI meeting management",
    link: QUORUM_AI_LINK,
    status: "ONGOING",
    technologies: ["Go", "NextJS", "AWS", "PostgreSQL"],
  },
  {
    id: 15,
    code: "folio",
    title: "FOLIO",
    description:
      "Global pay-it-forward chain",
    link: FOLIO_LINK,
    status: "ONGOING",
    technologies: ["Seismic"],
  },
  {
    id: 16,
    code: "eureqa",
    title: "Eureqa",
    description:
      "Streamlining research, review, and publishing",
    link: EUREQA_LINK,
    status: "ONGOING",
    technologies: ["Go", "NextJS"],
  },
];

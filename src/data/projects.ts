export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  links: ProjectLink[];
  stack?: string[];
  demo?: {
    kind: "video" | "none";
    href?: string;
  };
  badge?: string;
};

export const projects: ProjectTab[] = [
  {
    id: "todolist",
    label: "TodoList 3.0",
    title: "TodoList 3.0",
    description:
      "A production-oriented full-stack Todo application focused on TypeScript, clean architecture, validation, and robust API design.",
    stack: ["TypeScript", "React", "Node.js", "Express", "Sequelize", "MariaDB"],
    links: [
      { label: "GitHub →", href: "https://github.com/conidyn/TodoList-3.0" },
    ],
    demo: {
      kind: "video",
      href: "/videos/todolist-demo.mp4", 
    },
    badge: "Featured",
  },
  {
    id: "ai-project",
    label: "AI & LLM",
    title: "AI Integration (LLM)",
    description:
      "Ongoing work exploring LLM integration, prompt engineering, and API-based workflows (OpenRouter, LiteLLM). Focused on building practical use cases and understanding real-world constraints.",
    links: [],
    demo: { kind: "none" },
    badge: "In Progress",
  },
  {
    id: "next-project",
    label: "Full-Stack",
    title: "Next Full-Stack Project",
    description:
      "Currently designing a new full-stack application focused on clean architecture, API design, and production-ready practices. More details will be shared as the project evolves.",
    links: [],
    demo: { kind: "none" },
    badge: "In Progress",
  },
];
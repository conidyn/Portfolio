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
      "A production-minded full-stack Todo app built with strong fundamentals: TypeScript, clean structure, validation, and API hygiene.",
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
    title: "AI Integration Projects",
    description:
      "A project exploring AI integration, LLM-based workflows, and automation. It focuses on practical applications of modern AI tooling and is currently under active development.",
    links: [],
    demo: { kind: "none" },
  },
  {
    id: "next-project",
    label: "In Development",
    title: "Next Full-Stack Project",
    description:
      "A new full-stack project currently under development. This section will be updated as the project progresses.",
    links: [],
    demo: { kind: "none" },
  },
];
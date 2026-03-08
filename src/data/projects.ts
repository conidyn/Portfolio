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
  demo?: {
    kind: "youtube" | "none";
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
    links: [
      { label: "GitHub →", href: "https://github.com/conidyn/TodoList-3.0" },
    ],
    demo: {
      kind: "youtube",
      href: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder embed; replace later
    },
    badge: "Featured",
  },
  {
    id: "coming-soon-1",
    label: "Coming Soon",
    title: "Coming Soon",
    description:
      "More projects will be added here soon. The goal is to keep this portfolio minimal, focused, and easy to review.",
    links: [],
    demo: { kind: "none" },
  },
  {
    id: "coming-soon-2",
    label: "Coming Soon",
    title: "Coming Soon",
    description:
      "Another project placeholder. This section will remain clean and recruiter-friendly as new work ships.",
    links: [],
    demo: { kind: "none" },
  },
];
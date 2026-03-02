export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string; // YouTube link for now
};

export const projects: Project[] = [
  {
    slug: "todolist-3-0",
    title: "TodoList 3.0",
    shortDescription:
      "Production-ready todo app focused on clean architecture, validation, and security best practices.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MariaDB"],
    githubUrl: "https://github.com/<your-username>/TodoList-3.0",
    demoUrl: "https://www.youtube.com/watch?v=<your-video-id>",
  },
  {
    slug: "coming-soon-1",
    title: "Coming soon",
    shortDescription: "Next project in progress.",
    tags: [],
    githubUrl: "",
    demoUrl: "",
  },
  {
    slug: "coming-soon-2",
    title: "Coming soon",
    shortDescription: "Next project in progress.",
    tags: [],
    githubUrl: "",
    demoUrl: "",
  },
];
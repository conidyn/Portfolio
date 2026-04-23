export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectShowcaseSection = {
  id: string;
  title: string;
  body: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ProjectTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  links: ProjectLink[];
  stack?: string[];
  demo?: { kind: "none" } | { kind: "video"; href: string };
  showcase?: {
    intro?: {
      title?: string;
      body: string;
    };
    sections?: ProjectShowcaseSection[];
  };
  badge?: string;
};

export const projects: ProjectTab[] = [
  {
    id: "ia-job-analyzer",
    label: "IA Job Analyzer",
    title: "IA Job Analyzer V1",
    description:
      "AI-powered application that analyzes a resume against a job offer, provides structured feedback, and enables contextual follow-up through an interactive chat.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "Zod",
      "Multer",
      "pdf-parse",
      "Cheerio",
      "Ollama",
    ],
    links: [
      { label: "GitHub →", href: "https://github.com/conidyn/ia-job-analyzer" },
    ],
    demo: {
      kind: "video",
      href: "/projects/ia-job-analyzer/demo.mp4",
    },
    showcase: {
      intro: {
        title: "Product-focused local AI workflow",
        body: "This project was designed as a real application, not as a simple AI demo. It helps candidates evaluate how well their resume matches a job offer, providing a structured analysis of strengths and gaps, and enabling contextual follow-up through an interactive AI chat to improve weaker areas.",
      },
      sections: [
        {
          id: "analysis",
          title: "Structured analysis designed for readability",
          body: "The main analysis view highlights the match score, requirement-by-requirement checks, strengths, and gaps in a format that is easy to scan. On the technical side, the backend handles orchestration, validation, and output control, allowing the frontend to stay focused on clarity and a consistent user experience.",
          image: {
            src: "/projects/ia-job-analyzer/analysis.png",
            alt: "IA Job Analyzer analysis view showing the match score, requirement checks, strengths, and gaps.",
            width: 1717,
            height: 931,
          },
        },
        {
          id: "chat",
          title: "Contextual follow-up instead of a static result",
          body: "After the initial analysis, the user can ask follow-up questions based on the resume, the job offer, and the structured result already generated. This turns the analysis into an interactive workflow, allowing candidates to better understand their gaps and receive actionable guidance on how to improve.",
          image: {
            src: "/projects/ia-job-analyzer/chat.png",
            alt: "IA Job Analyzer chat view showing a contextual follow-up answer based on the previous analysis.",
            width: 1343,
            height: 364,
          },
        },
      ],
    },
    badge: "Featured",
  },
  {
    id: "todolist",
    label: "TodoList 3.0",
    title: "TodoList 3.0",
    description:
      "A full-stack Todo application built with TypeScript, featuring CRUD operations, input validation, and a structured API.",
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "Sequelize",
      "MariaDB",
    ],
    links: [
      { label: "GitHub →", href: "https://github.com/conidyn/TodoList-3.0" },
    ],
    demo: {
      kind: "video",
      href: "/projects/todolist/demo.mp4",
    },
    badge: "Featured",
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

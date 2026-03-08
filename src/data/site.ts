export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteData = {
  name: string;
  role: string;
  brand: {
    href: string;
};

  nav: {
    primary: NavItem[];
    secondary: NavItem[];
  };

  hero: {
    headline: string;
    subheadline: string;
    ctas: { label: string; href: string; kind: "soft" | "solid" }[];
    githubLabel: string;
    githubHref: string;
  };

  sections: {
    about: { title: string; text: string };
    focus: { title: string; text: string };
    skills: {
      title: string;
      technicalTitle: string;
      technical: { title: string; items: string[] }[];
      softTitle: string;
      soft: string[];
    };
    contact: {
      title: string;
      subtitle: string;
      emailTo: string; // used by ContactForm (mailto is generated client-side)
    };
  };

  projectsPage: {
    title: string;
    subtitle: string;
    note: string;
  };

  footer: {
    leftTop: string;
    leftBottom: string;
    leftTopHref: string;
    socials: SocialLink[];
  };
};

export const site: SiteData = {
  name: "Nicolas Doyen",
  role: "Full-Stack Developer",
   brand: {
    href: "https://www.linkedin.com/in/nicolas-doyen/",
  },

  nav: {
    primary: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/#contact" },
    ],
    secondary: [{ label: "CV", href: "/cv" }],
  },

  hero: {
    headline: "Building clean, production-ready web apps.",
    subheadline:
      "Full-stack JavaScript developer focused on reliability, clarity, and maintainable architecture.",
    ctas: [
      { label: "View my CV", href: "/cv", kind: "soft" },
      { label: "My projects", href: "/projects", kind: "soft" },
      { label: "Get in touch", href: "/#contact", kind: "soft" },
    ],
    githubLabel: "Discover the code on GitHub →",
    githubHref: "https://github.com/conidyn", 
  },

  sections: {
    about: {
      title: "About Me",
      text:
        "I enjoy turning complex problems into simple, reliable solutions. I care about code quality, clean structure, and predictable behavior in production.",
    },
    focus: {
      title: "Current Focus",
      text:
        "Shipping portfolio-grade projects with strong fundamentals: TypeScript, clean architecture, API design, and practical security defaults.",
    },
    skills: {
      title: "Skills",
      technicalTitle: "Technical Skills",
      technical: [
        {
          title: "Frontend & Design",
          items: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Chakra UI",
            "SCSS",
          ],
        },
        {
          title: "Backend & Architecture",
          items: [
            "Node.js",
            "Express",
            "Django",
            "FastAPI",
            "GraphQL",
            "WebSocket",
            "Sequelize",
          ],
        },
        {
          title: "AI Integration",
          items: [
            "LiteLLM",
            "OpenRouter",
            "Prompt Engineering",
          ],
        },
        {
          title: "Databases & Data",
          items: [
            "MySQL",
            "MariaDB",
            "MongoDB",
          ],
        },
        {
          title: "DevOps & Workflow",
          items: [
            "Docker",
            "Git",
            "Postman",
            "Jest",
            "Vercel",
            "Linux",
          ],
        },
      ],
      softTitle: "Soft Skills",
      soft: [
        "Problem Solving",
        "Adaptability",
        "Organization",
        "Fast Learner",
        "Curiosity",
        "Communication",
        "Teamwork",
        "Client Relations",
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Have a question or want to work together? Send a quick message and I’ll reply as soon as possible.",
      emailTo: "nicolas.doyen@hotmail.be",
    },
  },

  projectsPage: {
    title: "My Projects",
    subtitle: "A showcase of applications and projects I’ve built.",
    note:
      "Some demos are adapted to run directly in the browser. For the full picture, explore the original repositories on GitHub.",
  },

  footer: {
    leftTop: "Nicolas Doyen",
    leftTopHref: "https://www.linkedin.com/in/nicolas-doyen/",
    leftBottom: "© 2026 — All rights reserved",
    socials: [
      { label: "GitHub", href: "https://github.com/conidyn" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nicolas-doyen/" },
    ],
  },
};
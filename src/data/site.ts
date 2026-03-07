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
    socials: SocialLink[];
  };
};

export const site: SiteData = {
  name: "Nicolas Doyen",
  role: "Full-Stack Developer",

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
    githubHref: "https://github.com/", // TODO: replace later
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
          title: "Languages & Frameworks",
          items: ["TypeScript", "React", "Next.js", "Node.js"],
        },
        {
          title: "Cloud & DevOps",
          items: ["Docker", "CI/CD basics", "Linux / WSL"],
        },
        {
          title: "Databases",
          items: ["MariaDB / MySQL", "PostgreSQL basics"],
        },
        {
          title: "Tools & Operating Systems",
          items: ["Git / GitHub", "VS Code", "Testing basics (Jest)"],
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
      emailTo: "your@email.com", // TODO: replace later
    },
  },

  projectsPage: {
    title: "My Projects",
    subtitle: "A showcase of applications and projects I’ve built.",
    note:
      "Some demos are adapted to run directly in the browser. For the full picture, explore the original repositories on GitHub.",
  },

  footer: {
    leftTop: "Your Name",
    leftBottom: "© 2026 — All rights reserved",
    socials: [
      { label: "GitHub", href: "https://github.com/" }, // TODO: replace later
      { label: "LinkedIn", href: "https://www.linkedin.com/" }, // TODO: replace later
    ],
  },
};
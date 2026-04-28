import {
  siChakraui,
  siDjango,
  siDocker,
  siFastapi,
  siGit,
  siGraphql,
  siJavascript,
  siJest,
  siLinux,
  siMariadb,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenrouter,
  siPostman,
  siReact,
  siSass,
  siSequelize,
  siSocketdotio,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

type Skill =
  | {
      name: string;
      icon: SimpleIcon;
      kind: "icon";
    }
  | {
      name: string;
      short: string;
      bgClassName: string;
      textClassName: string;
      kind: "fallback";
    };

const skillMap: Record<string, Skill> = {
  JavaScript: { name: "JavaScript", icon: siJavascript, kind: "icon" },
  TypeScript: { name: "TypeScript", icon: siTypescript, kind: "icon" },
  React: { name: "React", icon: siReact, kind: "icon" },
  "Next.js": { name: "Next.js", icon: siNextdotjs, kind: "icon" },
  "Tailwind CSS": { name: "Tailwind CSS", icon: siTailwindcss, kind: "icon" },
  "Chakra UI": { name: "Chakra UI", icon: siChakraui, kind: "icon" },
  SCSS: { name: "SCSS", icon: siSass, kind: "icon" },

  "Node.js": { name: "Node.js", icon: siNodedotjs, kind: "icon" },
  Express: {
    name: "Express",
    short: "EX",
    bgClassName: "bg-slate-800",
    textClassName: "text-white",
    kind: "fallback",
  },
  Django: { name: "Django", icon: siDjango, kind: "icon" },
  FastAPI: { name: "FastAPI", icon: siFastapi, kind: "icon" },
  GraphQL: { name: "GraphQL", icon: siGraphql, kind: "icon" },
  WebSocket: { name: "WebSocket", icon: siSocketdotio, kind: "icon" },
  Sequelize: { name: "Sequelize", icon: siSequelize, kind: "icon" },

  MySQL: { name: "MySQL", icon: siMysql, kind: "icon" },
  MariaDB: { name: "MariaDB", icon: siMariadb, kind: "icon" },
  MongoDB: { name: "MongoDB", icon: siMongodb, kind: "icon" },

  Docker: { name: "Docker", icon: siDocker, kind: "icon" },
  Git: { name: "Git", icon: siGit, kind: "icon" },
  Postman: { name: "Postman", icon: siPostman, kind: "icon" },
  Jest: { name: "Jest", icon: siJest, kind: "icon" },
  Vercel: { name: "Vercel", icon: siVercel, kind: "icon" },
  Linux: { name: "Linux", icon: siLinux, kind: "icon" },

  OpenRouter: { name: "OpenRouter", icon: siOpenrouter, kind: "icon" },

  LiteLLM: {
    name: "LiteLLM",
    short: "LLM",
    bgClassName: "bg-violet-600",
    textClassName: "text-white",
    kind: "fallback",
  },
  "Prompt Engineering": {
    name: "Prompt Engineering",
    short: "PE",
    bgClassName: "bg-amber-500",
    textClassName: "text-slate-950",
    kind: "fallback",
  },
};

export function SkillIcon({ skill }: { skill: string }) {
  const data = skillMap[skill];

  if (!data) return null;

  return (
    <div className="flex flex-col items-center gap-3 p-3 text-center transition-transform duration-200 hover:scale-110">
      {data.kind === "icon" ? (
        <svg
          role="img"
          aria-label={data.name}
          viewBox="0 0 24 24"
          className="h-14 w-14 sm:h-16 sm:w-16"
          fill={`#${data.icon.hex}`}
        >
          <path d={data.icon.path} />
        </svg>
      ) : (
        <div
          aria-label={data.name}
          className={`flex h-14 w-14 items-center justify-center rounded-xl text-base font-bold shadow-sm sm:h-16 sm:w-16 sm:text-lg ${data.bgClassName} ${data.textClassName}`}
        >
          {data.short}
        </div>
      )}

      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {data.name}
      </span>
    </div>
  );
}

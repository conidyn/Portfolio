import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold">{project.title}</h2>

      <p className="text-sm text-gray-600">
        {project.shortDescription}
      </p>

      {project.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 text-xs">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="px-2 py-1 border rounded"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-4 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            GitHub
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
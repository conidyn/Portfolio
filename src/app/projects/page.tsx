import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-600">Selected work with demos and source code.</p>
      </header>

      <section className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
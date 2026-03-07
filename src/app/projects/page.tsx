import { Container } from "../../components/Container";
import { site } from "../../data/site";
import { projects } from "../../data/projects";
import { ProjectTabs } from "../../components/ProjectTabs";

export default function ProjectsPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-amber-700 sm:text-5xl dark:text-amber-400">
            {site.projectsPage.title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            {site.projectsPage.subtitle}
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-sm italic text-slate-500 dark:text-slate-400">
            {site.projectsPage.note}
          </p>
        </div>

        <ProjectTabs tabs={projects} />
      </Container>
    </main>
  );
}
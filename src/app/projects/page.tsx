import { Container } from "../../components/Container";
import { site } from "../../data/site";
import { projects } from "../../data/projects";
import { ProjectTabs } from "../../components/ProjectTabs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

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

          <div className="mx-auto mt-6 max-w-3xl space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <p className="italic">{site.projectsPage.note}</p>

            <p>
              Most projects are available as local or private demos. If you
              would like a live walkthrough,{" "}
              <Link
                href="/#contact"
                className="font-medium text-amber-700 underline underline-offset-4 transition-colors hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300"
              >
                contact me
              </Link>
              .
            </p>
          </div>
        </div>

        <ProjectTabs tabs={projects} />
      </Container>
    </main>
  );
}

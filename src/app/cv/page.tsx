import Link from "next/link";
import { Container } from "../../components/Container";

export default function CvPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-amber-700 sm:text-5xl dark:text-amber-400">
            My CV
          </h1>

          <p className="mt-5 text-slate-600 dark:text-slate-300">
            Download the PDF version of my CV.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/cv/nicolas-doyen-cv-2025.pdf"
              download
              className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Download CV (PDF)
            </a>

            <Link
              href="/"
              className="rounded-md bg-slate-200/80 px-6 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-300/80 focus-visible:ring-2 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700"
            >
              Back to Home
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            Updated 2026 · PDF format
          </p>
        </div>
      </Container>
    </main>
  );
}
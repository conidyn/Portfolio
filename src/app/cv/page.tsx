import Link from "next/link";
import { Container } from "../../components/Container";

export default function CvPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-amber-700 sm:text-5xl dark:text-amber-400">
            CV & Resume
          </h1>

          <p className="mt-5 text-slate-600 dark:text-slate-300">
            View or download the French and English versions of my resume.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* French CV */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                French CV
              </h2>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                French version for local and French-speaking opportunities.
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <Link
                  href="/cv/fr"
                  className="w-28 rounded-md bg-indigo-600 px-5 py-2 text-center text-sm font-medium text-white transition hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  View
                </Link>

                <a
                  href="/cv/Nicolas-Doyen-CV-FR-2026.pdf"
                  download
                  className="w-28 rounded-md bg-slate-200/80 px-5 py-2 text-center text-sm font-medium text-slate-900 transition hover:bg-slate-300/80 focus-visible:ring-2 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700"
                >
                  Download
                </a>
              </div>
            </div>

            {/* English Resume */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                English Resume
              </h2>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                English version for international opportunities.
              </p>

              <div className="mt-10.5 flex items-center justify-center gap-3">
                <Link
                  href="/cv/en"
                  className="w-28 rounded-md bg-indigo-600 px-5 py-2 text-center text-sm font-medium text-white transition hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  View
                </Link>

                <a
                  href="/cv/Nicolas-Doyen-Resume-EN-2026.pdf"
                  download
                  className="w-28 rounded-md bg-slate-200/80 px-5 py-2 text-center text-sm font-medium text-slate-900 transition hover:bg-slate-300/80 focus-visible:ring-2 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700"
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
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
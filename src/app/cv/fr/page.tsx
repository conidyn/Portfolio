import Link from "next/link";
import { Container } from "../../../components/Container";


export const metadata = {
  title: "CV (FR) — Nicolas Doyen",
};

export default function CvFrPage() {
  return (
    <main className="py-10 sm:py-12">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-amber-700 sm:text-4xl dark:text-amber-400">
                CV (FR)
              </h1>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                French version of my CV.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/cv/Nicolas-Doyen-CV-FR-2026.pdf"
                download
                className="rounded-md bg-[#7fa9bc] px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-[#6f99ad] focus-visible:ring-2 focus-visible:ring-[#7fa9bc]"
              >
                Download
              </a>

              <Link
                href="/cv"
                className="rounded-md bg-slate-200/80 px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-300/80 focus-visible:ring-2 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700"
              >
                Back
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <iframe
              src="/cv/Nicolas-Doyen-CV-FR-2026.pdf"
              title="Nicolas Doyen CV French PDF"
              className="h-[80vh] w-full"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
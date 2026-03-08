import Link from "next/link";
import { site } from "../data/site";
import { Container } from "./Container";
import { IconGithub, IconLinkedIn } from "./Icons";

function SocialIcon({ label }: { label: string }) {
  if (label.toLowerCase().includes("github")) return <IconGithub className="h-5 w-5" />;
  if (label.toLowerCase().includes("linkedin")) return <IconLinkedIn className="h-5 w-5" />;
  return <span className="text-sm font-semibold">{label.slice(0, 1)}</span>;
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href={site.footer.leftTopHref}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-slate-900 transition hover:underline hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:text-slate-50 dark:hover:text-amber-400"
          >
            {site.footer.leftTop}
          </Link>
          <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {site.footer.leftBottom}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {site.footer.socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-amber-700 transition hover:bg-slate-100 hover:text-amber-800 dark:text-amber-400 dark:hover:bg-slate-900 dark:hover:text-amber-300"
              aria-label={s.label}
              title={s.label}
            >
              <SocialIcon label={s.label} />
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
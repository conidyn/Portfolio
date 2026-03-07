import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

type Props = {
  href: string;
  children: ReactNode;
  kind?: "soft" | "solid";
  className?: string;
};

export function Button({ href, children, kind = "soft", className }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-[rgb(var(--bg))]";

  const soft =
    "bg-slate-200/80 text-slate-900 hover:bg-slate-300/80 " +
    "dark:bg-slate-800/70 dark:text-slate-50 dark:hover:bg-slate-700/70";

  const solid =
    "bg-[rgb(var(--accent))] text-white hover:bg-[rgb(var(--accent-hover))] " +
    "shadow-sm hover:shadow " +
    "active:translate-y-[0.5px]";

  return (
    <Link href={href} className={cn(base, kind === "solid" ? solid : soft, className)}>
      {children}
    </Link>
  );
}
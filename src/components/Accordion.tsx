"use client";

import { useId, useState } from "react";
import { cn } from "../lib/cn";

type Props = {
  title: string;
  items: string[];
  defaultOpen?: boolean;
};

export function Accordion({ title, items, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-slate-900"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{title}</span>
        <span className={cn("transition", open ? "rotate-180" : "")} aria-hidden="true">
          ▾
        </span>
      </button>

      <div
        id={id}
        className={cn("overflow-hidden transition-[max-height,opacity] duration-300", open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}
      >
        <ul className="pb-6 text-slate-600">
          {items.map((it) => (
            <li key={it} className="py-1">
              {it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
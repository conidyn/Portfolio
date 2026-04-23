"use client";

import { useMemo, useState } from "react";
import { cn } from "../lib/cn";
import Image from "next/image";
import type { ProjectTab } from "../data/projects";

type SelectedImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  tabs: ProjectTab[];
};

export function ProjectTabs({ tabs }: Props) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "");
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  const active = useMemo(() => tabs.find((t) => t.id === activeId) ?? tabs[0], [tabs, activeId]);

  if (!active) return null;

  return (
    <div className="mt-10">
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-3">
          {tabs.map((t) => {
            const isActive = t.id === activeId;

            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setActiveId(t.id);
                  setSelectedImage(null);
                }}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-50"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
                )}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <div className="text-center">
          {active.badge ? (
            <div className="mx-auto inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-400/15 dark:text-amber-300">
              {active.badge}
            </div>
          ) : null}

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-amber-700 sm:text-4xl dark:text-amber-400">
            {active.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-300">
            {active.description}
          </p>

          {active.stack?.length ? (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {active.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          {active.links.length ? (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {active.links.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-amber-700 transition-colors hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {active.demo?.kind === "video" ? (
          <>
                {active.showcase?.intro ? (
                  <div className="mx-auto mt-10 max-w-3xl text-center">
                    {active.showcase.intro.title ? (
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {active.showcase.intro.title}
                      </h3>
                    ) : null}
        
                    <p className="mt-3 text-slate-600 dark:text-slate-300">
                      {active.showcase.intro.body}
                    </p>
                  </div>
                ) : null}
            <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
              Best viewed in fullscreen or on desktop.
            </p>

            <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 bg-black shadow-sm dark:border-slate-800">
              <div className="aspect-video">
                <video
                  className="h-full w-full"
                  src={active.demo.href}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  title="Project demo"
                  preload="metadata"
                />
              </div>
            </div>
          </>
        ) : null}


        {active.showcase?.sections?.map((section) => (
          <div key={section.id} className="mx-auto mt-24 max-w-3xl">
            <h4 className="text-center text-lg font-semibold text-slate-900 dark:text-white">
              {section.title}
            </h4>

            <p className="mt-3 text-center text-slate-600 dark:text-slate-300">
              {section.body}
            </p>

            {section.image ? (
              <button
                type="button"
                onClick={() => {
                  if (!section.image) return;
                  setSelectedImage(section.image);
                }}
                className="mt-8 block w-full overflow-hidden rounded-lg border border-slate-200 shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-offset-slate-950"
                aria-label={`Open ${section.title} preview`}
              >
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={section.image.height}
                  className="h-auto w-full object-cover"
                />
              </button>
            ) : null}
          </div>
        ))}
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Close image preview"
            >
              <span className="text-xl leading-none">&times;</span>
            </button>

            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="max-h-[90vh] w-auto max-w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
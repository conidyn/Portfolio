import Link from "next/link";
import { site } from "../data/site";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";
import { Pill } from "../components/Pill";
import { ContactForm } from "../components/ContactForm";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <Image
              src="/images/profile.jpg"
              alt="Nicolas Doyen"
              width={150}
              height={96}
              className="mx-auto rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800"
            />

            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {site.name}
            </h1>

            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-300">
              {site.role}
            </p>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-slate-50">
                {site.hero.headline}
              </span>{" "}
              {site.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {site.hero.ctas.map((cta) => (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className={[
                    "rounded-md px-5 py-2 text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-indigo-500",
                    cta.kind === "solid"
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-slate-200/80 text-slate-900 hover:bg-slate-300/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700",
                  ].join(" ")}
                >
                  {cta.label}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={site.hero.githubHref}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300"
              >
                {site.hero.githubLabel}
              </a>
            </div>

            <div className="mt-12 text-slate-400 dark:text-slate-500">
              <a href="#about" aria-label="Scroll to content" className="inline-flex">
                <span className="text-2xl">⌄</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <Section id="about" title={site.sections.about.title}>
        <p className="mx-auto max-w-3xl text-center leading-relaxed text-slate-600 dark:text-slate-300">
          {site.sections.about.text}
        </p>
      </Section>

      {/* Focus */}
      <Section id="focus" title={site.sections.focus.title} className="bg-white/60 dark:bg-slate-950/40">
        <p className="mx-auto max-w-3xl text-center leading-relaxed text-slate-600 dark:text-slate-300">
          {site.sections.focus.text}
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" title={site.sections.skills.title}>
        <div className="mx-auto max-w-3xl">
          <h3 className="text-center text-2xl font-semibold text-amber-700 dark:text-amber-400">
            {site.sections.skills.technicalTitle}
          </h3>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
            {site.sections.skills.technical.map((group, idx) => (
              <Accordion
                key={group.title}
                title={group.title}
                items={group.items}
                defaultOpen={idx === 0}
              />
            ))}
          </div>

          <h3 className="mt-14 text-center text-2xl font-semibold text-amber-700 dark:text-amber-400">
            {site.sections.skills.softTitle}
          </h3>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {site.sections.skills.soft.map((s) => (
              <Pill key={s} label={s} />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={site.sections.contact.title} className="bg-white/60 dark:bg-slate-950/40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-slate-600 dark:text-slate-300">{site.sections.contact.subtitle}</p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-950">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
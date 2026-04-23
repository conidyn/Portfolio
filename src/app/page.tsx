import Link from "next/link";
import { site } from "../data/site";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Pill } from "../components/Pill";
import { ContactForm } from "../components/ContactForm";
import Image from "next/image";
import { SkillsCard } from "../components/SkillsCard";
import { Button } from "../components/Button";

export default function HomePage() {
  return (
    <main>
      <section id="home" className="relative py-16 sm:py-20">
        <Container>
          <div className="-mb-2 flex justify-start">
            <span className="relative -top-15 sm:-top-19 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span />
              {site.hero.availability}
            </span>
          </div>
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
                <Button
                  key={cta.href + cta.label}
                  href={cta.href}
                  kind={cta.kind}
                >
                  {cta.label}
                </Button>
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
              <a
                href="#about"
                aria-label="Scroll to content"
                className="inline-flex"
              >
                <span className="text-2xl">⌄</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section id="about" title={site.sections.about.title}>
        <p className="mx-auto max-w-3xl text-center leading-relaxed text-slate-600 dark:text-slate-300">
          {site.sections.about.text}
        </p>
      </Section>

      <Section
        id="focus"
        title={site.sections.focus.title}
        className="bg-white/60 dark:bg-slate-950/40"
      >
        <p className="mx-auto max-w-3xl text-center leading-relaxed text-slate-600 dark:text-slate-300">
          {site.sections.focus.text}
        </p>
      </Section>

      <Section id="skills" title={site.sections.skills.title}>
        <div className="mx-auto max-w-3xl">
          <h3 className="text-center text-2xl font-semibold text-amber-700 dark:text-amber-400">
            {site.sections.skills.technicalTitle}
          </h3>

          <div className="mt-10 space-y-8">
            {site.sections.skills.technical.map((group) => (
              <SkillsCard
                key={group.title}
                title={group.title}
                skills={group.items}
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

      <Section
        id="contact"
        title={site.sections.contact.title}
        className="bg-white/60 dark:bg-slate-950/40"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-slate-600 dark:text-slate-300">
            {site.sections.contact.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-950">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}

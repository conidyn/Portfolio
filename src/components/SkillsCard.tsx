import { SkillIcon } from "./SkillIcon";

type Props = {
  title: string;
  skills: string[];
};

export function SkillsCard({ title, skills }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h4>
        <div className="mt-3 h-px w-full bg-slate-200 dark:bg-slate-800" />
      <div className="mt-6 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
        {skills.map((skill) => (
          <SkillIcon key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
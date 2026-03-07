type Props = {
  label: string;
};

export function Pill({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
      {label}
    </span>
  );
}
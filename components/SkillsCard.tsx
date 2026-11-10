interface Typeface {
  family: string;
  weight: string;
  accent: string;
}

interface SkillsCardProps {
  title: string;
  description: string;
  items: string[];
  typeface: Typeface;
}

export default function SkillsCard({
  title,
  description,
  items,
  typeface,
}: SkillsCardProps) {
  return (
    <aside
      className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
      style={{ fontFamily: typeface.family }}
    >
      <p
        className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: typeface.accent, fontWeight: typeface.weight }}
      >
        {title}
      </p>
      <h2 className="mb-3 text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mb-4 text-sm leading-6 text-slate-600">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

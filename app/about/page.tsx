import SkillsCard from "@/components/SkillsCard";

export default function About() {
  const typeface = {
    family: "Segoe UI, sans-serif",
    weight: "700",
    accent: "#2563eb",
  };

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          About me
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Learning, building, and improving every week
        </h1>
      </header>

      <div className="max-w-3xl space-y-5 text-lg leading-8 text-slate-600">
        <p>
          I&apos;m a web development student focused on building approachable,
          accessible interfaces that solve real problems. I enjoy turning ideas
          into interactive experiences and learning through hands-on projects.
        </p>
        <p>
          My work combines thoughtful design, clean code, and a strong focus on
          usability. I&apos;m especially interested in modern front-end workflows,
          responsive layouts, and the practical skills that help teams ship well.
        </p>
      </div>

      <SkillsCard
        title="Technical strengths"
        description="I enjoy working with tools and frameworks that help me create polished, maintainable web experiences."
        items={[
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Responsive Design",
          "Accessibility",
          "React",
        ]}
        typeface={typeface}
      />
    </article>
  );
}

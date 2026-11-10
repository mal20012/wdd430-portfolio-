import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Course Planner",
    description:
      "A planning dashboard for tracking assignments, deadlines, and weekly priorities in a student workflow.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    link: "https://github.com/your-username/course-planner",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather app that fetches live conditions, displays forecasts, and helps users compare local trends.",
    technologies: ["React", "JavaScript", "CSS", "API Integration"],
    link: "https://github.com/your-username/weather-dashboard",
  },
  {
    title: "Learning Journal",
    description:
      "A personal journal platform for writing reflections, organizing learning goals, and tracking the progress of web development projects.",
    technologies: ["Next.js", "Markdown", "Tailwind CSS"],
    link: "https://github.com/your-username/learning-journal",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section aria-labelledby="welcome-heading" className="space-y-5 py-6">
        <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">
          WDD 430
        </p>
        <h1
          id="welcome-heading"
          className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
        >
          Welcome to my portfolio
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          I&apos;m a web development student building useful, accessible, and
          responsive experiences for the web. Explore some of the projects I&apos;ve
          created and the skills I&apos;m continuing to grow.
        </p>
      </section>

      <section aria-labelledby="projects-heading" className="space-y-5">
        <h2 id="projects-heading" className="text-2xl font-bold text-slate-900">
          Featured projects
        </h2>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}

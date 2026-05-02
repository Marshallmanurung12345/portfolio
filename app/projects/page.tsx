import { SectionTitle } from "../components/section-title";
import { featuredProjects } from "../data";

export default function ProjectsPage() {
  return (
    <main className="bg-[#fcfaf7]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Projects"
            title="A dedicated page for project growth."
            description="This route is intentionally separate so later you can turn each project into a stronger case study with screenshots, tech stack, challenges, and outcomes."
          />
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.title} className="rounded-lg border border-slate-200 bg-white p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
                      {project.period}
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold text-slate-950">
                      {project.title}
                    </h2>
                  </div>
                  <div className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                    Featured
                  </div>
                </div>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

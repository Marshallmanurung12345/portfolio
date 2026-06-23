import { technicalSkills } from "../data";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    skills: ["PHP", "Laravel", "Node.js", "Java", "MySQL", "PostgreSQL", "Firebase", "REST API"],
  },
  {
    title: "Mobile & Tools",
    skills: ["Kotlin", "Flutter", "Dart", "Git"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-slate-200 bg-[#fafafa]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">
            About
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            A quick introduction to who I am and how I work.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Left Column - Clean Portrait Image */}
          <div className="relative mx-auto w-full max-w-sm">
            {/* Subtle background glow */}
            <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-rose-200/20 blur-3xl" />
            <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />
            
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_16px_50px_rgba(15,23,42,0.09)]">
              <div
                className="aspect-[4/5] rounded-xl bg-cover bg-center bg-[#fcfaf7]"
                style={{ backgroundImage: "url('/workspace-about.png')" }}
                aria-label="Workspace Illustration"
              />
            </div>
          </div>

          {/* Right Column - Text & Grouped Skills */}
          <div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                I am an Informatics student at Del Institute of Technology with
                a strong interest in building practical web and mobile
                applications. I like working on products that make workflows
                clearer, easier to maintain, and useful in real situations.
              </p>
              <p>
                My work so far includes software development, system analysis,
                teaching support, and organization responsibility. That mix
                helps me think about both technical details and how people
                actually use the systems I build.
              </p>
            </div>

            {/* Skills Categories */}
            <div className="mt-10 border-t border-slate-200/80 pt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Technical Skills
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {skillCategories.map((category) => (
                  <div key={category.title} className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-md border border-slate-200/60 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-slate-300 hover:text-slate-900"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

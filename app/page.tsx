import Link from "next/link";
import { SectionTitle } from "./components/section-title";
import {
  aboutHighlights,
  contactLinks,
  experiences,
  featuredProjects,
  technicalSkills,
} from "./data";
export default function Home() {
  const experienceCardStyles = [
    "bg-[linear-gradient(180deg,#3b3340_0%,#4b414f_100%)]",
    "bg-[linear-gradient(180deg,#27384a_0%,#31485e_100%)]",
    "bg-[linear-gradient(180deg,#4b3b31_0%,#5a473b_100%)]",
  ];

  const experienceAccentStyles = [
    "from-rose-400 via-pink-300 to-orange-200",
    "from-sky-400 via-cyan-300 to-indigo-200",
    "from-amber-300 via-orange-300 to-yellow-100",
  ];

  const experienceBadgeStyles = [
    "bg-rose-100 text-rose-700",
    "bg-sky-100 text-sky-700",
    "bg-amber-100 text-amber-700",
  ];

  return (
    <main>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-slate-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.14),_transparent_24%),radial-gradient(circle_at_82%_20%,_rgba(34,197,94,0.14),_transparent_24%),linear-gradient(135deg,#0f172a_0%,#172033_45%,#1e293b_100%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_24%)] opacity-30" />
        <div className="absolute inset-y-0 left-[18%] w-[14%] bg-white/5 blur-[2px]" />
        <div className="absolute inset-y-0 left-[46%] w-[18%] bg-slate-900/18" />
        <div className="absolute bottom-[-14%] right-[6%] h-[24rem] w-[24rem] rounded-full border border-white/10 bg-emerald-200/8 blur-3xl" />
        <div className="absolute right-[10%] top-[18%] hidden h-[26rem] w-[26rem] rounded-full border border-white/12 lg:block" />
        <div className="absolute right-[13%] top-[21%] hidden h-[20rem] w-[20rem] rounded-full border border-emerald-300/14 lg:block" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.8)_0%,rgba(15,23,42,0.58)_42%,rgba(15,23,42,0.3)_100%)]" />

        <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-14 px-6 pb-16 pt-32 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/70">
              Hello
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              My Name Is
              <br />
              <span className="text-rose-500">Marshall Manurung</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Informatics Student, Web Developer, and Mobile App Builder.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/cv-marshall-manurung.pdf"
                className="rounded-md bg-rose-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_60px_rgba(244,63,94,0.28)] transition hover:bg-rose-400"
              >
                View My CV
              </Link>
              <span className="flex items-center text-sm text-slate-400">
                Open resume and supporting profile summary
              </span>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="relative h-[34rem] w-full max-w-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] shadow-[0_30px_120px_rgba(2,6,23,0.42)] backdrop-blur-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/marshall-home.png')" }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_38%),linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.16)_56%,rgba(15,23,42,0.28))]" />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-slate-200 bg-[#fcfaf7]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Experience"
            title="Roles that shaped how I work."
            description="Teaching, technical support, and organizational responsibility all matter here because they show how you operate beyond writing code."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {experiences.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/8 p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(15,23,42,0.12)] ${experienceCardStyles[index % experienceCardStyles.length]}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${experienceAccentStyles[index % experienceAccentStyles.length]}`}
                />
                <div className="absolute -bottom-14 right-8 h-40 w-40 rounded-full border border-white/8 bg-white/6 blur-2xl" />
                <div
                  className={`absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-semibold ${experienceBadgeStyles[index % experienceBadgeStyles.length]}`}
                >
                  0{index + 1}
                </div>

                <div className="relative pt-20">
                  <h3 className="max-w-sm text-2xl font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-slate-200">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <span>Built through teaching, mentoring, and campus work.</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="project" className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Project"
            title="Selected work, kept in one flow."
            description="This keeps the portfolio easy to scan. Later, each project can still grow into a deeper case study when you have screenshots and more detail."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#fffaf8_100%)] p-8 shadow-[0_16px_50px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.07)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-400" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
                      {project.period}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                      {project.title}
                    </h3>
                  </div>
                  <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
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
                      className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-600"
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

      <section id="about" className="border-b border-slate-200 bg-[#f6f1ea]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="About"
            title="A personal summary that stays concise."
            description="This section gives enough context about who you are and how you work without turning the portfolio into a long resume block."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Profile</h3>
              <p className="mt-5 text-base leading-8 text-slate-600">
                I am an Informatics student at Del Institute of Technology with
                a strong interest in software development, especially web and
                mobile applications that are practical, maintainable, and useful
                in real workflows.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                I work across analysis, implementation, and iteration, and I
                want this portfolio to keep growing with stronger project case
                studies over time.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-semibold text-slate-950">
                Highlights
              </h3>
              <ul className="mt-6 space-y-4">
                {aboutHighlights.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-rose-200 pl-4 text-sm leading-7 text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-200 bg-[#fcfaf7] px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Contact"
            title="Everything stays reachable from one page."
            description="This keeps the portfolio easy to use. People can read, scroll, and contact you without jumping between separate pages."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {contactLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-[#fcfaf7] p-8 transition hover:border-slate-300 hover:bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-4 break-all text-xl font-semibold text-slate-950">
                  {item.value}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

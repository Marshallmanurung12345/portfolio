import { featuredProjects } from "../data";

const projectVisuals = [
  {
    theme: "from-rose-500 via-orange-300 to-amber-200",
    panel: "bg-slate-950",
    title: "Proposal",
    bars: ["w-10/12", "w-8/12", "w-11/12"],
  },
  {
    theme: "from-cyan-400 via-sky-300 to-indigo-300",
    panel: "bg-[#102a43]",
    title: "Church App",
    bars: ["w-9/12", "w-7/12", "w-10/12"],
  },
  {
    theme: "from-emerald-300 via-teal-300 to-lime-200",
    panel: "bg-[#17362f]",
    title: "Orders",
    bars: ["w-8/12", "w-11/12", "w-6/12"],
  },
];

export function ProjectShowcase() {
  return (
    <section id="project" className="border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">
            Projects
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Recent work with a clearer project preview.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A compact look at systems I have worked on, combining the problem
            area, technical focus, and a quick visual snapshot of each product.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {featuredProjects.map((project, index) => {
            const visual = projectVisuals[index % projectVisuals.length];
            const reverse = index % 2 === 1;
            const isLppmProject = index === 0;
            const isGpdiProject = index === 1;
            const isLaundryProject = index === 2;
            const isMachineLearningProject = index === 3;

            return (
              <article
                key={project.title}
                className="grid overflow-hidden rounded-lg border border-slate-200 bg-[#fcfaf7] shadow-[0_20px_70px_rgba(15,23,42,0.07)] lg:grid-cols-2"
              >
                <div
                  className={`flex min-h-[24rem] flex-col justify-center p-8 sm:p-10 lg:p-12 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
                    {project.period}
                  </p>
                  <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                    {project.summary}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`relative min-h-[24rem] overflow-hidden bg-slate-900 p-8 sm:p-10 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  {isLppmProject ? (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/lppm-team.png')" }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.66)_42%,rgba(15,23,42,0.35)_100%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
                      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-400/25 blur-3xl" />
                      <div className="absolute -bottom-24 left-6 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />

                      <div className="relative grid h-full items-center gap-6 md:grid-cols-[0.72fr_1fr]">
                        <div className="text-white">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-200">
                            Documentation
                          </p>
                          <h4 className="mt-4 text-3xl font-semibold leading-tight">
                            LPPM Information System
                          </h4>
                          <p className="mt-4 text-sm leading-7 text-white/74">
                            Built with team collaboration and supported by real
                            interface work for proposal and reporting workflows.
                          </p>
                        </div>

                        <div className="ml-auto w-full max-w-md">
                          <div className="overflow-hidden rounded-lg border border-white/18 bg-white/14 p-2 shadow-[0_24px_80px_rgba(15,23,42,0.38)] backdrop-blur-md">
                            <div
                              className="aspect-[16/9] rounded-md bg-cover bg-center"
                              style={{
                                backgroundImage: "url('/lppm-dashboard.png')",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : isGpdiProject ? (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-[center_72%]"
                        style={{ backgroundImage: "url('/gpdi-team.png')" }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.92)_0%,rgba(30,41,59,0.7)_45%,rgba(30,64,175,0.45)_100%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-18" />
                      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl" />
                      <div className="absolute -bottom-24 left-6 h-64 w-64 rounded-full bg-rose-300/18 blur-3xl" />

                      <div className="relative grid h-full items-center gap-6 md:grid-cols-[0.72fr_1fr]">
                        <div className="text-white">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                            Web Platform
                          </p>
                          <h4 className="mt-4 text-3xl font-semibold leading-tight">
                            GPdI Sibulele Balige
                          </h4>
                          <p className="mt-4 text-sm leading-7 text-white/74">
                            Church information platform with public pages,
                            schedules, announcements, gallery, and admin access.
                          </p>
                        </div>

                        <div className="relative ml-auto w-full max-w-md pb-10 pr-12 sm:pb-12 sm:pr-16">
                          <div className="overflow-hidden rounded-lg border border-white/18 bg-white/14 p-2 shadow-[0_24px_80px_rgba(15,23,42,0.38)] backdrop-blur-md">
                            <div
                              className="aspect-[16/9] rounded-md bg-cover bg-top"
                              style={{
                                backgroundImage: "url('/gpdi-website.png')",
                              }}
                            />
                          </div>
                          <div className="absolute bottom-0 right-0 w-[34%] min-w-24 overflow-hidden rounded-[1.2rem] border border-white/24 bg-slate-950 p-1.5 shadow-[0_22px_60px_rgba(15,23,42,0.48)]">
                            <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-950/85" />
                            <div
                              className="aspect-[729/978] rounded-[0.9rem] bg-cover bg-top"
                              style={{
                                backgroundImage: "url('/gpdi-mobile.png')",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : isLaundryProject ? (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.35),transparent_30%),radial-gradient(circle_at_88%_14%,rgba(244,114,182,0.28),transparent_28%),linear-gradient(135deg,#0f172a_0%,#164e63_48%,#0f766e_100%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />

                      <div className="relative grid h-full items-center gap-6 md:grid-cols-[0.72fr_1fr]">
                        <div className="text-white">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-100">
                            Mobile App
                          </p>
                          <h4 className="mt-4 text-3xl font-semibold leading-tight">
                            Laundry Management
                          </h4>
                          <p className="mt-4 text-sm leading-7 text-white/74">
                            Mobile workflow for managing laundry orders,
                            transaction details, and operational progress.
                          </p>
                        </div>

                        <div className="relative mx-auto flex min-h-72 w-full max-w-md items-center justify-center">
                          <div className="relative z-10 w-[42%] min-w-28 rotate-[-4deg] overflow-hidden rounded-[1.45rem] border border-white/24 bg-slate-950 p-1.5 shadow-[0_26px_70px_rgba(15,23,42,0.44)]">
                            <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-950/85" />
                            <div
                              className="aspect-[371/820] rounded-[1rem] bg-cover bg-top"
                              style={{
                                backgroundImage: "url('/laundry-mobile-1.png')",
                              }}
                            />
                          </div>
                          <div className="relative -ml-6 mt-10 w-[42%] min-w-28 rotate-[5deg] overflow-hidden rounded-[1.45rem] border border-white/24 bg-slate-950 p-1.5 shadow-[0_26px_70px_rgba(15,23,42,0.44)] sm:-ml-10">
                            <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-950/85" />
                            <div
                              className="aspect-[379/743] rounded-[1rem] bg-cover bg-top"
                              style={{
                                backgroundImage: "url('/laundry-mobile-2.png')",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : isMachineLearningProject ? (
                    <>
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827_0%,#14532d_50%,#365314_100%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-16" />

                      <div className="relative grid h-full items-center gap-6 md:grid-cols-[0.72fr_1fr]">
                        <div className="text-white">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime-100">
                            Machine Learning
                          </p>
                          <h4 className="mt-4 text-3xl font-semibold leading-tight">
                            Rice Leaf Disease Classification
                          </h4>
                          <p className="mt-4 text-sm leading-7 text-white/74">
                            Team-based computer vision project using
                            preprocessing, augmentation, CNN model development,
                            and evaluation.
                          </p>
                        </div>

                        <div className="ml-auto w-full max-w-md">
                          <div className="overflow-hidden rounded-lg border border-white/18 bg-white/14 p-2 shadow-[0_24px_80px_rgba(15,23,42,0.38)] backdrop-blur-md">
                            <div
                              className="aspect-[1904/881] rounded-md bg-cover bg-left-top"
                              style={{
                                backgroundImage: "url('/rice-leaf-ml.png')",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${visual.theme} opacity-75`}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.11)_1px,transparent_1px)] bg-[size:46px_46px] opacity-25" />
                      <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-white/22 blur-3xl" />
                      <div className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-slate-950/28 blur-3xl" />

                      <div className="relative mx-auto flex h-full max-w-md items-center">
                        <div className="w-full rotate-[-2deg] rounded-[1.5rem] border border-white/18 bg-white/16 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.35)] backdrop-blur-md">
                          <div className="rounded-[1rem] bg-white p-4">
                            <div className="mb-4 flex items-center gap-2">
                              <span className="h-3 w-3 rounded-full bg-rose-400" />
                              <span className="h-3 w-3 rounded-full bg-amber-300" />
                              <span className="h-3 w-3 rounded-full bg-emerald-400" />
                            </div>

                            <div
                              className={`rounded-xl p-5 text-white ${visual.panel}`}
                            >
                              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                                Dashboard
                              </p>
                              <h4 className="mt-3 text-2xl font-semibold">
                                {visual.title}
                              </h4>
                              <div className="mt-6 grid grid-cols-3 gap-3">
                                <div className="rounded-lg bg-white/12 p-3">
                                  <div className="h-8 rounded bg-white/24" />
                                  <div className="mt-3 h-2 rounded bg-white/32" />
                                </div>
                                <div className="rounded-lg bg-white/12 p-3">
                                  <div className="h-8 rounded bg-white/24" />
                                  <div className="mt-3 h-2 rounded bg-white/32" />
                                </div>
                                <div className="rounded-lg bg-white/12 p-3">
                                  <div className="h-8 rounded bg-white/24" />
                                  <div className="mt-3 h-2 rounded bg-white/32" />
                                </div>
                              </div>
                            </div>

                            <div className="mt-5 space-y-3">
                              {visual.bars.map((bar) => (
                                <div
                                  key={bar}
                                  className="rounded-lg bg-slate-100 p-3"
                                >
                                  <div
                                    className={`h-2 rounded bg-slate-300 ${bar}`}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

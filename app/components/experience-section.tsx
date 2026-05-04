import { experiences } from "../data";

const cardStyles = [
  {
    card: "bg-[linear-gradient(135deg,#1f2937_0%,#3a2d3f_52%,#573042_100%)]",
    accent: "from-rose-400 via-fuchsia-300 to-amber-200",
    label: "Mentoring",
  },
  {
    card: "bg-[linear-gradient(135deg,#102a43_0%,#1f4e5f_54%,#27666c_100%)]",
    accent: "from-cyan-300 via-sky-300 to-emerald-200",
    label: "Technical Lab",
  },
  {
    card: "bg-[linear-gradient(135deg,#2f241f_0%,#594030_52%,#765335_100%)]",
    accent: "from-amber-300 via-orange-300 to-lime-200",
    label: "Organization",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-slate-200 bg-[#fcfaf7]">
      <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-16 text-center sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">
          Experience
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Practical roles that shaped how I solve problems.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
          A few roles that trained me to explain ideas clearly, handle technical
          details carefully, and stay responsible when working with a team.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((item, index) => {
            const style = cardStyles[index % cardStyles.length];

            return (
              <article
                key={item.title}
                className={`group relative min-h-[28rem] overflow-hidden rounded-lg p-8 text-white shadow-[0_22px_70px_rgba(15,23,42,0.13)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.18)] ${style.card}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.accent}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full border border-white/14 bg-white/8" />
                <div className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-white/8 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-md border border-white/16 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/78">
                      {style.label}
                    </span>
                    <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_28px_rgba(110,231,183,0.85)]" />
                  </div>

                  <div className="mt-24">
                    <h3 className="text-2xl font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-6 text-base leading-8 text-white/84">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-10">
                    <div className="h-px w-full bg-white/16" />
                    <p className="mt-5 text-sm leading-6 text-white/68">
                      Focused on communication, consistency, and practical
                      execution.
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

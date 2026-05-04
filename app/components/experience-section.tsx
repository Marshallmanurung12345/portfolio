import { experiences } from "../data";

const cardStyles = [
  {
    accent: "bg-rose-500",
    label: "Mentoring",
    focus: "Guiding students through code, debugging, and algorithmic thinking.",
  },
  {
    accent: "bg-sky-500",
    label: "Technical Lab",
    focus: "Supporting hands-on network configuration and troubleshooting.",
  },
  {
    accent: "bg-amber-500",
    label: "Organization",
    focus: "Handling budget records, accountability, and student activity needs.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">
            Experience
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Roles that shaped how I work with people and systems.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
            My experience combines teaching, technical lab support, and
            organizational responsibility. Each role trained me to explain
            clearly, handle details carefully, and follow through.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((item, index) => {
            const style = cardStyles[index % cardStyles.length];

            return (
              <article
                key={item.title}
                className="relative flex min-h-80 flex-col rounded-lg border border-slate-200 bg-[#fcfaf7] p-6 shadow-[0_16px_44px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_22px_54px_rgba(15,23,42,0.09)] sm:p-7"
              >
                <div
                  className={`absolute left-0 top-6 h-12 w-1 rounded-r ${style.accent}`}
                />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {style.label}
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {item.description}
                </p>
                <p className="mt-auto border-t border-slate-200 pt-5 text-sm leading-6 text-slate-500">
                  {style.focus}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

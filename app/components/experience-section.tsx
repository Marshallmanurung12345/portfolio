import { experiences } from "../data";

const borderColors = [
  "border-t-blue-500",
  "border-t-emerald-500",
  "border-t-amber-500",
  "border-t-violet-500",
  "border-t-rose-500",
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-slate-200 bg-[#fafafa]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
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

        {/* Experience Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {experiences.map((item, index) => {
            const borderColor = borderColors[index % borderColors.length];

            return (
              <article
                key={item.title}
                className={`relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)] min-h-[220px] border-t-4 ${borderColor}`}
              >
                {/* Role Title */}
                <h3 className="text-left text-base font-bold leading-snug text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-left text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

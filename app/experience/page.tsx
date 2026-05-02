import { experiences } from "../data";

export default function ExperiencePage() {
  return (
    <main className="bg-[#fcfaf7]">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
            Experience
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Roles that shaped how I work.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            This page keeps teaching, campus responsibility, and technical work
            in one place so the portfolio shows both execution and consistency.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="space-y-6">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-500">
                    {item.period}
                  </p>
                </div>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

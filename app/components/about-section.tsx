import { technicalSkills } from "../data";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-slate-200 bg-[#f6f1ea]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">
            About
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            A quick introduction to who I am and how I work.
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-5 -top-5 h-36 w-36 rounded-full bg-rose-300/35 blur-3xl" />
            <div className="absolute -bottom-8 -right-5 h-44 w-44 rounded-full bg-emerald-300/24 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <div
                className="aspect-[4/5] rounded-md bg-cover bg-center"
                style={{ backgroundImage: "url('/marshall-home.png')" }}
                aria-label="Marshall Manurung"
              />
            </div>
          </div>

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

            <div className="mt-8 flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { experiences } from "../data";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-slate-200 bg-white">
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
          {experiences.map((item) => {
            return (
              <article
                key={item.title}
                className="relative flex flex-col rounded-2xl border border-white/10 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.18)] min-h-[380px]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(69, 57, 72, 0.94), rgba(57, 47, 60, 0.97)), url('/marshall-home.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Yellow Circle Gear Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fde047] shadow-[0_4px_12px_rgba(253,224,71,0.25)]">
                  <svg
                    className="h-7 w-7 text-[#453948]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Larger Gear */}
                    <circle cx="10" cy="10" r="2" />
                    <path d="M10 7V6m0 8v-1m-4-2H5m10 0h-1M6.5 8.5l.8.8m5.4 5.4l.8.8m-7 0l.8-.8m5.4-5.4l.8-.8" />
                    {/* Smaller Gear */}
                    <circle cx="15" cy="15" r="1.5" />
                    <path d="M15 12.5v-.5m0 6v-.5m-3-3h-.5m6 0h-.5" />
                  </svg>
                </div>

                {/* Role Title */}
                <h3 className="mt-6 text-center text-lg font-bold leading-snug text-white">
                  {item.title}
                </h3>

                {/* Period Subtitle */}
                <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-wider text-rose-300/80">
                  {item.period}
                </p>

                {/* Description */}
                <p className="mt-4 text-center text-xs leading-relaxed text-white/70">
                  {item.description}
                </p>

                {/* Divider & Focus Area at the bottom */}
                <div className="mt-auto pt-5 border-t border-white/10 w-full text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-rose-300/90">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[10px] leading-relaxed text-white/50">
                    {item.focus}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { contactLinks } from "../data";

const contactMeta = {
  Email: {
    eyebrow: "Best for project briefs",
    action: "Send email",
    note: "I usually keep project details, scope, and documents here.",
  },
  Phone: {
    eyebrow: "Quick confirmation",
    action: "Call number",
    note: "Useful when the discussion needs a faster answer.",
  },
  LinkedIn: {
    eyebrow: "Professional context",
    action: "Open profile",
    note: "Connect for work history, campus activity, and collaboration.",
  },
  GitHub: {
    eyebrow: "Code reference",
    action: "Open GitHub",
    note: "See repositories, experiments, and implementation practice.",
  },
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-slate-200 bg-[#fcfaf7]"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-rose-200/55 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-5rem] h-96 w-96 rounded-full bg-emerald-200/55 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_46%,rgba(15,23,42,0.04)_46%,rgba(15,23,42,0.04)_47%,transparent_47%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-slate-950 p-8 text-white shadow-[0_28px_90px_rgba(15,23,42,0.24)] sm:p-10">
          <div className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute bottom-[-4rem] left-[-4rem] h-44 w-44 rounded-full bg-rose-500/18 blur-2xl" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-300">
              Contact
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s make the next conversation concrete.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Send the context first: project goal, timeline, role needed, or
              the problem you want to solve. I can respond with a clearer next
              step when the brief is specific.
            </p>

            <div className="mt-10 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-2">
              <div>
                <p className="text-3xl font-semibold text-white">4</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  direct channels for work, collaboration, and code references.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">Open</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  for focused project discussions and practical development
                  work.
                </p>
              </div>
            </div>

            <Link
              href="mailto:marshallmanurung92@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_50px_rgba(244,63,94,0.28)] transition hover:bg-rose-400"
            >
              Start with email
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>

        <div className="grid content-center gap-4">
          {contactLinks.map((item, index) => {
            const meta = contactMeta[item.label as keyof typeof contactMeta];
            const isExternal = item.href.startsWith("https://");

            return (
              <Link
                key={item.label}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group relative overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white/82 p-5 shadow-[0_18px_58px_rgba(15,23,42,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-[0_24px_72px_rgba(15,23,42,0.11)] sm:p-6"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-rose-500 transition group-hover:bg-slate-950" />
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#fcfaf7] text-sm font-semibold text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-500">
                          {meta.eyebrow}
                        </p>
                      </div>
                      <span className="rounded-full border border-slate-200 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 transition group-hover:border-slate-950 group-hover:text-slate-950">
                        {meta.action}
                      </span>
                    </div>

                    <p className="mt-5 break-all text-2xl font-semibold leading-tight tracking-tight text-slate-950">
                      {item.value}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                      {meta.note}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

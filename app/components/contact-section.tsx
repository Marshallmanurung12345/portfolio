import Link from "next/link";
import { contactLinks } from "../data";

const contactMeta = {
  Email: { short: "EM", action: "Send email" },
  Phone: { short: "PH", action: "Call number" },
  LinkedIn: { short: "IN", action: "Open profile" },
  GitHub: { short: "GH", action: "Open repository" },
};

export function ContactSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Let&apos;s connect for work, collaboration, or project discussion.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Reach me through the channels below. Each card opens the right
            contact destination directly.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {contactLinks.map((item) => {
            const meta = contactMeta[item.label as keyof typeof contactMeta];

            return (
              <Link
                key={item.label}
                href={item.href}
                className="group relative overflow-hidden rounded-lg border border-slate-200 bg-[#fcfaf7] p-6 shadow-[0_16px_55px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-500 via-orange-300 to-emerald-300 opacity-80" />
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold tracking-[0.16em] text-white">
                    {meta.short}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {item.label}
                      </p>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500 opacity-75 transition group-hover:opacity-100">
                        {meta.action}
                      </span>
                    </div>
                    <p className="mt-4 break-all text-xl font-semibold leading-8 text-slate-950">
                      {item.value}
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

import { contactLinks } from "../data";

const contactCardConfig = {
  Email: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    bg: "bg-blue-50 text-blue-600 border-blue-100",
    note: "Best for project briefs & inquiries.",
  },
  Phone: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    bg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    note: "Quick confirmations & follow-ups.",
  },
  LinkedIn: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    bg: "bg-indigo-50 text-indigo-600 border-indigo-100",
    note: "Professional networking & context.",
  },
  GitHub: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    bg: "bg-slate-50 text-slate-700 border-slate-200",
    note: "Code repositories & experiments.",
  },
};

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          
          {/* Left Column - Headline & Main CTA */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">
              Contact
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Let&apos;s build something together.
            </h2>
            <p className="max-w-md text-base leading-8 text-slate-600">
              If you have a project idea, a collaboration proposal, or simply want to connect, feel free to reach out through any of these direct channels.
            </p>
            
            <div className="pt-4">
              <a
                href="mailto:marshallmanurung92@gmail.com"
                className="inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-blue-500"
              >
                <svg className="h-4.5 w-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Start with email
              </a>
            </div>
          </div>

          {/* Right Column - Sleek Channels Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((item) => {
              const config = contactCardConfig[item.label as keyof typeof contactCardConfig];
              const isExternal = item.href.startsWith("https://");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.02)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.05)] min-h-[160px]"
                >
                  {/* Top Bar: Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${config.bg}`}>
                      {config.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {item.label}
                    </span>
                  </div>

                  {/* Bottom Info: Value & Note */}
                  <div className="mt-6">
                    <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors break-all leading-tight">
                      {item.value}
                    </p>
                    <p className="mt-1.5 text-xs text-slate-500 leading-normal">
                      {config.note}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

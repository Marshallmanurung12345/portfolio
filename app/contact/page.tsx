import Link from "next/link";
import { SectionTitle } from "../components/section-title";
import { contactLinks } from "../data";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-[#f6f1ea]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Contact"
            title="A proper contact page, not a footer afterthought."
            description="Use this page for outreach, collaboration, internship opportunities, or project discussion. It is structured so you can add a contact form later if needed."
          />
        </div>
      </section>

      <section>
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:px-12">
          {contactLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg border border-slate-200 bg-[#fcfaf7] p-8 transition hover:border-slate-300 hover:bg-white"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-4 text-xl font-semibold text-slate-950 break-all">
                {item.value}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

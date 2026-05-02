import { SectionTitle } from "../components/section-title";
import { aboutHighlights, technicalSkills } from "../data";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-[#f6f1ea]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="About"
            title="A cleaner introduction, not just a resume copy."
            description="This page keeps the personal summary concise and useful. It gives context about who you are, how you work, and what kind of technical direction you are building toward."
          />
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
          <div className="rounded-lg border border-slate-200 bg-[#fcfaf7] p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Profile</h3>
            <p className="mt-5 text-base leading-8 text-slate-600">
              I am an Informatics student at Del Institute of Technology with an
              interest in software development that balances implementation,
              structure, and long-term usability. I like building products that
              make workflows clearer and more efficient.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              My work so far spans web applications, mobile development, system
              analysis, teaching support, and technical collaboration. That mix
              matters because it shapes how I think about both code and people.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Highlights</h3>
            <ul className="mt-6 space-y-4">
              {aboutHighlights.map((item) => (
                <li key={item} className="border-l-2 border-rose-200 pl-4 text-sm leading-7 text-slate-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Stack"
            title="Core tools I work with."
            description="This stays compact on purpose. Later you can separate this into frontend, backend, database, and mobile categories."
          />

          <div className="mt-12 flex flex-wrap gap-3">
            {technicalSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-slate-200 bg-[#fcfaf7] px-4 py-3 text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

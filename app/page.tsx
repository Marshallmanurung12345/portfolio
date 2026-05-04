import Link from "next/link";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectShowcase } from "./components/project-showcase";
export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-slate-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.14),_transparent_24%),radial-gradient(circle_at_82%_20%,_rgba(34,197,94,0.14),_transparent_24%),linear-gradient(135deg,#0f172a_0%,#172033_45%,#1e293b_100%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_24%)] opacity-30" />
        <div className="absolute inset-y-0 left-[18%] w-[14%] bg-white/5 blur-[2px]" />
        <div className="absolute inset-y-0 left-[46%] w-[18%] bg-slate-900/18" />
        <div className="absolute bottom-[-14%] right-[6%] h-[24rem] w-[24rem] rounded-full border border-white/10 bg-emerald-200/8 blur-3xl" />
        <div className="absolute right-[10%] top-[18%] hidden h-[26rem] w-[26rem] rounded-full border border-white/12 lg:block" />
        <div className="absolute right-[13%] top-[21%] hidden h-[20rem] w-[20rem] rounded-full border border-emerald-300/14 lg:block" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.8)_0%,rgba(15,23,42,0.58)_42%,rgba(15,23,42,0.3)_100%)]" />

        <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-14 px-6 pb-16 pt-32 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/70">
              Hello
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              My Name Is
              <br />
              <span className="text-rose-500">Marshall Manurung</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Informatics Student, Web Developer, and Mobile App Builder.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/cv-marshall-manurung.pdf"
                className="rounded-md bg-rose-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_60px_rgba(244,63,94,0.28)] transition hover:bg-rose-400"
              >
                View My CV
              </Link>
              <span className="flex items-center text-sm text-slate-400">
                Open resume and supporting profile summary
              </span>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="relative h-[34rem] w-full max-w-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] shadow-[0_30px_120px_rgba(2,6,23,0.42)] backdrop-blur-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/marshall-home.png')" }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_38%),linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.16)_56%,rgba(15,23,42,0.28))]" />
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />

      <ProjectShowcase />

      <AboutSection />

      <ContactSection />
    </main>
  );
}

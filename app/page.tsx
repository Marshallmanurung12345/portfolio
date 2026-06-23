import Image from "next/image";
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
        className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-white flex items-center"
      >
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          
          {/* Left Column - Hero Content */}
          <div className="max-w-3xl flex flex-col justify-center">
            <span className="text-xl font-normal text-slate-500">Hello, I&apos;m</span>
            <h1 className="mt-2 text-6xl font-extrabold tracking-tight text-slate-950 sm:text-7xl md:text-8xl leading-[1.05]">
              Marshall
              <br />
              Manurung
            </h1>
            <p className="mt-6 text-lg font-semibold text-blue-600 md:text-xl">
              Web Developer &amp; Informatics Student
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/cv-marshall-manurung.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-blue-500"
              >
                <svg className="h-4.5 w-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </Link>
              <Link
                href="/#project"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:bg-slate-50 hover:text-slate-900"
              >
                View Projects
                <svg className="h-4.5 w-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Portrait Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[28rem] aspect-[4/5] flex items-center justify-center">
              {/* Subtle background circle shape */}
              <div className="absolute w-[24rem] h-[24rem] sm:w-[28rem] sm:h-[28rem] rounded-full bg-slate-100/40 -z-10" />
              
              {/* Color portrait with bottom fade */}
              <div className="relative w-full h-full overflow-hidden flex items-end">
                <Image
                  src="/marshall-hero-nobg.png"
                  alt="Marshall Manurung portrait"
                  fill
                  priority
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="object-contain object-bottom"
                />
                {/* Bottom gradient fade-out to white background */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
              </div>
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

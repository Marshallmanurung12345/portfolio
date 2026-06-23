"use client";

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactLinks } from "../data";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#project", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  const githubLink = contactLinks.find((link) => link.label === "GitHub")?.href || "https://github.com";
  const linkedinLink = contactLinks.find((link) => link.label === "LinkedIn")?.href || "https://linkedin.com";
  const emailLink = contactLinks.find((link) => link.label === "Email")?.href || "mailto:example@example.com";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 text-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] backdrop-blur-md">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 sm:px-8 md:flex-row lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            Marshall Manurung
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500 md:absolute md:left-1/2 md:-translate-x-1/2">
          {navItems.map((item) => {
            const isActive =
              (pathname === "/" && item.href === "/#home") ||
              (pathname === "/about" && item.href === "/#about") ||
              ((pathname === "/project" || pathname === "/projects") && item.href === "/#project") ||
              (pathname === "/experience" && item.href === "/#experience") ||
              (pathname === "/contact" && item.href === "/#contact");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm font-semibold transition duration-200 hover:text-blue-600 ${
                  isActive
                    ? "text-blue-600 after:absolute after:-bottom-[22px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-600"
                    : "text-slate-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 text-slate-600 md:ml-auto">
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-950 transition-colors"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
            </svg>
          </Link>
          <Link
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-950 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            href={emailLink}
            className="hover:text-slate-950 transition-colors"
            aria-label="Email"
          >
            <svg className="h-5 w-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}


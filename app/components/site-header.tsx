"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/#project", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/95 text-white shadow-[0_14px_40px_rgba(15,23,42,0.18)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 sm:px-8 md:flex-row lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <span className="text-lg font-semibold uppercase tracking-[0.08em] sm:text-xl">
            <span className="text-rose-500">Marshall</span>{" "}
            <span className="text-white">Manurung</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.2em] text-white/72 sm:text-sm lg:gap-x-9">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-white ${
                pathname === "/" && item.href === "/#home" ? "text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/#project", label: "Project" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-30"
          : "sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span
            className={`text-sm font-semibold uppercase tracking-[0.24em] ${
              isHome ? "text-white" : "text-slate-900"
            }`}
          >
            {isHome ? "Marshall Manurung" : "Marshall"}
          </span>
        </Link>

        <nav
          className={`flex flex-wrap items-center gap-5 text-xs font-medium uppercase tracking-[0.2em] sm:text-sm ${
            isHome ? "text-white/72" : "text-slate-500"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${isHome ? "hover:text-white" : "hover:text-slate-900"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

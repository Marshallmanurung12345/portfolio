export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#fafafa]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-12 text-center sm:px-8 lg:px-12">
        <p className="text-xl font-bold tracking-tight text-slate-900">
          <span className="text-rose-500">Marshall</span> Manurung
        </p>
        <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Informatics Student
        </p>
        
        <div className="mt-8 w-full max-w-xs border-t border-slate-200/60 pt-6">
          <p className="text-[11px] font-medium text-slate-400">
            Copyright © 2026 Marshall Manurung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

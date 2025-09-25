import { Leaf } from 'lucide-react'

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100/60 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Leaf className="h-5 w-5 text-emerald-600" />
          EcoLearners
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
          <a className="transition hover:text-emerald-700" href="#features">Features</a>
          <a className="transition hover:text-emerald-700" href="#how">How it works</a>
          <a className="transition hover:text-emerald-700" href="#get-started">Get started</a>
        </nav>
        <div className="hidden sm:block">
          <a href="#get-started" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700">Sign up</a>
        </div>
      </div>
    </header>
  )
}

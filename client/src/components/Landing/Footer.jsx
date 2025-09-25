import React from 'react'
import { Leaf } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-white py-10 text-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-emerald-600" />
          <span className="font-semibold">EcoLearners</span>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-slate-600">
          <a className="transition hover:text-emerald-700" href="#features">Features</a>
          <a className="transition hover:text-emerald-700" href="#how">How it works</a>
          <a className="transition hover:text-emerald-700" href="#get-started">Get started</a>
        </nav>
        <div className="text-slate-500">© {new Date().getFullYear()} EcoLearners</div>
      </div>
    </footer>
  )
}

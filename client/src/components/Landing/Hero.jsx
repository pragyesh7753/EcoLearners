import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Trophy, Trees } from 'lucide-react'

const MotionDiv = motion.div

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-teal-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 sm:pt-36">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200 backdrop-blur">
            <Leaf className="h-4 w-4" /> Learn. Play. Heal the Planet.
          </span>
          <h1 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-6xl">
            EcoLearners — Gamified learning for a greener tomorrow
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Interactive lessons, real-world eco challenges, and school competitions. Earn eco-points, unlock badges, and make sustainability a habit.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#get-started" className="group inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700">
              Start learning now
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-emerald-700 ring-1 ring-emerald-200 transition hover:-translate-y-0.5">
              See how it works
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { node: <Trees className="h-5 w-5 text-emerald-600" />, label: 'Real-world tasks' },
              { node: <Trophy className="h-5 w-5 text-emerald-600" />, label: 'School competitions' },
              { node: <Leaf className="h-5 w-5 text-emerald-600" />, label: 'Eco badges & rewards' },
            ].map(({ node, label }) => (
              <div key={label} className="flex items-center justify-center gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm ring-1 ring-emerald-100 backdrop-blur">
                {node}
                <span className="font-medium text-slate-700">{label}</span>
              </div>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}

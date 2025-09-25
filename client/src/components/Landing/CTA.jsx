import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

export const CTA = () => {
  return (
    <section id="get-started" className="relative border-y border-emerald-100 py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-6">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white p-8 text-center ring-1 ring-emerald-100 sm:p-12"
        >
          <h2 className="text-balance text-3xl font-extrabold sm:text-4xl">Ready to start a greener journey?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">Join thousands of students turning eco-awareness into eco-action — one badge at a time.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-xl bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700">
              Create a free account
            </button>
            <button className="rounded-xl bg-white px-6 py-3 text-emerald-700 ring-1 ring-emerald-200 transition hover:-translate-y-0.5">
              Explore demo
            </button>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Goal, Lightbulb, Plus } from 'lucide-react'

const steps = [
  {
    title: 'Learn',
    desc: 'Explore interactive modules with short lessons, videos, and quizzes.',
    icon: Lightbulb,
  },
  {
    title: 'Do',
    desc: 'Complete weekly real-world eco tasks and log your progress.',
    icon: CheckCircle2,
  },
  {
    title: 'Compete',
    desc: 'Join your school team, climb leaderboards, and unlock rewards.',
    icon: Goal,
  },
]

const MotionDiv = motion.div

export const HowItWorks = () => {
  return (
    <section id="how" className="relative border-t border-emerald-100 bg-gradient-to-b from-white to-emerald-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-extrabold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-slate-600">EcoLearners blends micro-learning with real action and friendly competition.</p>
        </div>

        <div className="relative mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map(({ title, desc, icon }, idx) => (
            <MotionDiv
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative rounded-2xl bg-white p-6 ring-1 ring-emerald-100"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-3 ring-1 ring-emerald-100">
                  {React.createElement(icon, { className: 'h-6 w-6 text-emerald-600' })}
                </div>
                <div className="text-sm font-semibold text-emerald-700">Step {idx + 1}</div>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              {idx < steps.length - 1 && (
                <Plus className="absolute -right-6 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-emerald-400 sm:block" />
              )}
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

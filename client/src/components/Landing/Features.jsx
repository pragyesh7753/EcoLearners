import React from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, BookOpen, Layers3, Medal, Sparkles, Users } from 'lucide-react'

const features = [
  {
    title: 'Interactive Lessons',
    desc: 'Bite-sized, story-driven content on climate, biodiversity, waste and energy.',
    icon: BookOpen,
  },
  {
    title: 'Quests & Challenges',
    desc: 'Real-world eco tasks like tree-planting, waste segregation, and energy audits.',
    icon: Layers3,
  },
  {
    title: 'Eco-Points Tracker',
    desc: 'Earn points, build streaks, and climb school and citywide leaderboards.',
    icon: Medal,
  },
  {
    title: 'Badges & Rewards',
    desc: 'Collect digital badges, get featured on the wall of fame, and unlock perks.',
    icon: BadgeCheck,
  },
  {
    title: 'Team Play',
    desc: 'Form clubs and compete in seasonal eco-challenges between schools.',
    icon: Users,
  },
  {
    title: 'AI-powered Feedback',
    desc: 'Smart hints, quiz explanations, and eco habit suggestions tailored to you.',
    icon: Sparkles,
  },
]

const MotionDiv = motion.div

export const Features = () => {
  return (
    <section id="features" className="relative z-10 border-t border-emerald-100 bg-white/60 py-20 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-extrabold sm:text-4xl">Everything to make learning sustainability fun</h2>
          <p className="mt-3 text-slate-600">Gamification that actually builds real habits and change.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon }) => (
            <MotionDiv
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-emerald-100 transition hover:shadow-xl hover:shadow-emerald-600/5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-3 ring-1 ring-emerald-100">
                  {React.createElement(icon, { className: 'h-6 w-6 text-emerald-600' })}
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
              <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-emerald-100/60 blur-2xl transition group-hover:scale-150"/>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

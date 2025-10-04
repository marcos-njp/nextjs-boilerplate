'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01, y: -3 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}
      className="relative max-w-3xl mx-auto backdrop-blur-sm bg-white/20 dark:bg-zinc-800/20 rounded-2xl p-10 shadow-lg dark:shadow-zinc-950/50 border border-white/20 dark:border-zinc-700/30 hover:bg-white/30 dark:hover:bg-zinc-700/30 transition-all duration-75 hover:shadow-xl dark:hover:shadow-emerald-500/20"
    >
      <h2 className="text-4xl font-semibold mb-8 text-zinc-800 dark:text-zinc-200 bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">About</h2>
      <div className="prose prose-lg prose-zinc dark:prose-invert">
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          With a focus on clean architecture and intuitive design, I specialize in building modern web applications 
          that prioritize user experience and performance. My approach combines technical expertise with 
          creative problem-solving to deliver impactful digital solutions.
        </p>
      </div>
    </motion.section>
  )
}
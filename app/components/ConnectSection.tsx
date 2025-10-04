'use client'

import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'

export default function ConnectSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01, y: -3 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}
      className="relative max-w-3xl mx-auto backdrop-blur-sm bg-white/20 dark:bg-zinc-800/20 rounded-2xl p-10 shadow-lg dark:shadow-zinc-950/50 border border-white/20 dark:border-zinc-700/30 hover:bg-white/30 dark:hover:bg-zinc-700/30 transition-all duration-75 hover:shadow-xl dark:hover:shadow-emerald-500/20"
    >
      <h2 className="text-4xl font-semibold mb-8 text-zinc-800 dark:text-zinc-200 bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">Connect</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed text-lg">
        Available for select projects and collaborations.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SocialLinks />
      </motion.div>
    </motion.section>
  )
}
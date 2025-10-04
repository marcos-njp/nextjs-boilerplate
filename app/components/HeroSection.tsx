'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01, y: -3 }}
      transition={{ duration: 0.1 }}
      className="relative max-w-3xl mx-auto backdrop-blur-sm bg-white/20 dark:bg-zinc-800/20 rounded-2xl p-10 shadow-lg dark:shadow-zinc-950/50 border border-white/20 dark:border-zinc-700/30 hover:bg-white/30 dark:hover:bg-zinc-700/30 transition-all duration-75 hover:shadow-xl dark:hover:shadow-emerald-500/20"
    >
      <div className="grid lg:grid-cols-[1.5fr,1fr] gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <h1 className="text-6xl font-bold tracking-tight leading-tight">
            <motion.span 
              className="block text-zinc-400 dark:text-zinc-500 drop-shadow-sm hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              hello, i am
            </motion.span>
            <motion.span 
              className="block text-zinc-800 dark:text-zinc-200 drop-shadow-md mt-2 bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
               m-njp
            </motion.span>
          </h1>
          <div className="space-y-6">
            <motion.p 
              className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              An aspiring Web Developer passionate about creating clean, efficient, and user-friendly applications.
            </motion.p>
            <motion.div 
              className="text-zinc-600 dark:text-zinc-400 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="flex items-center gap-3 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
                <Image
                  src="/images/spup.png"
                  alt="SPUP Logo"
                  width={50}
                  height={50}
                  className="inline-block"
                />
                Currently an Information Technology Student at St. Paul University Philippines
                
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="relative aspect-square w-full max-w-[320px] mx-auto group"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 shadow-2xl group-hover:shadow-emerald-500/10 transition-shadow duration-500">
            <Image
              src="/images/profile.png"
              alt="Niño Justin Marcos"
              fill
              className="object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
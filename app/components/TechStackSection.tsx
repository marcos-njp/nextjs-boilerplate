'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techStack = [
  { name: 'Python', logo: '/logos/python.png', color: 'from-yellow-400 to-orange-500', size: 78 },
  { name: 'Java', logo: '/logos/java.png', color: 'from-orange-500 to-red-500', size: 78 },
  { name: 'MySQL', logo: '/logos/mysql.png', color: 'from-blue-500 to-indigo-600', size: 78 },
  { name: 'PHP', logo: '/logos/php.png', color: 'from-purple-500 to-indigo-600', size: 78 },
  { name: 'Laravel', logo: '/logos/laravel.png', color: 'from-red-500 to-pink-500', size: 60 },
  { name: 'TypeScript', logo: '/logos/typescript.png', color: 'from-blue-600 to-blue-800', size: 60 },
]

export default function TechStackSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01, y: -3 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}
      className="relative max-w-3xl mx-auto backdrop-blur-sm bg-white/20 dark:bg-zinc-800/20 rounded-2xl p-10 shadow-lg dark:shadow-zinc-950/50 border border-white/20 dark:border-zinc-700/30 hover:bg-white/30 dark:hover:bg-zinc-700/30 transition-all duration-75 hover:shadow-xl dark:hover:shadow-emerald-500/20"
    >
      <h2 className="text-4xl font-semibold mb-8 text-zinc-800 dark:text-zinc-200 bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
        Tech Stack
      </h2>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="group cursor-pointer"
          >
            <div className="relative">
              <div className="w-24 h-24 mx-auto flex items-center justify-center">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={tech.size}
                  height={tech.size}
                  className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                  {tech.name}
                </div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-zinc-800 dark:bg-zinc-200 rotate-45"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center text-zinc-600 dark:text-zinc-400 mt-8 text-lg"
      >
        Technologies I work with to build amazing digital experiences
      </motion.p>
    </motion.section>
  )
}

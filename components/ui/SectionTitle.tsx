'use client'

import { motion, type Variants } from 'framer-motion'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  centered?: boolean
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function SectionTitle({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <motion.p
          variants={itemVariants}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase mb-3"
          style={{ color: '#D98C9A' }}
        >
          <span style={{ color: '#F5B7C5', fontSize: '1.1em' }}>✿</span>
          {eyebrow}
          <span style={{ color: '#F5B7C5', fontSize: '1.1em' }}>✿</span>
        </motion.p>
      )}

      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        style={{ fontFamily: 'var(--font-playfair), serif', color: '#6B4B57' }}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="sakura-gradient-text">{titleHighlight}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base md:text-lg leading-relaxed"
          style={{
            color: '#9E6E78',
            margin: centered ? '0 auto' : undefined,
          }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        variants={itemVariants}
        className={`mt-5 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
      >
        <div className="h-px w-10" style={{ background: '#F5B7C5' }} />
        <span style={{ color: '#D98C9A', fontSize: '1.3rem' }}>🌸</span>
        <div className="h-px w-10" style={{ background: '#F5B7C5' }} />
      </motion.div>
    </motion.div>
  )
}

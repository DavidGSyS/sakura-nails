'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { ChevronDown, Sparkles, Star } from 'lucide-react'

const STATS = [
  { value: '50+',   label: 'Clientas felices' },
  { value: '1 año', label: 'De experiencia' },
  { value: '4.9★',  label: 'Calificación' },
]

const letterVariants: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.04, duration: 0.6, ease: 'easeOut' as const },
  }),
}

const LINE1 = 'Arte en tus'
const LINE2 = 'Manos'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y   = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #FFF8FA 0%, #FCE4EC 35%, #F5B7C5 65%, #D98C9A 100%)',
        }}
      />

      {/* Decorative circles */}
      <div aria-hidden="true">
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #D98C9A, transparent)' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #6B4B57, transparent)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Sakura blossom SVG rings */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[0,72,144,216,288].map((angle, i) => (
              <ellipse
                key={i}
                cx="50" cy="50" rx="12" ry="22"
                fill="#D98C9A"
                transform={`rotate(${angle} 50 50)`}
              />
            ))}
            <circle cx="50" cy="50" r="8" fill="#F5B7C5" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20 w-14 h-14 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[0,72,144,216,288].map((angle, i) => (
              <ellipse key={i} cx="50" cy="50" rx="12" ry="22" fill="#6B4B57" transform={`rotate(${angle} 50 50)`} />
            ))}
            <circle cx="50" cy="50" r="8" fill="#D98C9A" />
          </svg>
        </motion.div>
      </div>

      {/* Hero content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex-1 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left – Text */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 glass"
              >
                <Sparkles size={13} style={{ color: '#D98C9A' }} />
                <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: '#D98C9A' }}>
                  Nail Studio Premium
                </span>
                <Star size={11} style={{ color: '#C9956E' }} fill="#C9956E" />
              </motion.div>

              {/* Animated headline line 1 */}
              <h1
                className="font-bold leading-tight mb-2"
                style={{ fontFamily: 'var(--font-playfair), serif', color: '#6B4B57' }}
                aria-label={`${LINE1} ${LINE2}`}
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {LINE1.split('').map((char, i) => (
                    <motion.span
                      key={`l1-${i}`}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                      style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>

                {/* Line 2 with gradient */}
                <span
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl sakura-gradient-text"
                  aria-hidden="true"
                >
                  {LINE2.split('').map((char, i) => (
                    <motion.span
                      key={`l2-${i}`}
                      custom={LINE1.length + i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                style={{ color: '#9E6E78' }}
              >
                Cada detalle es una obra de arte diseñada especialmente para ti.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#reservar"
                  id="hero-primary-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shimmer-btn"
                >
                  🌸 Reservar Cita
                </a>
                <a
                  href="#servicios"
                  id="hero-secondary-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 glass"
                  style={{ color: '#6B4B57', border: '1.5px solid rgba(217,140,154,0.4)' }}
                >
                  Ver Servicios
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="flex items-center gap-6 mt-10 pt-8 border-t"
                style={{ borderColor: 'rgba(217,140,154,0.25)' }}
              >
                {STATS.map((s, i) => (
                  <div key={i} className={i < STATS.length - 1 ? 'pr-6 border-r' : ''} style={{ borderColor: 'rgba(217,140,154,0.25)' }}>
                    <p className="text-xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif', color: '#6B4B57' }}>
                      {s.value}
                    </p>
                    <p className="text-xs" style={{ color: '#9E6E78' }}>{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right – Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(245,183,197,0.4), transparent)',
                  filter: 'blur(20px)',
                }}
              />

              <div className="relative w-full max-w-md lg:max-w-none">
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 z-20 glass px-3 py-2 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">🌸</span>
                    <div>
                      <p className="text-[10px] font-bold" style={{ color: '#D98C9A' }}>Acrilico Rosa</p>
                      <p className="text-[10px]" style={{ color: '#9E6E78' }}>Exclusive</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge 2 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -right-4 z-20 glass px-3 py-2 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} style={{ color: '#C9956E' }} fill="#C9956E" />
                      ))}
                    </div>
                    <p className="text-[10px] font-bold" style={{ color: '#6B4B57' }}>5.0 Rating</p>
                  </div>
                </motion.div>

                {/* Main image */}
                <div
                  className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:max-w-md rounded-3xl overflow-hidden shadow-2xl"
                  style={{ border: '3px solid rgba(245,183,197,0.4)' }}
                >
                  <Image
                    src="/images/hero-nails.jpeg"
                    alt="Uñas sakura premium — arte y elegancia japonesa"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, transparent 50%, rgba(107,75,87,0.25) 100%)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs tracking-[0.15em] uppercase" style={{ color: '#D98C9A' }}>Descubre</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} style={{ color: '#D98C9A' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

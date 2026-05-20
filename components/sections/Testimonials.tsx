'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Valeria Cervantes',
    avatar: '👩🏻‍🦱',
    role: 'Clienta habitual',
    rating: 5,
    text: 'Simplemente increíble. Vine buscando un servicio de acrílico y superaron mis expectativas. El ambiente del estudio es precioso y todo es súper profesional. ¡Ya no voy a ningún otro lugar!',
    service: 'Acrílico Rosa',
    date: 'Hace 2 semanas',
  },
  {
    id: 't2',
    name: 'Laura Guzmán',
    avatar: '👩🏽‍🦰',
    role: 'Nueva clienta',
    rating: 5,
    text: 'Primera vez aquí y quedé enamorada. Las press on me quedaron perfectas, con una forma que nunca había logrado en otro lugar. El acabado es espejo y duran muchísimo.',
    service: 'Press On Rosa',
    date: 'Hace 1 mes',
  },
  {
    id: 't3',
    name: 'Nathaly Sierra',
    avatar: '👩🏻',
    role: 'Clienta fiel',
    rating: 5,
    text: 'Llevo 1 año viniendo a Sakura y cada visita es mejor que la anterior. La semipermanente dura 2 meses sin astillarse. La atención es personal y realmente se preocupan por la salud de tus uñas.',
    service: 'Semipermanente Rosa',
    date: 'Hace 3 semanas',
  },
  {
    id: 't4',
    name: 'Maria',
    avatar: '👩🏾‍🦱',
    role: 'Manicurista',
    rating: 5,
    text: 'Como manicurista, soy muy exigente. Sakura es el único estudio que ha podido recrear exactamente los diseños que traigo de referencia. La atención al detalle es de otro nivel.',
    service: 'Nail Art Premium',
    date: 'Hace 1 semana',
  },
  {
    id: 't5',
    name: 'Liceth Recuero',
    avatar: '👩🏼',
    role: 'Clienta fiel',
    rating: 5,
    text: 'Mis uñas estaban súper dañadas por otros lugares, pero después de un tratamiento en Sakura, mis uñas están más fuertes que nunca. Además, el semipermanente me duró 2 meses sin ningún problema.',
    service: 'Semipermanente',
    date: 'Hace 2 meses',
  },
  {
    id: 't6',
    name: 'Yorleidis',
    avatar: '👩🏾‍🦱',
    role: 'Clienta premium',
    rating: 5,
    text: 'Vine por un diseño nupcial exclusivo y quedé impresionada. El nivel de personalización y detalle que ofrecen es increíble. Hicieron que mis uñas fueran la sensación en la fiesta.',
    service: 'Press On Personalizado',
    date: 'Hace 1 mes',
  },
]

export default function Testimonials() {
  const [current, setCurrent]   = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, amount: 0.3 })

  const paginate = (newDir: number) => {
    setDirection(newDir)
    setCurrent((prev) => (prev + newDir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
    }),
  }

  const t = TESTIMONIALS[current]

  return (
    <section
      id="testimonios"
      ref={containerRef}
      className="section-padding relative overflow-hidden"
      style={{ background: '#FFF8FA' }}
      aria-labelledby="testimonials-heading"
    >
      {/* Background decorations */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 10% 50%, #FCE4EC 0%, transparent 40%), radial-gradient(circle at 90% 50%, #F5B7C5 0%, transparent 40%)',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Lo que dicen"
          title="Nuestras"
          titleHighlight="Clientas"
          subtitle="La satisfacción de nuestras clientas es nuestra mayor recompensa."
        />

        {/* Main testimonial card */}
        <div className="relative min-h-[320px] flex items-center justify-center mb-8">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={t.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full"
            >
              <div
                className="relative rounded-3xl p-8 md:p-10 max-w-3xl mx-auto"
                style={{
                  background: 'rgba(255,248,250,0.9)',
                  border: '1.5px solid rgba(245,183,197,0.3)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 20px 60px rgba(217,140,154,0.12)',
                }}
              >
                {/* Quote icon */}
                <div
                  className="absolute -top-4 left-8 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #D98C9A, #F5B7C5)' }}
                >
                  <Quote size={18} color="white" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} style={{ color: '#C9956E' }} fill="#C9956E" />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  style={{
                    color: '#6B4B57',
                    fontFamily: 'var(--font-lato), sans-serif',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ background: 'linear-gradient(135deg, #FCE4EC, #F5B7C5)' }}
                      aria-hidden="true"
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: '#6B4B57', fontFamily: 'var(--font-playfair), serif' }}>
                        {t.name}
                      </p>
                      <p className="text-xs" style={{ color: '#9E6E78' }}>{t.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ background: 'rgba(245,183,197,0.15)', color: '#D98C9A', border: '1px solid rgba(245,183,197,0.3)' }}
                    >
                      ✿ {t.service}
                    </span>
                    <span className="text-[10px] mt-1" style={{ color: '#9E6E78' }}>{t.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            id="testimonial-prev"
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: 'rgba(245,183,197,0.15)',
              border: '1.5px solid rgba(245,183,197,0.3)',
              color: '#D98C9A',
            }}
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Seleccionar testimonio">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  background: i === current
                    ? 'linear-gradient(90deg, #D98C9A, #F5B7C5)'
                    : 'rgba(217,140,154,0.25)',
                }}
                role="tab"
                aria-selected={i === current}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            id="testimonial-next"
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: 'rgba(245,183,197,0.15)',
              border: '1.5px solid rgba(245,183,197,0.3)',
              color: '#D98C9A',
            }}
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mini cards row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-3 gap-3 mt-10"
          aria-hidden="true"
        >
          {TESTIMONIALS.slice(0, 3).map((item, i) => (
            <button
              key={item.id}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className="p-3 rounded-2xl text-left transition-all duration-200 hover:scale-105"
              style={{
                background: current === i ? 'rgba(245,183,197,0.15)' : 'rgba(255,248,250,0.6)',
                border: current === i ? '1.5px solid rgba(217,140,154,0.4)' : '1.5px solid rgba(245,183,197,0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-lg">{item.avatar}</span>
                <div>
                  <p className="text-xs font-bold" style={{ color: '#6B4B57' }}>{item.name.split(' ')[0]}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={8} style={{ color: '#C9956E' }} fill="#C9956E" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[10px] line-clamp-2" style={{ color: '#9E6E78' }}>
                {item.text.substring(0, 60)}...
              </p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

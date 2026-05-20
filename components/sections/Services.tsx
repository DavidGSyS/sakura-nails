'use client'

import { motion, type Variants } from 'framer-motion'
import { Sparkles, Footprints, Palette, Clock, Heart } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

const SERVICES = [
  {
    id: 'semipermanente',
    icon: Heart,
    emoji: '💅',
    title: 'Manicura Semipermanente',
    description: 'Esmaltado semipermanente de larga duración, sin daño en la uña natural.',
    price: 'Desde $40k',
    duration: '45 min',
    tag: 'Más pedido',
    color: '#F5B7C5',
  },
  {
    id: 'presson',
    icon: Sparkles,
    emoji: '✨',
    title: 'Press On',
    description: 'Accesorios de uñas reutilizables, fáciles de aplicar y remover. ¡Belleza instantánea sin compromiso!',
    price: 'Desde $55k',
    duration: '60 min',
    tag: 'Popular',
    color: '#D98C9A',
  },
  {
    id: 'acrilico',
    icon: Palette,
    emoji: '🌸',
    title: 'Acrilico y Nail Art',
    description: 'Diseños personalizados: sakura, geométricos, acuarela, minimalistas y más.',
    price: 'Desde $65k',
    duration: '120 min',
    tag: 'Premium',
    color: '#C9956E',
  },
  {
    id: 'pies',
    icon: Footprints,
    emoji: '🦶',
    title: 'Semipermanente en Pies',
    description: 'Esmaltado semipermanente para pies, ideal para lucir en cualquier ocasión.',
    price: 'Desde $35k',
    duration: '60 min',
    tag: 'Exclusivo',
    color: '#6B4B57',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="section-padding relative overflow-hidden"
      style={{ background: '#FFF8FA' }}
      aria-labelledby="services-heading"
    >
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #FCE4EC 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, #F5B7C5 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Lo que ofrecemos"
          title="Nuestros"
          titleHighlight="Servicios"
          subtitle="Desde la manicura más clásica hasta el nail art más elaborado, cada servicio es realizado con pasión y precisión."
        />

        <motion.div
          id="services-heading"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                id={`service-${service.id}`}
                variants={cardVariants}
                role="listitem"
                className="group relative rounded-2xl p-6 cursor-default transition-all duration-400 hover:-translate-y-2"
                style={{
                  background: 'rgba(255,248,250,0.8)',
                  border: '1px solid rgba(245,183,197,0.3)',
                  backdropFilter: 'blur(8px)',
                }}
                whileHover={{
                  boxShadow: '0 20px 60px rgba(217,140,154,0.18)',
                  borderColor: 'rgba(217,140,154,0.5)',
                }}
              >
                {/* Tag badge */}
                {service.tag && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(245,183,197,0.2)',
                      color: '#D98C9A',
                      border: '1px solid rgba(217,140,154,0.3)',
                    }}
                  >
                    {service.tag}
                  </span>
                )}

                {/* Icon circle */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl"
                  style={{
                    background: `linear-gradient(135deg, rgba(245,183,197,0.2), rgba(252,228,236,0.4))`,
                    border: `1px solid rgba(245,183,197,0.3)`,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {service.emoji}
                </motion.div>

                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: 'var(--font-playfair), serif',
                    color: '#6B4B57',
                  }}
                >
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed mb-5" style={{ color: '#9E6E78' }}>
                  {service.description}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(245,183,197,0.2)' }}>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} style={{ color: '#D98C9A' }} />
                    <span className="text-xs" style={{ color: '#9E6E78' }}>{service.duration}</span>
                  </div>
                  <span
                    className="text-base font-bold"
                    style={{
                      fontFamily: 'var(--font-playfair), serif',
                      color: '#D98C9A',
                    }}
                  >
                    {service.price}
                  </span>
                </div>

                {/* Hover glow line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                  style={{ background: 'linear-gradient(90deg, transparent, #D98C9A, transparent)' }}
                />
              </motion.article>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#reservar"
            id="services-cta-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shimmer-btn"
          >
            🌸 Reservar mi cita
          </a>
        </motion.div>
      </div>
    </section>
  )
}

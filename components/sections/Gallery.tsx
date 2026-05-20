'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SectionTitle from '@/components/ui/SectionTitle'
import { ZoomIn } from 'lucide-react'

const CATEGORIES = ['Todas', 'Semipermanente', 'Press On', 'Acrílico', 'Pies']

const GALLERY_ITEMS = [
  {
    id: 'g1',
    src: '/images/u%C3%B1as/1.jpeg',
    alt: 'Press on rosa brillante',
    category: 'Press On',
    title: 'Press On Rosa Brillante',
    tall: true,
  },
  {
    id: 'g2',
    src: '/images/u%C3%B1as/2.jpeg',
    alt: 'Acrílico rosa clásico con diseño de flor',
    category: 'Acrílico',
    title: 'Acrílico Rosa Clásico',
    tall: false,
  },
  {
    id: 'g3',
    src: '/images/u%C3%B1as/3.jpeg',
    alt: 'Acrílico rosa dorado con diseño elegante',
    category: 'Acrílico',
    title: 'Acrílico Rosa Dorado',
    tall: false,
  },
  {
    id: 'g4',
    src: '/images/u%C3%B1as/4.jpeg',
    alt: 'Press on rosa con diseño de flor',
    category: 'Press On',
    title: 'Press On Rosa con Nail Art',
    tall: true,
  },
  {
    id: 'g5',
    src: '/images/u%C3%B1as/5.jpeg',
    alt: 'Press on rosa con diseño de dalmata',
    category: 'Press On',
    title: 'Press On Rosa Dalmata',
    tall: false,
  },
  {
    id: 'g6',
    src: '/images/u%C3%B1as/6.jpeg',
    alt: 'Acrílico personalizado',
    category: 'Acrílico',
    title: 'Acrílico Personalizado',
    tall: false,
  },
  {
    id: 'g7',
    src: '/images/u%C3%B1as/7.jpeg',
    alt: 'Uñas acrílicas esculpidas',
    category: 'Acrílico',
    title: 'Esculpido Premium',
    tall: true,
  },
  {
    id: 'g8',
    src: '/images/u%C3%B1as/8.jpeg',
    alt: 'Press on con diseño elegante',
    category: 'Press On',
    title: 'Press On Elegante',
    tall: false,
  },
  {
    id: 'g9',
    src: '/images/u%C3%B1as/9.jpeg',
    alt: 'Acrílico con acabado espejo',
    category: 'Acrílico',
    title: 'Acabado Espejo',
    tall: false,
  },
  {
    id: 'g10',
    src: '/images/u%C3%B1as/10.jpeg',
    alt: 'Press on con diseño de una pieza',
    category: 'Press On',
    title: 'Press On One Piece',
    tall: false,
  },
  {
    id: 'g11',
    src: '/images/u%C3%B1as/11.jpeg',
    alt: 'Press on verde fantasía',
    category: 'Press On',
    title: 'Press On Verde Fantasía',
    tall: true,
  },
  {
    id: 'g12',
    src: '/images/u%C3%B1as/12.jpeg',
    alt: 'Press on rosa con diseño delicado',
    category: 'Press On',
    title: 'Press On Rosa',
    tall: false,
  },
  {
    id: 'g13',
    src: '/images/u%C3%B1as/13.jpeg',
    alt: 'Acrílico rosa pastel con diseño de flor',
    category: 'Acrílico',
    title: 'Acrilico Rosa Pastel',
    tall: false,
  },
  {
    id: 'g14',
    src: '/images/u%C3%B1as/14.jpeg',
    alt: 'Semipermanente rosa pastel con diseño delicado',
    category: 'Semipermanente',
    title: 'Semipermanente Rosa Pastel',
    tall: false,
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [lightboxIndex, setLightboxIndex]   = useState(-1)
  const [hoveredId, setHoveredId]           = useState<string | null>(null)

  const filtered = activeCategory === 'Todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  const lightboxSlides = filtered.map((item) => ({ src: item.src, alt: item.alt }))

  return (
    <section
      id="galeria"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FFF8FA 0%, #FCE4EC 40%, #FFF8FA 100%)',
      }}
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nuestro trabajo"
          title="Galería de"
          titleHighlight="Diseños"
          subtitle="Cada uña es un lienzo. Explora nuestra colección de arte premium."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filtrar galería">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, #D98C9A, #F5B7C5)'
                  : 'rgba(245,183,197,0.12)',
                color:  activeCategory === cat ? 'white' : '#9E6E78',
                border: activeCategory === cat ? 'none' : '1px solid rgba(245,183,197,0.3)',
                boxShadow: activeCategory === cat ? '0 4px 15px rgba(217,140,154,0.4)' : 'none',
                fontFamily: 'var(--font-lato), sans-serif',
              }}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="masonry-grid"
            id="gallery-heading"
          >
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="masonry-item"
              >
                <button
                  id={`gallery-item-${item.id}`}
                  className="relative w-full rounded-2xl overflow-hidden cursor-pointer block group"
                  style={{
                    aspectRatio: item.tall ? '3/4' : '4/3',
                    border: '1.5px solid rgba(245,183,197,0.2)',
                  }}
                  onClick={() => setLightboxIndex(index)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  aria-label={`Ver imagen: ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <AnimatePresence>
                    {hoveredId === item.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                        style={{ background: 'rgba(107,75,87,0.6)', backdropFilter: 'blur(4px)' }}
                      >
                        <motion.div
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ background: 'rgba(255,248,250,0.2)', border: '1.5px solid rgba(245,183,197,0.5)' }}
                        >
                          <ZoomIn size={18} color="white" />
                        </motion.div>
                        <p
                          className="text-sm font-semibold text-white text-center px-2"
                          style={{ fontFamily: 'var(--font-playfair), serif' }}
                        >
                          {item.title}
                        </p>
                        <span
                          className="text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                          style={{ background: 'rgba(245,183,197,0.3)', color: '#FCE4EC' }}
                        >
                          {item.category}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={lightboxSlides}
          styles={{
            container: { backgroundColor: 'rgba(107,75,87,0.95)' },
          }}
        />

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm mt-10"
          style={{ color: '#9E6E78' }}
        >
          ¿Te enamoraste de algún diseño?{' '}
          <a
            href="#reservar"
            className="font-bold underline underline-offset-2 transition-colors"
            style={{ color: '#D98C9A' }}
          >
            Reserva tu cita
          </a>
          {' '}y lo recreamos para ti.
        </motion.p>
      </div>
    </section>
  )
}

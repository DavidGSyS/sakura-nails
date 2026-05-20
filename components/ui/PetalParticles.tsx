'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

interface Petal {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  rotation: number
  drift: number
  opacity: number
}

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 14 + 8,
    delay: Math.random() * 12,
    duration: Math.random() * 8 + 8,
    rotation: Math.random() * 360,
    drift: (Math.random() - 0.5) * 80,
    opacity: Math.random() * 0.5 + 0.3,
  }))
}

const PETALS = generatePetals(20)

const petalColors = [
  'radial-gradient(ellipse, #F5B7C5 0%, #D98C9A 100%)',
  'radial-gradient(ellipse, #FCE4EC 0%, #F5B7C5 100%)',
  'radial-gradient(ellipse, #D98C9A 0%, #6B4B57 100%)',
  'radial-gradient(ellipse, #FFF8FA 0%, #F5B7C5 100%)',
]

export default function PetalParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
    >
      {PETALS.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-5%',
            width: petal.size,
            height: petal.size,
            background: petalColors[petal.id % petalColors.length],
            borderRadius: '50% 0 50% 0',
            opacity: petal.opacity,
          }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: [petal.rotation, petal.rotation + 540],
            x: [0, petal.drift],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  )
}

'use client'

import dynamic from 'next/dynamic'

const PetalParticles = dynamic(
  () => import('@/components/ui/PetalParticles'),
  { ssr: false }
)

export default function PetalParticlesWrapper() {
  return <PetalParticles />
}

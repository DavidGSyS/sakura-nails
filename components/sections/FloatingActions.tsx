'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const WHATSAPP_NUMBER = '573005361330'
const INSTAGRAM_HANDLE = 'mochitoooo_sck'

export default function FloatingActions() {
  const [hovered, setHovered] = useState<'wa' | 'ig' | null>(null)

  return (
    <div
      className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3"
      role="complementary"
      aria-label="Acciones rápidas de contacto"
    >
      {/* Instagram */}
      <div className="relative flex items-center gap-2">
        <AnimatePresence>
          {hovered === 'ig' && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white whitespace-nowrap shadow-lg pointer-events-none"
              style={{
                background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              }}
            >
              @{INSTAGRAM_HANDLE}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.a
          href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
          id="floating-instagram-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Síguenos en Instagram"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
          style={{
            background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
          }}
          onHoverStart={() => setHovered('ig')}
          onHoverEnd={() => setHovered(null)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.92 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
        >
          <InstagramIcon size={20} />
        </motion.a>
      </div>

      {/* WhatsApp */}
      <div className="relative flex items-center gap-2">
        <AnimatePresence>
          {hovered === 'wa' && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white whitespace-nowrap shadow-lg pointer-events-none"
              style={{ background: '#25D366' }}
            >
              ¡Escríbenos! 💬
            </motion.span>
          )}
        </AnimatePresence>

        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me gustaría saber más sobre sus servicios.`}
          id="floating-whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contáctanos por WhatsApp"
          className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl"
          style={{ background: '#25D366' }}
          onHoverStart={() => setHovered('wa')}
          onHoverEnd={() => setHovered(null)}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Pulse rings */}
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: 'rgba(37,211,102,0.4)' }}
            animate={{ scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            aria-hidden="true"
          />
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: 'rgba(37,211,102,0.25)' }}
            animate={{ scale: [1, 2.1, 2.1], opacity: [0.4, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
            aria-hidden="true"
          />
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </div>
  )
}

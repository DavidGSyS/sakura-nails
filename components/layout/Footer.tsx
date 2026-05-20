'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Phone, Clock, Heart } from 'lucide-react'

const QUICK_LINKS = [
  { href: '#inicio',      label: 'Inicio' },
  { href: '#servicios',   label: 'Servicios' },
  { href: '#galeria',     label: 'Galería' },
  { href: '#reservar',    label: 'Reservar Cita' },
  { href: '#testimonios', label: 'Testimonios' },
]

const SERVICES_LINKS = [
  'Manicura Semipermanente',
  'Press On',
  'Acrílico y Nail Art',
  'Semipermanente en Pies',
]

const HOURS = [
  { day: 'Lunes – Viernes', time: '9:00 am – 7:00 pm' },
  { day: 'Sábado',          time: '9:00 am – 6:00 pm' },
  { day: 'Domingo',         time: '10:00 am – 3:00 pm' },
]

const WHATSAPP = 'https://wa.me/573005361330'
const INSTAGRAM = 'https://instagram.com/mochitoooo_sck'

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #6B4B57 0%, #4a3040 60%, #2d1f29 100%)' }}
      role="contentinfo"
    >
      {/* Decorative top border */}
      <div className="h-1 w-full sakura-gradient" />

      {/* Petal decorations */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {['10%', '35%', '60%', '85%'].map((left, i) => (
          <div
            key={i}
            className="absolute opacity-5 text-8xl select-none"
            style={{ left, top: i % 2 === 0 ? '10%' : '60%' }}
          >
            🌸
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="relative w-[80px] h-[80px] rounded-full overflow-hidden shadow-xl flex-shrink-0"
                style={{
                  outline: '3px solid #F5B7C5',
                  outlineOffset: '3px',
                  boxShadow: '0 0 25px rgba(245, 183, 197, 0.35), 0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <Image src="/images/logo.jpeg" alt="Sakura Nails" fill className="object-cover" sizes="80px" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  Sakura
                </p>
                <p className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: '#F5B7C5' }}>
                  Nails Studio
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(252,228,236,0.75)' }}>
              Arte y elegancia en cada detalle, Transformamos tus uñas en obras de arte.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-link"
                className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-300 hover:scale-110"
                style={{ background: '#25D366' }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-300 hover:scale-110"
                style={{
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                }}
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="text-sm font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: '#F5B7C5' }}
            >
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white flex items-center gap-2 group"
                    style={{ color: 'rgba(252,228,236,0.7)' }}
                  >
                    <span className="w-3 h-px transition-all duration-300 group-hover:w-5" style={{ background: '#D98C9A' }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-sm font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: '#F5B7C5' }}
            >
              Servicios
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {SERVICES_LINKS.map((service) => (
                <li key={service}>
                  <span
                    className="text-sm flex items-center gap-2"
                    style={{ color: 'rgba(252,228,236,0.7)' }}
                  >
                    <span style={{ color: '#D98C9A', fontSize: '0.7rem' }}>✿</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3
              className="text-sm font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: '#F5B7C5' }}
            >
              Contacto & Horarios
            </h3>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: '#D98C9A' }} />
                <span className="text-sm" style={{ color: 'rgba(252,228,236,0.7)' }}>
                  Barrio Emmanuel <br />Al lado de la panaderia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" style={{ color: '#D98C9A' }} />
                <a
                  href="tel:+573005361330"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(252,228,236,0.7)' }}
                >
                  +57 300 536 1330
                </a>
              </div>
            </div>

            <h4
              className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase mb-3"
              style={{ color: '#F5B7C5' }}
            >
              <Clock size={12} /> Horarios
            </h4>
            <ul className="flex flex-col gap-2" role="list">
              {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between text-xs gap-4">
                  <span style={{ color: 'rgba(252,228,236,0.6)' }}>{h.day}</span>
                  <span style={{ color: 'rgba(252,228,236,0.9)' }}>{h.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: 'rgba(245,183,197,0.15)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(252,228,236,0.4)' }}>
            © {new Date().getFullYear()} Sakura Nails Studio. Todos los derechos reservados.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'rgba(252,228,236,0.4)' }}>
            Hecho por David Guzmán <Heart size={10} style={{ color: '#F5B7C5' }} fill="#F5B7C5" />
          </p>
        </div>
      </div>
    </footer>
  )
}

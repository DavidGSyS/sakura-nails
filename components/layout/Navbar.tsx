'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#inicio',      label: 'Inicio' },
  { href: '#servicios',   label: 'Servicios' },
  { href: '#galeria',     label: 'Galería' },
  { href: '#reservar',    label: 'Reservar' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto',    label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeLink, setActiveLink] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-sm py-2' : 'py-4 bg-transparent'
        }`}
        style={{ borderBottom: scrolled ? '1px solid rgba(245,183,197,0.2)' : 'none' }}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between"
            aria-label="Navegación principal"
          >
            {/* Logo */}
            <Link
              href="#inicio"
              className="flex items-center gap-3 group"
              aria-label="Sakura Nails Studio - Ir al inicio"
              onClick={() => handleNavClick('#inicio')}
            >
              <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden ring-[3px] ring-sakura-blush transition-all duration-300 group-hover:ring-4 shadow-lg">
                <Image
                  src="/images/logo.jpeg"
                  alt="Sakura Nails Studio Logo"
                  fill
                  className="object-cover"
                  sizes="64px"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-2xl sm:text-3xl font-bold tracking-wide"
                  style={{
                    fontFamily: 'var(--font-playfair), serif',
                    color: '#6B4B57',
                  }}
                >
                  Sakura
                </span>
                <span
                  className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium"
                  style={{ color: '#D98C9A' }}
                >
                  Nails Studio
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full"
                    style={{
                      color: activeLink === link.href ? '#D98C9A' : '#6B4B57',
                      fontFamily: 'var(--font-lato), sans-serif',
                    }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {activeLink === link.href && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'rgba(245,183,197,0.15)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#reservar"
                id="nav-cta-btn"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg shimmer-btn"
                style={{ fontFamily: 'var(--font-lato), sans-serif' }}
              >
                🌸 Reservar Cita
              </a>

              {/* Mobile Menu Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-full transition-colors"
                style={{ color: '#6B4B57', background: menuOpen ? 'rgba(245,183,197,0.15)' : 'transparent' }}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col shadow-2xl"
              style={{
                background: 'rgba(255,248,250,0.97)',
                borderLeft: '1px solid rgba(245,183,197,0.3)',
              }}
              role="dialog"
              aria-label="Menú de navegación"
            >
              <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: 'rgba(245,183,197,0.2)' }}>
                <span className="font-bold text-lg" style={{ fontFamily: 'var(--font-playfair), serif', color: '#6B4B57' }}>
                  Menú
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full"
                  style={{ color: '#D98C9A' }}
                  aria-label="Cerrar menú"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 p-6">
                <ul className="flex flex-col gap-1" role="list">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
                        style={{
                          color: activeLink === link.href ? '#D98C9A' : '#6B4B57',
                          background: activeLink === link.href ? 'rgba(245,183,197,0.12)' : 'transparent',
                          fontFamily: 'var(--font-lato), sans-serif',
                        }}
                      >
                        <span style={{ color: '#F5B7C5' }}>✿</span>
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="p-6 border-t" style={{ borderColor: 'rgba(245,183,197,0.2)' }}>
                <a
                  href="#reservar"
                  onClick={() => handleNavClick('#reservar')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold text-white shimmer-btn"
                >
                  🌸 Reservar Cita
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

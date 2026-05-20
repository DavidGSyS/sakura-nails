'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { CalendarDays, Clock, User, Phone, ChevronRight, ChevronLeft, CheckCircle2, MessageCircle } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

const WHATSAPP_NUMBER = '573005361330'

const SERVICES = [
  { id: 'semipermanente', label: 'Manicura Semipermanente', price: '$40k', duration: '45 min', emoji: '💅' },
  { id: 'presson',        label: 'Press On',                price: '$55k', duration: '60 min', emoji: '✨' },
  { id: 'acrilico',       label: 'Acrilico y Nail Art',     price: '$65k', duration: '120 min', emoji: '🌸' },
  { id: 'pies',           label: 'Semipermanente en Pies',  price: '$35k', duration: '60 min', emoji: '🦶' },
]

const TIME_SLOTS = [
  '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
  '1:00 pm', '2:00 pm',  '3:00 pm',  '4:00 pm',
  '5:00 pm', '6:00 pm',
]

function getTodayString() {
  return new Date().toISOString().split('T')[0]
}

const STEPS = ['Servicio', 'Fecha & Hora', 'Tus datos']

export default function Booking() {
  const [step,        setStep]        = useState(0)
  const [service,     setService]     = useState('')
  const [date,        setDate]        = useState('')
  const [timeSlot,    setTimeSlot]    = useState('')
  const [name,        setName]        = useState('')
  const [phone,       setPhone]       = useState('')
  const [notes,       setNotes]       = useState('')
  const [submitted,   setSubmitted]   = useState(false)

  const selectedService = SERVICES.find((s) => s.id === service)

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      toast.error('Por favor completa tu nombre y teléfono.')
      return
    }
    const msg = encodeURIComponent(
      `Hola Sakura Nails! Me gustaria reservar una cita:\n\n` +
      `Servicio: ${selectedService?.label}\n` +
      `Fecha: ${date}\n` +
      `Hora: ${timeSlot}\n` +
      `Nombre: ${name}\n` +
      `Telefono: ${phone}` +
      (notes ? `\nNotas: ${notes}` : '') +
      `\n\nGracias!`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener')
    setSubmitted(true)
    toast.success('¡Redirigiendo a WhatsApp! 🌸')
  }

  const canAdvance = [
    !!service,
    !!date && !!timeSlot,
    true,
  ][step]

  if (submitted) {
    return (
      <section id="reservar" className="section-padding" style={{ background: '#FFF8FA' }}>
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #FCE4EC, #F5B7C5)' }}>
              <CheckCircle2 size={44} style={{ color: '#D98C9A' }} />
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair), serif', color: '#6B4B57' }}>
              ¡Solicitud enviada! 🌸
            </h2>
            <p className="mb-6" style={{ color: '#9E6E78' }}>
              Te esperamos en WhatsApp para confirmar tu cita. ¡Nos vemos pronto!
            </p>
            <button
              onClick={() => { setSubmitted(false); setStep(0); setService(''); setDate(''); setTimeSlot(''); setName(''); setPhone(''); setNotes('') }}
              className="px-6 py-3 rounded-full text-sm font-bold text-white shimmer-btn"
            >
              Hacer otra reserva
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="reservar"
      className="section-padding"
      style={{
        background: 'linear-gradient(160deg, #FFF8FA 0%, #FCE4EC 50%, #FFF8FA 100%)',
      }}
      aria-labelledby="booking-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Agenda tu visita"
          title="Reserva tu"
          titleHighlight="Cita"
          subtitle="En solo 3 pasos, agenda tu próxima transformación. Te contactaremos por WhatsApp para confirmar."
        />

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-0 mb-10" aria-label="Pasos del formulario">
          {STEPS.map((label, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5">
                <motion.div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                  style={{
                    background: i <= step ? 'linear-gradient(135deg, #D98C9A, #F5B7C5)' : 'rgba(245,183,197,0.15)',
                    color: i <= step ? 'white' : '#9E6E78',
                    border: i === step ? '2px solid #D98C9A' : '2px solid transparent',
                    boxShadow: i === step ? '0 0 0 4px rgba(217,140,154,0.2)' : 'none',
                  }}
                  layout
                >
                  {i < step ? <CheckCircle2 size={16} /> : i + 1}
                </motion.div>
                <span className="text-[10px] font-medium hidden sm:block" style={{ color: i === step ? '#D98C9A' : '#9E6E78' }}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="w-12 sm:w-20 h-px mx-1 sm:mx-2 mb-5" style={{ background: i < step ? '#D98C9A' : 'rgba(245,183,197,0.3)' }} />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div
          className="rounded-3xl shadow-xl p-6 sm:p-8"
          style={{
            background: 'rgba(255,248,250,0.9)',
            border: '1.5px solid rgba(245,183,197,0.3)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <AnimatePresence mode="wait">
            {/* ── Step 0: Choose service ── */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: '#6B4B57', fontFamily: 'var(--font-playfair), serif' }}>
                  <CalendarDays size={18} style={{ color: '#D98C9A' }} /> ¿Qué servicio deseas?
                </h3>
                <p className="text-sm mb-5" style={{ color: '#9E6E78' }}>Selecciona el servicio que más se adapta a ti.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Seleccionar servicio">
                  {SERVICES.map((s) => (
                    <motion.button
                      key={s.id}
                      id={`service-option-${s.id}`}
                      onClick={() => setService(s.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all duration-200"
                      style={{
                        background: service === s.id ? 'rgba(217,140,154,0.12)' : 'rgba(245,183,197,0.06)',
                        border: service === s.id ? '1.5px solid #D98C9A' : '1.5px solid rgba(245,183,197,0.25)',
                      }}
                      role="radio"
                      aria-checked={service === s.id}
                    >
                      <span className="text-2xl">{s.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate" style={{ color: '#6B4B57' }}>{s.label}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-bold" style={{ color: '#D98C9A' }}>{s.price}</span>
                          <span className="text-[10px]" style={{ color: '#9E6E78' }}>• {s.duration}</span>
                        </div>
                      </div>
                      {service === s.id && (
                        <CheckCircle2 size={16} style={{ color: '#D98C9A', flexShrink: 0 }} />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Step 1: Date & Time ── */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: '#6B4B57', fontFamily: 'var(--font-playfair), serif' }}>
                  <Clock size={18} style={{ color: '#D98C9A' }} /> Elige fecha y horario
                </h3>
                <p className="text-sm mb-5" style={{ color: '#9E6E78' }}>
                  Servicio: <strong style={{ color: '#D98C9A' }}>{selectedService?.label}</strong>
                </p>

                {/* Date picker */}
                <label className="block mb-4">
                  <span className="text-xs font-bold tracking-wide uppercase mb-1.5 block" style={{ color: '#9E6E78' }}>
                    Fecha preferida
                  </span>
                  <input
                    id="booking-date"
                    type="date"
                    min={getTodayString()}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-sakura-rose"
                    style={{
                      background: 'rgba(245,183,197,0.08)',
                      border: '1.5px solid rgba(245,183,197,0.35)',
                      color: '#6B4B57',
                    }}
                  />
                </label>

                {/* Time slots */}
                <div>
                  <span className="text-xs font-bold tracking-wide uppercase mb-2.5 block" style={{ color: '#9E6E78' }}>
                    Horario disponible
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2" role="radiogroup" aria-label="Seleccionar horario">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        id={`time-slot-${slot.replace(/[:\s]/g, '-')}`}
                        onClick={() => setTimeSlot(slot)}
                        className="py-2.5 rounded-xl text-xs font-medium transition-all duration-200 hover:scale-105"
                        style={{
                          background: timeSlot === slot ? 'linear-gradient(135deg, #D98C9A, #F5B7C5)' : 'rgba(245,183,197,0.1)',
                          color: timeSlot === slot ? 'white' : '#9E6E78',
                          border: timeSlot === slot ? 'none' : '1px solid rgba(245,183,197,0.25)',
                          boxShadow: timeSlot === slot ? '0 4px 12px rgba(217,140,154,0.35)' : 'none',
                        }}
                        role="radio"
                        aria-checked={timeSlot === slot}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Step 2: Personal info ── */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: '#6B4B57', fontFamily: 'var(--font-playfair), serif' }}>
                  <User size={18} style={{ color: '#D98C9A' }} /> Tus datos de contacto
                </h3>

                {/* Summary */}
                <div
                  className="flex flex-wrap gap-2 mb-5 p-3 rounded-xl"
                  style={{ background: 'rgba(245,183,197,0.1)', border: '1px solid rgba(245,183,197,0.25)' }}
                >
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(217,140,154,0.15)', color: '#D98C9A' }}>
                    {selectedService?.emoji} {selectedService?.label}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(217,140,154,0.15)', color: '#D98C9A' }}>
                    📅 {date}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(217,140,154,0.15)', color: '#D98C9A' }}>
                    ⏰ {timeSlot}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="block">
                    <span className="text-xs font-bold tracking-wide uppercase mb-1.5 block" style={{ color: '#9E6E78' }}>
                      <User size={11} className="inline mr-1" />Nombre completo *
                    </span>
                    <input
                      id="booking-name"
                      type="text"
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(245,183,197,0.08)',
                        border: '1.5px solid rgba(245,183,197,0.35)',
                        color: '#6B4B57',
                      }}
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-bold tracking-wide uppercase mb-1.5 block" style={{ color: '#9E6E78' }}>
                      <Phone size={11} className="inline mr-1" />Teléfono / WhatsApp *
                    </span>
                    <input
                      id="booking-phone"
                      type="tel"
                      placeholder="+57 300 536 1330"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(245,183,197,0.08)',
                        border: '1.5px solid rgba(245,183,197,0.35)',
                        color: '#6B4B57',
                      }}
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-bold tracking-wide uppercase mb-1.5 block" style={{ color: '#9E6E78' }}>
                      Notas adicionales (opcional)
                    </span>
                    <textarea
                      id="booking-notes"
                      placeholder="Diseño en mente, alergias, preferencias..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-200"
                      style={{
                        background: 'rgba(245,183,197,0.08)',
                        border: '1.5px solid rgba(245,183,197,0.35)',
                        color: '#6B4B57',
                      }}
                    />
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t" style={{ borderColor: 'rgba(245,183,197,0.2)' }}>
            {step > 0 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
                style={{ color: '#9E6E78', border: '1.5px solid rgba(245,183,197,0.3)' }}
              >
                <ChevronLeft size={15} /> Anterior
              </button>
            ) : (
              <div />
            )}

            {step < STEPS.length - 1 ? (
              <motion.button
                whileHover={{ scale: canAdvance ? 1.05 : 1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => canAdvance && setStep(step + 1)}
                disabled={!canAdvance}
                id={`booking-next-step-${step}`}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300"
                style={{
                  background: canAdvance
                    ? 'linear-gradient(135deg, #D98C9A, #F5B7C5)'
                    : 'rgba(200,180,185,0.4)',
                  cursor: canAdvance ? 'pointer' : 'not-allowed',
                  boxShadow: canAdvance ? '0 4px 15px rgba(217,140,154,0.4)' : 'none',
                }}
              >
                Siguiente <ChevronRight size={15} />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSubmit}
                id="booking-submit-btn"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white shimmer-btn shadow-lg"
              >
                <MessageCircle size={15} /> Confirmar por WhatsApp
              </motion.button>
            )}
          </div>
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs mt-5"
          style={{ color: '#9E6E78' }}
        >
          🔒 Tus datos son privados y solo se usan para coordinar tu cita.
        </motion.p>
      </div>
    </section>
  )
}

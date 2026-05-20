<p align="center">
  <img src="public/images/logo.jpeg" alt="Sakura Nails Studio" width="120" style="border-radius: 50%;" />
</p>

<h1 align="center">🌸 Sakura Nails Studio</h1>

<p align="center">
  <strong>Arte & Elegancia en tus Manos</strong><br/>
  Landing page premium para estudio de uñas profesional.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
</p>

---

## ✨ Características

- 🎨 **Diseño Premium** — Estética japonesa con paleta rosa/sakura, glassmorphism y gradientes suaves
- 🌸 **Animación de Pétalos** — Partículas decorativas de pétalos cayendo con Canvas API
- 📱 **100% Responsive** — Optimizado para móvil, tablet y desktop
- 📸 **Galería Interactiva** — Grid masonry con lightbox, filtros por categoría y hover effects
- 📅 **Reserva por WhatsApp** — Formulario de citas que envía directamente a WhatsApp
- 💬 **Botones Flotantes** — Acceso rápido a WhatsApp y llamadas
- ⚡ **Rendimiento** — Optimizado con Next.js Image, lazy loading y fuentes de Google
- 🔍 **SEO Completo** — Meta tags, Open Graph, Twitter Cards y estructura semántica

## 🛠️ Tech Stack

| Tecnología | Uso |
|---|---|
| **Next.js 16** | Framework React con App Router |
| **React 19** | Biblioteca de UI |
| **TypeScript** | Tipado estático |
| **Tailwind CSS 4** | Estilos utility-first |
| **Framer Motion** | Animaciones y transiciones |
| **Lucide React** | Iconografía |
| **react-hot-toast** | Notificaciones |
| **yet-another-react-lightbox** | Visor de imágenes |

## 📁 Estructura del Proyecto

```
sakura-nails/
├── app/
│   ├── globals.css          # Estilos globales y design tokens
│   ├── icon.jpeg            # Favicon
│   ├── layout.tsx           # Layout principal con metadata SEO
│   └── page.tsx             # Página principal (Single Page)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navegación sticky con blur
│   │   └── Footer.tsx       # Footer con links y redes sociales
│   ├── sections/
│   │   ├── Hero.tsx         # Sección principal con CTA
│   │   ├── Services.tsx     # Catálogo de servicios
│   │   ├── Gallery.tsx      # Galería masonry con lightbox
│   │   ├── Booking.tsx      # Formulario de reserva → WhatsApp
│   │   ├── Testimonials.tsx # Reseñas de clientes
│   │   └── FloatingActions.tsx # Botones flotantes
│   └── ui/
│       ├── SectionTitle.tsx # Componente reutilizable de títulos
│       ├── PetalParticles.tsx       # Animación de pétalos
│       └── PetalParticlesWrapper.tsx # Wrapper client-side
└── public/
    └── images/              # Imágenes y assets
```

## 🚀 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/sakura-nails.git
cd sakura-nails

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Build de Producción

```bash
npm run build
npm start
```

## 🌐 Deploy

Este proyecto está optimizado para desplegarse en **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Conecta tu repositorio de GitHub en [vercel.com](https://vercel.com)
2. Vercel detectará automáticamente que es un proyecto Next.js
3. ¡Deploy automático con cada push a `main`!

## 📄 Licencia

Este proyecto es privado y de uso exclusivo para **Sakura Nails Studio**.

---

<p align="center">
  Hecho con 💗 y mucho ☕
</p>

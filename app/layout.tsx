import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakura Nails Studio | Arte & Elegancia en tus Manos",
  description:
    "Estudio de uñas premium en México. Especialistas en nail art japonés, manicura gel, uñas esculpidas y más. Reserva tu cita hoy.",
  keywords: [
    "nail art",
    "manicura",
    "uñas gel",
    "uñas esculpidas",
    "nail studio",
    "sakura nails",
    "belleza",
    "México",
  ],
  authors: [{ name: "Sakura Nails Studio" }],
  openGraph: {
    title: "Sakura Nails Studio | Arte & Elegancia en tus Manos",
    description:
      "Estudio de uñas premium. Manicura, nail art japonés, gel y esculpidas.",
    type: "website",
    locale: "es_MX",
    siteName: "Sakura Nails Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakura Nails Studio",
    description: "Arte premium en tus manos. Reserva tu cita hoy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${lato.variable} scroll-smooth`}
    >
      <body
        className="min-h-screen"
        style={{
          fontFamily: "var(--font-lato), sans-serif",
          backgroundColor: "#FFF8FA",
          color: "#6B4B57",
        }}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#FFF8FA",
              color: "#6B4B57",
              border: "1px solid #F5B7C5",
              fontFamily: "var(--font-lato), sans-serif",
            },
            success: {
              iconTheme: { primary: "#D98C9A", secondary: "#FFF8FA" },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}

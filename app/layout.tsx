import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AppShell } from '@/components/app-shell'
import './globals.css'
import { FloatingContact } from "@/components/floating-contact";
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'REMERAS — Tienda de Remeras',
  description: 'Tienda online de remeras de algodón premium. Encontrá tu remera favorita.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <div className="relative min-h-screen overflow-hidden">

          {/* Logo gigante de fondo */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10">
          <img
            src="/ICONSVG.svg"
            className="w-425 opacity-11 rotate-12 select-none"
          />
        </div>

          {/* Capa oscura */}
          {/* <div className="absolute inset-0 bg-black/60"></div> */}

          {/* Contenido */}
          <div className="relative z-10">
            <AppShell>
              {children}
            </AppShell>

            <FloatingContact />
          </div>

        </div>

        <Analytics />
      </body>
    </html>
  )
}

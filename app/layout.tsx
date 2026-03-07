import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AppShell } from '@/components/app-shell'
import './globals.css'
import { FloatingContact } from "@/components/floating-contact";
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'MJstylazo - Tienda de remeras',
  description: 'Tienda online de remeras de algodón premium. Encontrá tu remera favorita.',
  generator: 'MJ Store',
  icons: {
    icon: [
      {
        url: '/iconomj.png',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/iconomj.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
        type: 'image/png'
      },
      // {
      //   url: '/ICONSVG.svg',
      //   type: 'image/svg+xml',
      // },
    ],
    apple: '/iconomj.png',
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

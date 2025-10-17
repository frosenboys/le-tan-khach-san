import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" })
const _lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "Hotel Concierge Assistant",
  description: "Your personal hotel concierge AI assistant",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

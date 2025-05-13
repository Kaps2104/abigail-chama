import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display, Urbanist } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Abigail & Chama Advocates - Premier Law Firm in Zambia",
  description:
    "A premier full-service law firm headquartered in Lusaka, Zambia, providing innovative legal solutions across corporate, finance, energy, and dispute resolution sectors.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} ${urbanist.variable} font-montserrat`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}

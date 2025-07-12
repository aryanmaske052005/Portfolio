import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Fira_Code } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira" })

export const metadata: Metadata = {
  title: "Aryan Nitin Maske - Technical Portfolio",
  description:
    "Web Developer | Computer Engineering Student - Technical portfolio showcasing projects, skills, and achievements in modern web development",
  keywords:
    "web developer, computer engineering, react, typescript, portfolio, frontend developer, technical portfolio",
  authors: [{ name: "Aryan Nitin Maske" }],
  creator: "Aryan Nitin Maske",
  openGraph: {
    title: "Aryan Nitin Maske - Technical Portfolio",
    description: "Web Developer | Computer Engineering Student",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${firaCode.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  )
}

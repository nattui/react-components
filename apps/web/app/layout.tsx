import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import type { PropsWithChildren } from "react"
import "./globals.css"
import Topbar from "@/app/topbar"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "React Components",
  description: "React Components",
}

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Topbar />
        {children}
      </body>
    </html>
  )
}

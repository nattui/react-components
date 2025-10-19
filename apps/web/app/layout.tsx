import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { Geist, Geist_Mono } from "next/font/google"
import Topbar from "@/app/topbar"
import "@/styles/global.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  description: "React Components",
  title: "React Components",
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

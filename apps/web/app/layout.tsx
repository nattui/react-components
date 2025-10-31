import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import type { PropsWithChildren } from "react"
import Topbar from "@/app/topbar"
import "@/styles/global.css"

const geistSans = Inter({
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
    <html className="" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} color-gray-slate color-primary-blue`}
      >
        <Topbar />
        {children}
      </body>
    </html>
  )
}

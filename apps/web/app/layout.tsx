import "@/styles/global.css"
import type { Metadata } from "next"
import { Geist as sans, Geist_Mono as mono } from "next/font/google"
import type { PropsWithChildren } from "react"
import { Providers } from "@/app/providers"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"

const geistSans = sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} color-gray-slate color-primary-blue`}
      >
        <Providers>
          <div className="flex size-full flex-col">
            <Topbar />
            <div className="flex size-full">
              <Sidebar />
              <main className="w-full min-w-0 px-16">
                <div className="relative mx-auto flex w-full max-w-768 flex-col py-80">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  description: "React Components",
  title: "React Components",
}

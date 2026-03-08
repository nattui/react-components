import "@/styles/global.css"
import type { Metadata } from "next"
import { Geist as sans, JetBrains_Mono as mono } from "next/font/google"
import type { PropsWithChildren } from "react"
import { Providers } from "@/app/providers"
import { SidebarServer } from "@/components/sidebar-server"
import { Topbar } from "@/components/topbar"

const fontMono = mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontSans = sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={`${fontMono.variable} ${fontSans.variable} color-gray-slate color-primary-blue`}
      >
        <Providers>
          <div className="flex size-full flex-col">
            <Topbar />
            <div className="flex size-full">
              <SidebarServer />
              <main className="w-full min-w-0">
                <div className="relative mx-auto flex w-full max-w-768 flex-col px-16 py-80">
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

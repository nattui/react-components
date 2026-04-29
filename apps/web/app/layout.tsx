import "@/styles/global.css"
import type { Metadata } from "next"
import { Inter as sans, JetBrains_Mono as mono } from "next/font/google"
import type { PropsWithChildren, JSX } from "react"
import { Providers } from "@/app/providers"
import { Topbar } from "@/components/topbar"

const fontMono = mono({
  subsets: ["latin"],
  variable: "--font-code",
})

const fontSans = sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "variable",
})

export default function RootLayout(props: PropsWithChildren): JSX.Element {
  const { children } = props

  return (
    <html className="color-gray-slate color-primary-blue" lang="en">
      <body className={`${fontMono.variable} ${fontSans.variable}`}>
        <Providers>
          <div className="isolate flex size-full flex-col">
            <Topbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

// oxlint-disable-next-line react/only-export-components
export const metadata: Metadata = {
  description: "React Components",
  title: "React Components",
}

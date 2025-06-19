import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Components",
  description: "React Components",
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Topbar />
        {children}
      </body>
    </html>
  );
}

function Topbar() {
  return (
    <div className="flex gap-4 p-4">
      {/* <Link href="/">Home</Link> */}
      <Link href="/button">Button</Link>
    </div>
  );
}

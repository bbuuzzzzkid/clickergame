import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieProvider } from "./forcontext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THISISAREALLYHARDBOSSFIGHTLOLYOUCANTBEATIT",
  description: "Try to beat it, but, you are just wasting your time bro. Like, go touch grass ig.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CookieProvider>
          {children}
        </CookieProvider>
        </body>
    </html>
  );
}

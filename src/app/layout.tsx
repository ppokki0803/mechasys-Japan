import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mechasys Japan - 建設現場の次世代レイアウト技術",
  description: "XR Projectorで、デジタルレイアウトをミリ単位の精度で現場に。プロジェクション技術で建設現場の生産性を最大化します。",
  keywords: ["Mechasys", "XR Projector", "建設", "レイアウト", "投影技術", "3Dスキャン", "建設技術"],
  authors: [{ name: "Mechasys" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mechasys Japan - 建設現場の次世代レイアウト技術",
    description: "XR Projectorで、デジタルレイアウトをミリ単位の精度で現場に。",
    url: "https://mechasys-japan.vercel.app",
    siteName: "Mechasys Japan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mechasys Japan",
    description: "建設現場の次世代レイアウト技術",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

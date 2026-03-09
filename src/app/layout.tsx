import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

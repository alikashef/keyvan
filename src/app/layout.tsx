import LayoutClientWrapper from "./_components/LayoutClientWrapper";
import PWAInstaller from "@/components/PWAInstaller";
import { Geist, Geist_Mono } from "next/font/google";
import PWAStatus from "@/components/PWAStatus";
import { ApiProvider } from "./_provider/api";
import { yekanBakh } from "@/lib/fonts";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keyvan App",
  description: "A modern Progressive Web App",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/img/logo-PWA.png", sizes: "192x192", type: "image/png" },
      { url: "/img/logo-PWA.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/img/logo-PWA.png",
    apple: "/img/logo-PWA.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Keyvan App",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Keyvan App" />
        <link rel="apple-touch-icon" href="/img/logo-PWA.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${yekanBakh.variable} antialiased`}
      >
        <ApiProvider>
          <LayoutClientWrapper>
            <main className="pb-44 max-w-lg w-full mx-auto">
              {children}
              <Toaster />
            </main>
            <PWAInstaller />
            <PWAStatus />
          </LayoutClientWrapper>
        </ApiProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://malikabozorservice.uz"),
  title: "Malika Service - Сервисный Центр Электроники №1 в Ташкенте",
  description: "Профессиональное обслуживание смартфонов и планшетов в кратчайшие сроки. Гарантия до 6 месяцев. Торговый комплекс Малика.",
  keywords: "сервисный центр, обслуживание телефонов, малика, диагностика, сервис, ташкент",
  openGraph: {
    title: "Malika Service - Сервисный Центр",
    description: "Сервисный Центр Электроники №1 в Ташкенте. Самое быстрое и надежное обслуживание.",
    url: "https://malikabozorservice.uz",
    siteName: "Malika Service",
    images: [
      {
        url: "/section1-bg.png",
        width: 1200,
        height: 630,
        alt: "Malika Service - Сервисный Центр",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malika Service - Обслуживание Телефонов",
    description: "Сервисный Центр Электроники №1 в Ташкенте. Гарантия до 6 месяцев.",
    images: ["/section1-bg.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevent zoom on mobile
};

import { LanguageProvider } from "@/context/LanguageContext";
import { ModalProvider } from "@/context/ModalContext";
import { ThemeProvider } from "@/context/ThemeContext";
import OrderModal from "@/components/OrderModal";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased dark" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#000000] text-black dark:text-white selection:bg-blue-600 selection:text-white transition-colors duration-500 overflow-x-hidden break-words">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <ModalProvider>
              <Navbar />
              {children}
              <FloatingContactButton />
              <Toaster position="top-center" richColors theme="system" />
              <OrderModal />
            </ModalProvider>
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}

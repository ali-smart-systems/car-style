import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// إعدادات الـ Metadata المحدثة باسم "كارستايل"
export const metadata: Metadata = {
  title: {
    default: "كارستايل | زينة وتلميع سيارات بالرياض - محمد الرباحي",
    template: "%s | كارستايل"
  },
  description: "مركز كارستايل (محمد الرباحي) في الرياض. متخصصون في التلميع الساطع، العازل الحراري، النانو سيراميك، وتجهيز السيارات بأحدث الإكسسوارات والشاشات.",
  keywords: [
    "كارستايل",
    "كارستايل الرياض",
    "محمد الرباحي",
    "زينة سيارات الرياض", 
    "تلميع سيارات ساطع", 
    "عازل حراري نانو سيراميك", 
    "تجهيز سيارات", 
    "محل زينة سيارات الرياض"
  ],
  authors: [{ name: "Ali Saleh" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "كارستايل لزينة وتلميع السيارات",
    description: "أفضل خدمات العناية بالسيارات في الرياض - مركز كارستايل",
    type: "website",
    locale: "ar_SA",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-900">
        {children}
      </body>
    </html>
  );
}

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

// إعدادات الـ Metadata المتقدمة لتصدر نتائج البحث
export const metadata: Metadata = {
  title: {
    default: "كار ستايل | زينة وتلميع سيارات بالرياض - محمد الرباحي",
    template: "%s | كار ستايل"
  },
  description: "مركز كار ستايل (محمد الرباحي) في الرياض. متخصصون في التلميع الساطع، العازل الحراري، النانو سيراميك، وتجهيز السيارات بأحدث الإكسسوارات والشاشات.",
  keywords: [
    "زينة سيارات الرياض", 
    "تلميع سيارات ساطع", 
    "عازل حراري نانو سيراميك", 
    "محمد الرباحي", 
    "كار ستايل", 
    "تجهيز سيارات", 
    "محل زينة سيارات الرياض",
    "تلميع داخلي وخارجي"
  ],
  authors: [{ name: "Ali Saleh" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  // تحسين ظهور الرابط عند مشاركته في الواتساب أو تيك توك
  openGraph: {
    title: "كار ستايل لزينة وتلميع السيارات",
    description: "أفضل خدمات العناية بالسيارات في الرياض",
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

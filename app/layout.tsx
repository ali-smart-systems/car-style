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

// إعدادات الـ Metadata المحدثة باسم "كارستايل" مع إضافة كود إثبات ملكية جوجل
export const metadata: Metadata = {
  title: {
    default: "كارستايل | زينة ورش وسمكرة سيارات بالرياض - محمد الرباحي",
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
    "كار استايل",
    "رش مطفي",
    "رش سيارات",
    "رش جنوط",
    "رش ديكورات داخلية",
    "رش مطاطي",
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
  },
  verification: {
    google: "yGsEhpBU4tOj2oVtJ4Qnz2ynWA2d_982wdf3rsaG7Kc",
  },
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
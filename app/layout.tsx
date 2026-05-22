import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google"; // 📊 استيراد المكون الرسمي لـ Google Analytics
import CarStyleChat from "@/components/CarStyleChat"; // 💬 استيراد مكون الشات الذكي لكار ستايل
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🛠️ الإعداد الصحيح للـ Viewport في Next.js 14/15 لمنع تحذيرات الـ Build
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// إعدادات الـ Metadata المحسنة للسيو المحلي
export const metadata: Metadata = {
  // إضافة metadataBase لضمان توليد الروابط الفرعية وصور OG بشكل صحيح
  metadataBase: new URL('https://carstyle-sa.com'),

  title: {
    default: "كارستايل | رش وسمكرة وزينة سيارات بالرياض - محمد الرباحي",
    template: "%s | كارستايل",
  },

  description:
    "كارستايل بالرياض متخصصون في رش السيارات، السمكرة، التلميع، النانو سيراميك، العازل الحراري، رش الجنوط وتجهيز السيارات بأحدث التقنيات.",

  keywords: [
    "كارستايل",
    "كارستايل الرياض",
    "رش سيارات الرياض",
    "سمكرة وبوية الرياض",
    "رش فرن",
    "رش مطفي",
    "رش مطاطي",
    "رش وكالة",
    "رش جنوط",
    "تلميع سيارات",
    "نانو سيراميك",
    "عازل حراري",
    "محمد الرباحي",
    "زينة سيارات الرياض",
    "تظليل سيارات",
    "تغيير لون السيارة",
    "محل رش سيارات بالرياض",
    "ورش رش سيارات الرياض",
    "أفضل رش سيارات بالرياض",
  ],

  authors: [{ name: "Ali Saleh" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "كارستايل | رش وسمكرة وزينة سيارات بالرياض",
    description: "أفضل خدمات رش السيارات والتلميع والزينة والعازل الحراري في الرياض.",
    url: "https://carstyle-sa.com",
    siteName: "كارستايل",
    images: [
      {
        url: "/images/1.webp",
        width: 1200,
        height: 630,
        alt: "كارستايل الرياض",
      },
    ],
    locale: "ar_SA",
    type: "website",
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

        {/* 💬 إضافة الشات الذكي ليظهر في زاوية كافة صفحات الموقع */}
        <CarStyleChat />

        {/* 📊 ربط قوقل أناليتكس بأحدث طريقة لـ Next.js */}
        <GoogleAnalytics gaId="G-JJSX2X23M4" />

        {/* Local Business Schema لتحسين ظهور الموقع في قوقل */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoBodyShop",
              name: "كارستايل",
              image: "https://carstyle-sa.com/images/1.webp",
              url: "https://carstyle-sa.com",
              telephone: "+966553368215",
              address: {
                "@type": "PostalAddress",
                addressLocality: "الرياض",
                addressCountry: "SA",
              },
              areaServed: "الرياض",
              sameAs: [
                "https://maps.app.goo.gl/mWdPnqfxNkcpfa2t6",
                "https://www.tiktok.com/@user1853168014566",
                "https://g.page/r/Cd_j_pTnHdnuEBI/review"
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "87",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

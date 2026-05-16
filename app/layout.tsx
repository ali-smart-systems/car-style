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

// إعدادات الـ Metadata المحسنة للسيو المحلي
export const metadata: Metadata = {
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

  viewport: "width=device-width, initial-scale=1",

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

    description:
      "أفضل خدمات رش السيارات والتلميع والزينة والعازل الحراري في الرياض.",

    url: "https://ضع-الدومين-هنا.com",

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

        {/* Local Business Schema لتحسين ظهور الموقع في قوقل */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "AutoBodyShop",

              name: "كارستايل",

              image: "https://ضع-الدومين-هنا.com/images/1.webp",

              url: "https://ضع-الدومين-هنا.com",

              telephone: "+966553368215",

              address: {
                "@type": "PostalAddress",
                addressLocality: "الرياض",
                addressCountry: "SA",
              },

              areaServed: "الرياض",

              sameAs: [
                "https://maps.app.goo.gl/bzXpThGWnaCMqWmf8",
                "https://www.tiktok.com/@user1853168014566",
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
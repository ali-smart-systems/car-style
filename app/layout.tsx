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

// هنا قمنا بتعديل عنوان الموقع ووصفه ليظهر بشكل احترافي في جوجل
export const metadata: Metadata = {
  title: "كارستايل - Car Style",
  description: "كارستايل لزينة السيارات، التلميع الساطع، والعازل الحراري",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // هنا قمنا بتغيير اللغة إلى العربية وتحديد الاتجاه من اليمين لليسار
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

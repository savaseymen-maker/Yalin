import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yalın | Operasyonel Mükemmellik Danışmanlığı",
    template: "%s | Yalın Operasyonel Mükemmellik",
  },
  description:
    "İşletmenizdeki görünmeyen maliyetleri ortaya çıkarıyoruz. Yalın Yönetim, Süreç Geliştirme, Ekonomik Rasyonalite, Six Sigma ve Kurumsal Risk Yönetimini tek çatı altında birleştiren stratejik operasyonel mükemmellik danışmanlığı.",
  keywords: [
    "operasyonel mükemmellik",
    "yalın yönetim",
    "six sigma",
    "kurumsal risk yönetimi",
    "süreç geliştirme",
    "işletme check-up",
    "yönetim danışmanlığı",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${archivo.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { digitalProducts } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dijital Ürünler",
  description:
    "PDF kitaplardan KPI dashboard şablonlarına, Excel araçlarından AI avatar videolarına kadar operasyonel mükemmellik dijital ürün kütüphanesi.",
};

export default function DigitalProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dijital Ürünler"
        title="Tek Bir Eğitimin Ötesinde: Kullanıma Hazır Bir Dijital Araç Kütüphanesi"
        desc="Her modülün ürettiği doküman, şablon ve hesaplayıcı; tek başına da satın alınabilecek bağımsız dijital ürünlere dönüşür. Sahada bugün kullanabileceğiniz araçlar."
      />

      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <SectionHeading
            eyebrow="Kütüphane"
            title="17 Ürün Kategorisi, Sürekli Genişleyen İçerik"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {digitalProducts.map((p, i) => (
              <Reveal key={p.title} delay={(i % 9) * 0.05}>
                <div className="card-premium h-full group">
                  <div className="flex items-start justify-between">
                    <ShoppingBag size={20} className="text-gold-500" strokeWidth={1.5} />
                    <span className="font-display text-lg text-white/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Nasıl Çalışır?"
              title="Tekil Modülden Kurumsal Lisansa Kadar Esnek Erişim"
              desc="Bireysel profesyoneller tekil ürünleri satın alabilir; kurumlar ise yıllık akademi lisansıyla tüm kütüphaneye ekip genelinde erişim sağlayabilir."
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="glass-panel rounded-sm p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest2 text-white/40 mb-4">
                  Erişim Seçenekleri
                </p>
                <ul className="space-y-4 text-sm text-white/60">
                  <li className="border-b border-white/10 pb-4">Tekil ürün / modül satışı</li>
                  <li className="border-b border-white/10 pb-4">Paket satışları (kategori bazlı)</li>
                  <li>Kurumsal akademi lisansı — şirket geneli yıllık erişim</li>
                </ul>
                <Link href="/iletisim" className="btn-primary mt-8 w-full justify-center">
                  Erişim Talep Edin <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Hangi Ürünlerin İşletmenize Uygun Olduğunu Birlikte Belirleyelim"
        desc="İhtiyacınıza göre tekil ürün, paket ya da kurumsal lisans önerisi sunalım."
      />
    </>
  );
}

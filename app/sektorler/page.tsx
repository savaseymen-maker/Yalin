import {
  Flame,
  Car,
  Factory,
  Wheat,
  Cog,
  Building,
  Truck,
  Warehouse,
  Zap,
  Globe2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { industries } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sektörler",
  description:
    "Demir Çelik, Otomotiv, İmalat, Gıda, Lojistik ve Enerji dahil 10 sektörde derinlemesine operasyonel mükemmellik tecrübesi.",
};

const icons = [Flame, Car, Factory, Wheat, Cog, Building, Truck, Warehouse, Zap, Globe2];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sektörler"
        title="Ağır Sanayiden Lojistiğe, Derinlemesine Sektör Tecrübesi"
        desc="Operasyonel mükemmellik ilkeleri evrenseldir; ancak uygulama her sektörün kendine özgü dinamiklerini gerektirir. On sektörde saha tecrübesiyle bu farkı biliyoruz."
      />

      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={ind.title} delay={(i % 6) * 0.07}>
                  <div className="card-premium h-full">
                    <Icon size={26} className="text-gold-500" strokeWidth={1.5} />
                    <h3 className="mt-5 text-lg font-semibold text-white">{ind.title}</h3>
                    <p className="mt-2.5 text-sm text-white/50 leading-relaxed">{ind.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative">
          <SectionHeading
            eyebrow="Sektörler Arası Bakış"
            title="Sektör Farklı, İlkeler Aynı"
            desc="Her sektörde israf, değişkenlik ve risk farklı biçimlerde ortaya çıkar; ancak teşhis mantığı ve disiplin aynı kalır. Bu tutarlılık, sektörden bağımsız güvenilir sonuçlar üretmemizi sağlar."
          />
        </div>
      </section>

      <CTASection
        title="Sektörünüze Özel Bir Teşhise Hazır Mısınız?"
        desc="İşletme Check-Up sürecimiz, sektörünüzün kendine özgü operasyonel dinamiklerine göre uyarlanır."
      />
    </>
  );
}

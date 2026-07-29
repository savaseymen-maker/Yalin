import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  BookOpen,
  Video,
  Calculator,
  ClipboardCheck,
  FileBarChart2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { accentChip } from "@/lib/theme";
import { digitalProducts, digitalProductCategories } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dijital Ürünler",
  description:
    "PDF kitaplardan KPI dashboard şablonlarına, Excel araçlarından AI avatar videolarına kadar operasyonel mükemmellik dijital ürün kütüphanesi.",
};

const categoryIcons = [BookOpen, Video, Calculator, ClipboardCheck, FileBarChart2];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replaceAll("ı", "i")
    .replaceAll("ş", "s")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/&/g, "ve")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function DigitalProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dijital Ürünler"
        title="Tek Bir Eğitimin Ötesinde: Kullanıma Hazır Bir Dijital Araç Kütüphanesi"
        desc="Her modülün ürettiği doküman, şablon ve hesaplayıcı; tek başına da satın alınabilecek bağımsız dijital ürünlere dönüşür. Sahada bugün kullanabileceğiniz araçlar."
      />

      {/* CATEGORY QUICK-NAV */}
      <section className="bg-white border-b border-ink-900/[0.06] py-10">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {digitalProductCategories.map((cat, i) => {
              const Icon = categoryIcons[i % categoryIcons.length];
              const chip = accentChip(i);
              return (
                <a
                  key={cat.title}
                  href={`#${slugify(cat.title)}`}
                  className="flex flex-col items-center text-center gap-3 rounded-md border border-ink-900/[0.08] bg-paper-100 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-ember-300"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full border ${chip.bg} ${chip.border}`}>
                    <Icon size={20} className={chip.text} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs md:text-[13px] text-ink-800 font-medium leading-snug">
                    {cat.title}
                  </span>
                  <span className="text-[11px] text-ink-400">{cat.items.length} ürün</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {digitalProductCategories.map((cat, gi) => {
        const items = digitalProducts.filter((p) => cat.items.includes(p.title));
        const chip = accentChip(gi);
        return (
          <section
            key={cat.title}
            id={slugify(cat.title)}
            className={`section-pad scroll-mt-28 ${gi % 2 === 0 ? "bg-paper-100" : "bg-white"}`}
          >
            <div className="container-max">
              <SectionHeading eyebrow={`0${gi + 1}`} title={cat.title} />
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((p, i) => (
                  <Reveal key={p.title} delay={(i % 9) * 0.05}>
                    <div className="card-premium h-full group">
                      <div className="flex items-start justify-between">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full border ${chip.bg} ${chip.border}`}>
                          <ShoppingBag size={18} className={chip.text} strokeWidth={1.5} />
                        </div>
                        <span className="font-display font-extrabold text-lg text-ink-900/10">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-ink-900 leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              dark
              eyebrow="Nasıl Çalışır?"
              title="Tekil Modülden Kurumsal Lisansa Kadar Esnek Erişim"
              desc="Bireysel profesyoneller tekil ürünleri satın alabilir; kurumlar ise yıllık akademi lisansıyla tüm kütüphaneye ekip genelinde erişim sağlayabilir."
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="glass-panel-dark rounded-sm p-8 md:p-10">
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

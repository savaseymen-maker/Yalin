import Link from "next/link";
import {
  Ruler,
  LayoutGrid,
  KanbanSquare,
  ClipboardList,
  Lightbulb,
  Flame,
  ShieldAlert,
  AlertTriangle,
  DoorOpen,
  Forklift,
  Tag,
  Barcode,
  QrCode,
  Zap,
  ArrowRight,
  Truck,
  FileCheck,
  PackageSearch,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { shopCategories, shopProducts } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mağaza",
  description:
    "Yalın & 5S ürünleri, güvenlik işaret ve levhaları, etiketleme çözümleri. Sahanızda doğrudan kullanabileceğiniz görsel yönetim ekipmanları.",
};

const categoryIcons: Record<string, typeof LayoutGrid> = {
  "yalin-5s": LayoutGrid,
  "guvenlik-levha": ShieldAlert,
  etiket: Tag,
};

const categoryAccent: Record<string, { text: string; bg: string; ring: string }> = {
  "yalin-5s": { text: "text-gold-500", bg: "bg-gold-500/10", ring: "ring-gold-500/25" },
  "guvenlik-levha": { text: "text-[#C97A7A]", bg: "bg-[#B45757]/10", ring: "ring-[#B45757]/25" },
  etiket: { text: "text-steel-400", bg: "bg-steel-500/10", ring: "ring-steel-400/25" },
};

const productIcons: Record<string, typeof Ruler> = {
  "zemin-isaretleme-bandi": Ruler,
  "golge-panosu": LayoutGrid,
  "manyetik-kanban-tahtasi": KanbanSquare,
  "5s-denetim-panosu": ClipboardList,
  "andon-isik-sutunu": Lightbulb,
  "yangin-sondurucu-levhasi": Flame,
  "kkd-zorunluluk-seti": ShieldAlert,
  "genel-tehlike-levhasi": AlertTriangle,
  "acil-toplanma-levhasi": DoorOpen,
  "forklift-trafik-seti": Forklift,
  "boru-hatti-etiketi": Tag,
  "ekipman-envanter-etiketi": Barcode,
  "zemin-lokasyon-etiketi": QrCode,
  "elektrik-panosu-etiketi": Zap,
};

function formatPrice(price: number) {
  return price.toLocaleString("tr-TR");
}

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Mağaza · Saha Ürünleri"
        title="Yalın & 5S, Güvenlik İşaretleri ve Etiketleme Çözümleri"
        desc="Danışmanlık projelerimizde sahada bizzat kullandığımız ekipmanları, doğrudan işletmenize tedarik ediyoruz. Aşağıdaki fiyatlar KDV hariç başlangıç fiyatlarıdır; miktar ve özel üretim taleplerine göre değişiklik gösterebilir."
      />

      {/* CATEGORY QUICK-NAV */}
      <section className="bg-charcoal-900 border-b border-white/[0.06] py-10">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {shopCategories.map((cat) => {
              const Icon = categoryIcons[cat.key];
              const count = shopProducts.filter((p) => p.category === cat.key).length;
              return (
                <a
                  key={cat.key}
                  href={`#${cat.key}`}
                  className="flex items-center gap-4 rounded-sm border border-white/[0.08] bg-white/[0.02] px-5 py-5 transition-all duration-300 hover:border-gold-500/30 hover:bg-white/[0.04]"
                >
                  <Icon size={22} className="text-gold-500 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-white/85 font-medium leading-snug">{cat.title}</p>
                    <p className="text-[11px] text-white/35 mt-0.5">{count} ürün</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {shopCategories.map((cat, gi) => {
        const items = shopProducts.filter((p) => p.category === cat.key);
        const accent = categoryAccent[cat.key];
        const Icon = categoryIcons[cat.key];
        return (
          <section
            key={cat.key}
            id={cat.key}
            className={`section-pad scroll-mt-28 ${gi % 2 === 0 ? "bg-navy-gradient relative overflow-hidden" : "bg-charcoal-900"}`}
          >
            {gi % 2 === 0 && <div className="absolute inset-0 bg-noise opacity-30" />}
            <div className="container-max relative">
              <SectionHeading eyebrow={`0${gi + 1}`} title={cat.title} desc={cat.desc} />
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((p, i) => {
                  const ProductIcon = productIcons[p.slug] ?? Icon;
                  return (
                    <Reveal key={p.slug} delay={(i % 6) * 0.06}>
                      <div className="card-premium h-full flex flex-col !p-0 overflow-hidden">
                        <div
                          className={`relative h-36 flex items-center justify-center ${accent.bg} ring-1 ring-inset ${accent.ring}`}
                        >
                          {p.badge && (
                            <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-navy-950/70 text-gold-400 border border-gold-500/30">
                              {p.badge}
                            </span>
                          )}
                          <ProductIcon size={40} className={accent.text} strokeWidth={1.25} />
                        </div>
                        <div className="p-6 flex flex-col grow">
                          <h3 className="text-base font-semibold text-white leading-snug">
                            {p.title}
                          </h3>
                          <p className="mt-2 text-sm text-white/50 leading-relaxed grow">{p.desc}</p>
                          <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
                            <p className="text-white">
                              <span className="font-display text-xl">₺{formatPrice(p.price)}</span>
                              <span className="text-xs text-white/40 ml-1.5">/ {p.unit}</span>
                            </p>
                            <Link
                              href="/iletisim"
                              className="text-xs font-semibold uppercase tracking-wider text-gold-500 hover:text-gold-400 transition-colors flex items-center gap-1"
                            >
                              Teklif Al <ArrowRight size={13} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* TOPLU SİPARİŞ & ÖZEL ÜRETİM */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Toplu Sipariş & Özel Üretim"
              title="Sahanıza Özel Ölçü, Marka ve Miktarlarda Üretim"
              desc="Tekil ürün siparişinin ötesinde, fabrika geneli 5S dönüşümü veya çoklu şube kurumsal kimliği için toplu tedarik ve özel üretim seçenekleri sunuyoruz."
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="glass-panel rounded-sm p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest2 text-white/40 mb-4">
                  Sipariş Seçenekleri
                </p>
                <ul className="space-y-4 text-sm text-white/60">
                  <li className="flex items-start gap-3 border-b border-white/10 pb-4">
                    <PackageSearch size={16} className="text-gold-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                    Numune talebi ve saha ölçümüne göre teklif
                  </li>
                  <li className="flex items-start gap-3 border-b border-white/10 pb-4">
                    <FileCheck size={16} className="text-gold-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                    Kurumsal logo / şirket kimliğiyle özel üretim
                  </li>
                  <li className="flex items-start gap-3">
                    <Truck size={16} className="text-gold-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                    Toplu alımlarda kademeli miktar indirimi
                  </li>
                </ul>
                <Link href="/iletisim" className="btn-primary mt-8 w-full justify-center">
                  Teklif İsteyin <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="İhtiyacınıza Uygun Ürün Listesini Birlikte Belirleyelim"
        desc="Fabrika Check-Up sırasında tespit ettiğimiz görsel yönetim ve güvenlik ihtiyaçlarına göre size özel bir tedarik listesi hazırlayabiliriz."
      />
    </>
  );
}

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
import { accentChip } from "@/lib/theme";
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
      <section className="bg-white border-b border-ink-900/[0.06] py-10">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {shopCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.key];
              const chip = accentChip(i);
              const count = shopProducts.filter((p) => p.category === cat.key).length;
              return (
                <a
                  key={cat.key}
                  href={`#${cat.key}`}
                  className="flex items-center gap-4 rounded-md border border-ink-900/[0.08] bg-paper-100 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-ember-300"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full border ${chip.bg} ${chip.border} shrink-0`}>
                    <Icon size={20} className={chip.text} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-ink-900 font-medium leading-snug">{cat.title}</p>
                    <p className="text-[11px] text-ink-400 mt-0.5">{count} ürün</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {shopCategories.map((cat, gi) => {
        const items = shopProducts.filter((p) => p.category === cat.key);
        const chip = accentChip(gi);
        const Icon = categoryIcons[cat.key];
        return (
          <section
            key={cat.key}
            id={cat.key}
            className={`section-pad scroll-mt-28 ${gi % 2 === 0 ? "bg-paper-100" : "bg-white"}`}
          >
            <div className="container-max">
              <SectionHeading eyebrow={`0${gi + 1}`} title={cat.title} desc={cat.desc} />
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((p, i) => {
                  const ProductIcon = productIcons[p.slug] ?? Icon;
                  return (
                    <Reveal key={p.slug} delay={(i % 6) * 0.06}>
                      <div className="card-premium h-full flex flex-col !p-0 overflow-hidden">
                        <div className={`relative h-36 flex items-center justify-center border-b ${chip.bg} ${chip.border}`}>
                          {p.badge && (
                            <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-ember-500 text-white">
                              {p.badge}
                            </span>
                          )}
                          <ProductIcon size={40} className={chip.text} strokeWidth={1.25} />
                        </div>
                        <div className="p-6 flex flex-col grow">
                          <h3 className="text-base font-semibold text-ink-900 leading-snug">
                            {p.title}
                          </h3>
                          <p className="mt-2 text-sm text-ink-500 leading-relaxed grow">{p.desc}</p>
                          <div className="mt-5 pt-5 border-t border-ink-900/[0.08] flex items-center justify-between">
                            <p className="text-ink-900">
                              <span className="font-display font-extrabold text-xl">
                                ₺{formatPrice(p.price)}
                              </span>
                              <span className="text-xs text-ink-400 ml-1.5">/ {p.unit}</span>
                            </p>
                            <Link
                              href="/iletisim"
                              className="text-xs font-bold uppercase tracking-wider text-ember-600 hover:text-ember-700 transition-colors flex items-center gap-1"
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
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-ember-500/15 blur-3xl animate-float" />
        <div className="container-max relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              dark
              eyebrow="Toplu Sipariş & Özel Üretim"
              title="Sahanıza Özel Ölçü, Marka ve Miktarlarda Üretim"
              desc="Tekil ürün siparişinin ötesinde, fabrika geneli 5S dönüşümü veya çoklu şube kurumsal kimliği için toplu tedarik ve özel üretim seçenekleri sunuyoruz."
            />
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="glass-panel-dark rounded-sm p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest2 text-white/40 mb-4">
                  Sipariş Seçenekleri
                </p>
                <ul className="space-y-4 text-sm text-white/60">
                  <li className="flex items-start gap-3 border-b border-white/10 pb-4">
                    <PackageSearch size={16} className="text-ember-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                    Numune talebi ve saha ölçümüne göre teklif
                  </li>
                  <li className="flex items-start gap-3 border-b border-white/10 pb-4">
                    <FileCheck size={16} className="text-ember-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                    Kurumsal logo / şirket kimliğiyle özel üretim
                  </li>
                  <li className="flex items-start gap-3">
                    <Truck size={16} className="text-ember-400 mt-0.5 shrink-0" strokeWidth={1.5} />
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

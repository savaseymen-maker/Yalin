import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Presentation,
  NotebookPen,
  HelpCircle,
  Award,
  Factory,
  Table,
  Bot,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import {
  academyFormats,
  courseStructure,
  academyCategories,
  academyTotalModules,
} from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akademi",
  description:
    "Lean, TPM, Six Sigma, Yönetim ve Veri Analitiği alanlarında yaklaşık 120 modülden oluşan operasyonel mükemmellik eğitim kütüphanesi.",
};

const formatIcons = [FileText, Presentation, NotebookPen, HelpCircle, Award, Factory, Table, Bot];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Akademi"
        title="Operasyonel Mükemmelliği Ölçeklenebilir Bir Eğitim Kütüphanesine Dönüştürdük"
        desc="Lean Foundation, Lean Tools, TPM, Six Sigma, Yönetim ve Veri Analitiği alanlarında yaklaşık 120 modüllük dijital bir akademi. Her eğitim, sahadan doğrulanmış içerik ve yapay zekâ destekli araçlarla birlikte gelir."
      />

      {/* STATS */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { value: `${academyTotalModules}+`, label: "Eğitim Modülü" },
            { value: `${academyCategories.length}`, label: "Ana Kategori" },
            { value: "2", label: "Dil (TR / EN)" },
            { value: "10", label: "Bölümlük Standart Şablon" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div>
                <p className="font-display text-3xl md:text-4xl text-gold-500">{s.value}</p>
                <p className="mt-1 text-xs md:text-sm text-white/45">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORMATS */}
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative">
          <SectionHeading
            eyebrow="Her Eğitim İçin Tam Paket"
            title="Tek Bir Modül, Sekiz Farklı Öğrenme Aracıyla Gelir"
            desc="Bir eğitimi yalnızca izlemezsiniz; uygular, test eder ve belgelersiniz."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {academyFormats.map((f, i) => {
              const Icon = formatIcons[i % formatIcons.length];
              return (
                <Reveal key={f.title} delay={(i % 8) * 0.05}>
                  <div className="glass-panel rounded-sm p-6 h-full transition-all duration-300 hover:border-gold-500/30">
                    <Icon size={22} className="text-gold-500" strokeWidth={1.5} />
                    <h3 className="mt-4 text-sm font-semibold text-white leading-snug">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/45 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* COURSE STRUCTURE */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <SectionHeading
            eyebrow="Standart Eğitim Şablonu"
            title="Her Modül Aynı Titiz Yapıyı İzler"
            desc="Problemin tanımından sertifikaya kadar 10 bölümlük tutarlı bir öğrenme deneyimi."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-4">
            {courseStructure.map((step, i) => (
              <Reveal key={step.step} delay={(i % 10) * 0.04}>
                <div className="card-premium h-full">
                  <span className="font-display text-2xl text-gold-500">{step.step}</span>
                  <h3 className="mt-4 text-sm font-semibold text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative">
          <SectionHeading
            eyebrow="Eğitim Kütüphanesi"
            title="Altı Kategori, Uçtan Uca Operasyonel Yetkinlik"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {academyCategories.map((cat, i) => (
              <Reveal key={cat.key} delay={(i % 6) * 0.07}>
                <div className="card-premium h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-3xl text-gold-500">{cat.letter}</span>
                    <span className="text-xs uppercase tracking-widest2 text-white/35 mt-2">
                      {cat.count} Eğitim
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white leading-snug">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/50 leading-relaxed">{cat.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cat.modules.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/55"
                      >
                        {m}
                      </span>
                    ))}
                    {cat.more && (
                      <span className="rounded-full border border-gold-500/30 bg-gold-500/[0.06] px-2.5 py-1 text-[11px] text-gold-400">
                        + diğerleri
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI AVATAR CTA */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Bizi Farklılaştıran Alan"
              title="Her Eğitim, AI Avatar Tarafından Türkçe ve İngilizce Anlatılır"
              desc="Kayıt stüdyosu değil, dijital avatar teknolojisiyle üretilen çok dilli video eğitimleri. Ölçeklenebilir, tutarlı ve sürekli güncellenebilir."
            />
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <Link href="/akademi/ai-avatar" className="btn-primary w-full sm:w-auto">
                AI Avatar Akademisini Keşfedin <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Ekibinize Uygun Öğrenme Yolunu Birlikte Tasarlayalım"
        desc="Tekil modül satın alımından kurumsal akademi lisansına kadar, ihtiyacınıza uygun bir başlangıç noktası belirleyelim."
      />
    </>
  );
}

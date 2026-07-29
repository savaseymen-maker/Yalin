import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
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
import AnimatedCounter from "@/components/AnimatedCounter";
import { accentChip } from "@/lib/theme";
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
      <section className="section-pad bg-white">
        <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { value: academyTotalModules, suffix: "+", label: "Eğitim Modülü" },
            { value: academyCategories.length, suffix: "", label: "Ana Kategori" },
            { value: 2, suffix: "", label: "Dil (TR / EN)" },
            { value: 10, suffix: "", label: "Bölümlük Standart Şablon" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div>
                <p className={`font-display font-extrabold text-3xl md:text-4xl ${accentChip(i).text}`}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs md:text-sm text-ink-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="bg-paper-100 !py-14 md:!py-16 px-6 md:px-12 lg:px-20">
        <div className="container-max">
          <Reveal>
            <div className="glass-panel rounded-md !border-ember-500/30 !bg-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-start gap-5">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ember-50 border border-ember-100 animate-pulse-glow">
                  <Download size={20} className="text-ember-600" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-ember-600 font-bold mb-2">
                    Ücretsiz Örnek Modül
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-ink-900 leading-snug">
                    5S Eğitimini Ücretsiz Deneyin
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed max-w-xl">
                    PDF kitap, kontrol listesi ve Excel şablonuyla birlikte tam bir modülü satın
                    almadan önce inceleyin.
                  </p>
                </div>
              </div>
              <Link href="/iletisim" className="btn-primary shrink-0 w-full md:w-auto">
                Ücretsiz Örnek Modülü İste <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORMATS */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Her Eğitim İçin Tam Paket"
            title="Tek Bir Modül, Sekiz Farklı Öğrenme Aracıyla Gelir"
            desc="Bir eğitimi yalnızca izlemezsiniz; uygular, test eder ve belgelersiniz."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {academyFormats.map((f, i) => {
              const Icon = formatIcons[i % formatIcons.length];
              const chip = accentChip(i);
              return (
                <Reveal key={f.title} delay={(i % 8) * 0.05}>
                  <div className="card-premium h-full">
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${chip.bg} ${chip.border}`}>
                      <Icon size={20} className={chip.text} strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-ink-900 leading-snug">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-xs text-ink-500 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* COURSE STRUCTURE */}
      <section className="section-pad bg-paper-100">
        <div className="container-max">
          <SectionHeading
            eyebrow="Standart Eğitim Şablonu"
            title="Her Modül Aynı Titiz Yapıyı İzler"
            desc="Problemin tanımından sertifikaya kadar 10 bölümlük tutarlı bir öğrenme deneyimi."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-4">
            {courseStructure.map((step, i) => {
              const chip = accentChip(i);
              return (
                <Reveal key={step.step} delay={(i % 10) * 0.04}>
                  <div className="card-premium h-full">
                    <span className={`font-display font-extrabold text-2xl ${chip.text}`}>{step.step}</span>
                    <h3 className="mt-4 text-sm font-semibold text-ink-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-ink-500 leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Eğitim Kütüphanesi"
            title="Altı Kategori, Uçtan Uca Operasyonel Yetkinlik"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {academyCategories.map((cat, i) => {
              const chip = accentChip(i);
              return (
                <Reveal key={cat.key} delay={(i % 6) * 0.07}>
                  <div className="card-premium h-full flex flex-col">
                    <div className="flex items-start justify-between">
                      <span className={`font-display font-extrabold text-3xl ${chip.text}`}>{cat.letter}</span>
                      <span className={`text-xs uppercase tracking-widest2 mt-2 rounded-full px-2.5 py-1 border ${chip.bg} ${chip.border} ${chip.text}`}>
                        {cat.count} Eğitim
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-ink-900 leading-snug">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-xs text-ink-500 leading-relaxed">{cat.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {cat.modules.map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-ink-900/10 bg-paper-100 px-2.5 py-1 text-[11px] text-ink-600"
                        >
                          {m}
                        </span>
                      ))}
                      {cat.more && (
                        <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${chip.bg} ${chip.border} ${chip.text}`}>
                          + diğerleri
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI AVATAR CTA */}
      <section className="section-pad bg-paper-100">
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

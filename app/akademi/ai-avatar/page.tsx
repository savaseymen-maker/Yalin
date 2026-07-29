import { Languages, Clock, Presentation, LineChart, Sparkles, Mic2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { accentChip } from "@/lib/theme";
import { avatarLanguages, avatarVideoLengths, avatarCapabilities, avatarQualityPoints } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Avatar Akademisi",
  description:
    "Çok dilli, dijital avatar tarafından anlatılan operasyonel mükemmellik eğitim videoları.",
};

const capabilityIcons = [Presentation, LineChart, LineChart, Sparkles];

export default function AiAvatarAcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Avatar Akademisi"
        title="Bizi Rakiplerimizden Ayıran Alan: Dijital Avatarla Anlatılan Eğitimler"
        desc="Her eğitim, klasik bir kamera kaydı değil; stüdyo kalitesinde seslendirilmiş, Türkçe ve İngilizce olarak üretilen bir dijital avatar tarafından anlatılır. Örnek: kurucu avatarımız üzerinden anlatılan modüller."
      />

      {/* LANGUAGES */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="İki Dil, Üç Aksan Seçeneği"
            title="Yerel Derinlik, Küresel Erişim"
            desc="Aynı içerik, hedef kitleye göre farklı dil ve aksan seçenekleriyle üretilir."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {avatarLanguages.map((lang, i) => {
              const chip = accentChip(i);
              return (
                <Reveal key={lang.title} delay={i * 0.08}>
                  <div className="card-premium h-full">
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${chip.bg} ${chip.border}`}>
                      <Languages size={20} className={chip.text} strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink-900 leading-snug">
                      {lang.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-500 leading-relaxed">{lang.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO LENGTHS */}
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative">
          <SectionHeading
            dark
            eyebrow="Esnek Format"
            title="Konuya Göre Ölçeklenen Video Süreleri"
            desc="Hızlı bir hatırlatmadan derinlemesine bir uzmanlık moduluna kadar, her içerik doğru uzunlukta tasarlanır."
          />
          <div className="mt-16 flex flex-wrap gap-4">
            {avatarVideoLengths.map((len, i) => (
              <Reveal key={len} delay={i * 0.06}>
                <div className="glass-panel-dark rounded-full px-8 py-5 flex items-center gap-3 animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                  <Clock size={18} className="text-ember-400" strokeWidth={1.5} />
                  <span className="font-display font-bold text-xl text-white">{len}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Avatar Ne Yapar?"
            title="Klasik Bir Video Anlatıcısından Çok Daha Fazlası"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {avatarCapabilities.map((cap, i) => {
              const Icon = capabilityIcons[i % capabilityIcons.length];
              const chip = accentChip(i);
              return (
                <Reveal key={cap.title} delay={i * 0.07}>
                  <div className="card-premium h-full">
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${chip.bg} ${chip.border}`}>
                      <Icon size={20} className={chip.text} strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink-900 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-500 leading-relaxed">{cap.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section-pad bg-paper-100">
        <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Prodüksiyon Standardı"
              title="Stüdyo Kalitesinde Seslendirme, Tutarlı Marka Kimliği"
            />
            <Reveal delay={0.15}>
              <div className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ember-50 border border-ember-100">
                <Mic2 size={26} className="text-ember-600" strokeWidth={1.5} />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-5">
            {avatarQualityPoints.map((p, i) => {
              const chip = accentChip(i);
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="flex gap-5 border-b border-ink-900/10 pb-6">
                    <span className={`font-display font-extrabold text-2xl shrink-0 w-10 ${chip.text}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink-900 leading-snug">{p.title}</h3>
                      <p className="mt-2 text-sm text-ink-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Kurumunuza Özel Avatar Eğitimleri Üretelim"
        desc="İlk 10 modülden başlayarak, ekibinizin diline ve markanıza uygun bir avatar akademisi tasarlayalım."
      />
    </>
  );
}

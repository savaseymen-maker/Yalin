import { Languages, Clock, Presentation, LineChart, Sparkles, Mic2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
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
      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <SectionHeading
            eyebrow="İki Dil, Üç Aksan Seçeneği"
            title="Yerel Derinlik, Küresel Erişim"
            desc="Aynı içerik, hedef kitleye göre farklı dil ve aksan seçenekleriyle üretilir."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {avatarLanguages.map((lang, i) => (
              <Reveal key={lang.title} delay={i * 0.08}>
                <div className="card-premium h-full">
                  <Languages size={22} className="text-gold-500" strokeWidth={1.5} />
                  <h3 className="mt-4 text-base font-semibold text-white leading-snug">
                    {lang.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">{lang.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO LENGTHS */}
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative">
          <SectionHeading
            eyebrow="Esnek Format"
            title="Konuya Göre Ölçeklenen Video Süreleri"
            desc="Hızlı bir hatırlatmadan derinlemesine bir uzmanlık moduluna kadar, her içerik doğru uzunlukta tasarlanır."
          />
          <div className="mt-16 flex flex-wrap gap-4">
            {avatarVideoLengths.map((len, i) => (
              <Reveal key={len} delay={i * 0.06}>
                <div className="glass-panel rounded-full px-8 py-5 flex items-center gap-3">
                  <Clock size={18} className="text-gold-500" strokeWidth={1.5} />
                  <span className="font-display text-xl text-white">{len}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <SectionHeading
            eyebrow="Avatar Ne Yapar?"
            title="Klasik Bir Video Anlatıcısından Çok Daha Fazlası"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {avatarCapabilities.map((cap, i) => {
              const Icon = capabilityIcons[i % capabilityIcons.length];
              return (
                <Reveal key={cap.title} delay={i * 0.07}>
                  <div className="card-premium h-full">
                    <Icon size={22} className="text-gold-500" strokeWidth={1.5} />
                    <h3 className="mt-4 text-base font-semibold text-white leading-snug">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/50 leading-relaxed">{cap.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Prodüksiyon Standardı"
              title="Stüdyo Kalitesinde Seslendirme, Tutarlı Marka Kimliği"
            />
            <Reveal delay={0.15}>
              <div className="mt-8">
                <Mic2 size={28} className="text-gold-500" strokeWidth={1.5} />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-5">
            {avatarQualityPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex gap-5 border-b border-white/10 pb-6">
                  <span className="font-display text-2xl text-gold-500 shrink-0 w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/50 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
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

import { Bot, MessageCircleQuestion, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { aiAssistantNames, aiAssistantQuestions, aiAssistantSteps } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Asistan",
  description:
    "Şirketinizin kendi verileriyle çalışan, operasyonel sorulara anında yanıt veren yapay zekâ destekli operasyon asistanı.",
};

export default function AiAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Destekli Operasyonel Asistan"
        title="Eğitimi Tamamlayan Her Ekip, Kendi Operasyon GPT'sine Sahip Olur"
        desc="Akademi yol haritamızın son aşaması: şirketinizin kendi süreç verileriyle beslenen, sahadan çıkmadan soru sorabileceğiniz bir yapay zekâ operasyon asistanı."
      />

      {/* NAMING CONCEPT */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <SectionHeading
            eyebrow="Konsept"
            title="Operasyonel Mükemmellik GPT"
            desc="Kuruma özel isimlendirilebilen, sürekli öğrenen bir dijital uzman."
          />
          <div className="mt-14 flex flex-wrap gap-4">
            {aiAssistantNames.map((name, i) => (
              <Reveal key={name} delay={i * 0.08}>
                <div className="glass-panel rounded-full px-7 py-4 flex items-center gap-3">
                  <Bot size={18} className="text-gold-500" strokeWidth={1.5} />
                  <span className="text-sm text-white/80">{name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE QUESTIONS */}
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative">
          <SectionHeading
            eyebrow="Örnek Sorular"
            title="Sahada Aklınıza Gelen Soruyu Anında Sorun"
            desc="Asistan, teoriyi değil; sizin verinizi, sizin süreçlerinizi referans alarak yanıtlar."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            {aiAssistantQuestions.map((q, i) => (
              <Reveal key={q} delay={i * 0.08}>
                <div className="card-premium h-full flex items-start gap-4">
                  <MessageCircleQuestion size={22} className="text-gold-500 shrink-0" strokeWidth={1.5} />
                  <p className="text-base text-white/75 leading-relaxed">&ldquo;{q}&rdquo;</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <SectionHeading
            eyebrow="Nasıl Devreye Alınır?"
            title="Eğitimden Kendi Bilgi Tabanına Uzanan Üç Adım"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {aiAssistantSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="card-premium h-full">
                  <span className="font-display text-3xl text-gold-500">0{i + 1}</span>
                  <h3 className="mt-5 text-base font-semibold text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative overflow-hidden bg-navy-gradient py-28 md:py-36">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative px-6 md:px-12 lg:px-20 text-center">
          <Reveal>
            <Sparkles size={28} className="text-gold-500 mx-auto mb-8" strokeWidth={1.5} />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-display text-balance mx-auto max-w-4xl text-3xl md:text-5xl leading-[1.2] text-white">
              Asistan, deneyiminizin yerini almaz; <span className="text-gold-500">onu her an erişilebilir kılar.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ekibinizin İlk AI Operasyon Asistanı İçin Yol Haritası Çıkaralım"
        desc="Akademi eğitimlerinden başlayarak, şirketinize özel bir bilgi tabanına giden adımları birlikte planlayalım."
      />
    </>
  );
}

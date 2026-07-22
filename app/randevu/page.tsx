import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CheckupForm from "@/components/CheckupForm";
import { doctorStages } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İşletme Check-Up Talep Et",
  description:
    "İşletmenizin operasyonel olgunluğunu 14 boyutta ölçen İşletme Check-Up sürecini talep edin.",
};

const included = [
  "14 boyutta operasyonel olgunluk skoru",
  "Saha gözlemi ve yönetim görüşmeleri",
  "Veri tabanlı kök neden ön analizi",
  "Yönetim kuruluna sunulabilir teşhis raporu",
  "Önceliklendirilmiş Kurtuluş Reçetesi taslağı",
  "Ücretsiz 45 dakikalık ön görüşme",
];

export default function BookCheckupPage() {
  return (
    <>
      <PageHero
        eyebrow="İşletme Check-Up Talep Et"
        title="Görünmeyen Kayıplarınızı Rakamlarla Görün"
        desc="İşletme Check-Up, 14 kritik boyutta operasyonel olgunluğunuzu ölçen, saha gözlemi ve veri analizine dayanan kapsamlı bir teşhis sürecidir."
      />

      <section className="section-pad bg-charcoal-900">
        <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Süreç Nasıl İşler"
              title="Teşhis, Yedi Aşamada İlerler"
              desc="İşletme Doktoru felsefemiz doğrultusunda, talebiniz sonrasında aşağıdaki aşamalarla ilerleriz."
            />
            <div className="mt-10 space-y-5">
              {doctorStages.slice(0, 4).map((stage) => (
                <Reveal key={stage.step}>
                  <div className="flex gap-4 items-start">
                    <span className="font-display text-xl text-gold-500 w-8 shrink-0">
                      {stage.step}
                    </span>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{stage.title}</h4>
                      <p className="text-white/45 text-sm mt-1 leading-relaxed">{stage.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 glass-panel rounded-sm p-7">
                <p className="text-xs uppercase tracking-wider text-white/50 mb-4">
                  Check-Up Kapsamı
                </p>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                      <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <CheckupForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

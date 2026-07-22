import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { methodologyGroups } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodolojiler",
  description:
    "Yalın Düşünce, Six Sigma ve Kurumsal Risk Yönetimi çerçevelerinden oluşan 20 metodolojinin profesyonel açıklaması.",
};

export default function MethodologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Metodolojiler"
        title="Uyguladığımız Bilimsel ve Yönetsel Çerçeveler"
        desc="Sezgiye değil, kanıtlanmış metodolojilere dayanıyoruz. Her araç, teşhis sürecinin belirli bir aşamasında amaca yönelik olarak kullanılır."
      />

      {methodologyGroups.map((group, gi) => (
        <section
          key={group.group}
          className={`section-pad ${gi % 2 === 0 ? "bg-charcoal-900" : "bg-navy-gradient relative overflow-hidden"}`}
        >
          {gi % 2 !== 0 && <div className="absolute inset-0 bg-noise opacity-30" />}
          <div className="container-max relative">
            <SectionHeading eyebrow={`0${gi + 1}`} title={group.group} />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {group.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 6) * 0.06}>
                  <div className="flex gap-5 border-b border-white/10 pb-8">
                    <span className="font-display text-2xl text-gold-500 shrink-0 w-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Doğru Metodoloji, Doğru Problem İçin Seçilir"
        desc="Hangi metodolojinin işletmenizin ihtiyacına uygun olduğunu belirlemek için önce birlikte teşhis sürecini başlatalım."
      />
    </>
  );
}

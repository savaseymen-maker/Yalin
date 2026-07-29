import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { accentChip } from "@/lib/theme";
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

      {methodologyGroups.map((group, gi) => {
        const chip = accentChip(gi);
        return (
          <section key={group.group} className={`section-pad ${gi % 2 === 0 ? "bg-white" : "bg-paper-100"}`}>
            <div className="container-max">
              <SectionHeading eyebrow={`0${gi + 1}`} title={group.group} />
              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {group.items.map((item, i) => (
                  <Reveal key={item.title} delay={(i % 6) * 0.06}>
                    <div className="flex gap-5 border-b border-ink-900/10 pb-8">
                      <span className={`font-display font-extrabold text-2xl shrink-0 w-10 ${chip.text}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-ink-900 leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-ink-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Doğru Metodoloji, Doğru Problem İçin Seçilir"
        desc="Hangi metodolojinin işletmenizin ihtiyacına uygun olduğunu belirlemek için önce birlikte teşhis sürecini başlatalım."
      />
    </>
  );
}

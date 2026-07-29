import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { accentChip } from "@/lib/theme";
import { serviceGroups } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Operasyonel Mükemmellik, Six Sigma, Risk Yönetimi, Standardizasyon ve Yönetim Danışmanlığı alanlarında sunduğumuz 17 stratejik hizmet.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title="İşletmenizin Her Katmanına Nüfuz Eden Danışmanlık Hizmetleri"
        desc="Fabrika sahasından yönetim kurulu toplantı odasına kadar, operasyonel mükemmelliğin her boyutunu kapsayan bütünleşik bir hizmet portföyü sunuyoruz."
      />

      {serviceGroups.map((group, gi) => {
        const chip = accentChip(gi);
        return (
          <section key={group.group} className={`section-pad ${gi % 2 === 0 ? "bg-white" : "bg-paper-100"}`}>
            <div className="container-max">
              <SectionHeading eyebrow={`0${gi + 1}`} title={group.group} />
              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.07}>
                    <div className="card-premium h-full group">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-ink-900 leading-snug max-w-[85%]">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className={`${chip.text} opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 shrink-0`}
                        />
                      </div>
                      <p className="mt-3 text-sm text-ink-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Hangi Hizmetin Size Uygun Olduğundan Emin Değil Misiniz?"
        desc="İşletme Check-Up ile önce ihtiyacınızı teşhis edelim, ardından size özel hizmet portföyünü birlikte tasarlayalım."
      />
    </>
  );
}

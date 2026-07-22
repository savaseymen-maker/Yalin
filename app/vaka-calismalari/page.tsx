import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { caseStudies } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vaka Çalışmaları",
  description:
    "Demir Çelik, Otomotiv ve Lojistik sektörlerinden gerçek teşhis ve tedavi vakaları: problem, kök neden, çözüm ve finansal etki.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Vaka Çalışmaları"
        title="Teşhisten Ölçülebilir Sonuca: Gerçek Vakalar"
        desc="Her vaka çalışması aynı disiplinle ilerler: problem, teşhis, veri analizi, kök neden, çözüm ve doğrulanmış finansal etki."
      />

      <section className="section-pad bg-charcoal-900">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.08}>
              <Link
                href={`/vaka-calismalari/${cs.slug}`}
                className="card-premium h-full flex flex-col group"
              >
                <span className="eyebrow">{cs.industry}</span>
                <h3 className="mt-4 font-display text-2xl text-white leading-snug flex-1">
                  {cs.title}
                </h3>
                <p className="mt-4 text-sm text-white/50 leading-relaxed">{cs.summary}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-gold-500">
                  Vakayı İncele
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Sıradaki Başarı Hikayesi Sizin İşletmeniz Olabilir"
        desc="Vaka çalışmalarımızdaki teşhis disiplinini kendi işletmenizde uygulamak için İşletme Check-Up ile başlayın."
      />
    </>
  );
}

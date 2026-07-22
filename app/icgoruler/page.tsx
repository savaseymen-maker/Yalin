import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { insights } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İçgörüler",
  description:
    "Gizli maliyetler, Yalın Düşünce, Six Sigma, Risk Yönetimi ve Liderlik üzerine yönetim odaklı içgörüler.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="İçgörüler"
        title="Yönetim Kurulları İçin Analitik Bakış Açıları"
        desc="Operasyonel mükemmellik, ekonomik düşünce ve risk yönetimi üzerine düzenli olarak yayınladığımız yönetim odaklı analizler."
      />

      <section className="section-pad bg-charcoal-900">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 6) * 0.06}>
              <Link
                href={`/icgoruler/${post.slug}`}
                className="card-premium h-full flex flex-col group"
              >
                <span className="eyebrow">{post.topic}</span>
                <h3 className="mt-4 text-lg font-semibold text-white leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-white/40">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {post.readTime} okuma
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-gold-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

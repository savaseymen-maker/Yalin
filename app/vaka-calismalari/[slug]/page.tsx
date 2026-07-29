import { notFound } from "next/navigation";
import {
  Stethoscope,
  Search,
  FlaskConical,
  Target,
  Pill,
  LineChart,
  Factory,
  Lightbulb,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { accentChip } from "@/lib/theme";
import { caseStudies } from "@/lib/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

const sections = [
  { key: "problem", label: "Problem", icon: Search },
  { key: "diagnosis", label: "Teşhis", icon: Stethoscope },
  { key: "dataAnalysis", label: "Veri Analizi", icon: FlaskConical },
  { key: "rootCause", label: "Kök Neden", icon: Target },
  { key: "solution", label: "Çözüm", icon: Pill },
] as const;

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient pt-40 pb-24 md:pt-48 md:pb-28">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-ember-500/15 blur-3xl animate-float" />
        <div className="container-max relative px-6 md:px-12 lg:px-20">
          <Reveal>
            <p className="eyebrow-invert mb-5">Vaka Çalışması · {cs.industry}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-extrabold text-balance max-w-4xl text-3xl md:text-5xl leading-[1.12] tracking-tight text-white">
              {cs.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">
              {cs.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sections.map((s, i) => {
            const chip = accentChip(i);
            return (
              <Reveal key={s.key} delay={i * 0.07}>
                <div className="card-premium h-full">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full border ${chip.bg} ${chip.border}`}>
                      <s.icon size={17} className={chip.text} strokeWidth={1.5} />
                    </div>
                    <h3 className={`text-sm uppercase tracking-wider font-bold ${chip.text}`}>
                      {s.label}
                    </h3>
                  </div>
                  <p className="mt-4 text-ink-600 leading-relaxed">
                    {cs[s.key as keyof typeof cs] as string}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass-panel-dark rounded-sm p-10 h-full">
              <LineChart size={26} className="text-ember-400" strokeWidth={1.5} />
              <h3 className="mt-5 text-sm uppercase tracking-wider text-white/50 font-semibold">
                Finansal Etki
              </h3>
              <p className="mt-4 font-display font-extrabold text-2xl md:text-3xl text-white leading-snug">
                {cs.financialImpact}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass-panel-dark rounded-sm p-10 h-full">
              <Factory size={26} className="text-steel-400" strokeWidth={1.5} />
              <h3 className="mt-5 text-sm uppercase tracking-wider text-white/50 font-semibold">
                Operasyonel Etki
              </h3>
              <p className="mt-4 font-display font-extrabold text-2xl md:text-3xl text-white leading-snug">
                {cs.operationalImpact}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper-100">
        <div className="container-max">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Lightbulb size={28} className="text-ember-500 mx-auto" strokeWidth={1.5} />
              <p className="eyebrow mt-5 mb-4">Çıkarılan Ders</p>
              <p className="font-display font-extrabold text-balance text-2xl md:text-4xl leading-[1.3] text-ink-900">
                &ldquo;{cs.lessons}&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

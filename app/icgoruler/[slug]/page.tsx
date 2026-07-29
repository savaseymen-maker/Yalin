import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { insights } from "@/lib/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function InsightDetail({ params }: { params: { slug: string } }) {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-ember-500/15 blur-3xl animate-float" />
        <div className="container-max relative px-6 md:px-12 lg:px-20">
          <Reveal>
            <Link
              href="/icgoruler"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-ember-400 transition-colors mb-8"
            >
              <ArrowLeft size={15} /> Tüm İçgörüler
            </Link>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="eyebrow-invert mb-5">{post.topic}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display font-extrabold text-balance max-w-3xl text-3xl md:text-5xl leading-[1.12] tracking-tight text-white">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-7 flex items-center gap-2 text-sm text-white/40">
              <Clock size={14} /> {post.readTime} okuma
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-max max-w-3xl">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-lg text-ink-700 leading-relaxed mb-6">{para}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

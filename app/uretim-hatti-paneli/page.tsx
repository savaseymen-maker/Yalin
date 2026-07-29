import {
  Gauge,
  Timer,
  Zap,
  CheckCircle2,
  Package,
  AlertTriangle,
  XCircle,
  Flame,
  TrendingUp,
  TrendingDown,
  Radio,
  Info,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { accentChipDark } from "@/lib/theme";
import {
  productionLineKpis,
  productionLineStations,
  productionLineOeeTrend,
  productionLineDowntimeReasons,
  productionLineAlerts,
} from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Üretim Hattı Yönetim Panosu",
  description:
    "OEE, duruş, kalite ve enerji verilerini tek ekranda birleştiren örnek bir üretim hattı yönetici gösterge panosu. Yalın'ın Yönetici Gösterge Panelleri hizmetinin canlı bir örneği.",
};

const kpiIcons: Record<string, typeof Gauge> = {
  oee: Gauge,
  availability: Timer,
  performance: Zap,
  quality: CheckCircle2,
  output: Package,
  downtime: AlertTriangle,
  scrap: XCircle,
  energy: Flame,
};

const statusStyles: Record<string, { color: string; label: string; ring: string }> = {
  ok: { color: "#7FA6C9", label: "Çalışıyor", ring: "ring-steel-400/40" },
  warning: { color: "#F2670C", label: "Yavaşlama", ring: "ring-ember-500/40" },
  stopped: { color: "#B45757", label: "Durdu", ring: "ring-[#B45757]/40" },
};

const severityStyles: Record<string, { color: string; icon: typeof AlertTriangle }> = {
  critical: { color: "#B45757", icon: XCircle },
  warning: { color: "#F2670C", icon: AlertTriangle },
  info: { color: "#7FA6C9", icon: Info },
};

function buildSparkline(values: number[], width: number, height: number, pad = 6) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = (width - pad * 2) / (values.length - 1);
  const points = values.map((v, i) => {
    const x = pad + i * step;
    const y = pad + (1 - (v - min) / range) * (height - pad * 2);
    return [x, y] as const;
  });
  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${points[points.length - 1][0].toFixed(1)},${height - pad} L${points[0][0].toFixed(1)},${height - pad} Z`;
  return { line, area, points };
}

export default function ProductionLineDashboardPage() {
  const spark = buildSparkline(productionLineOeeTrend, 560, 160);
  const maxDowntime = Math.max(...productionLineDowntimeReasons.map((d) => d.minutes));

  return (
    <>
      <PageHero
        eyebrow="Canlı Demo · Yönetici Gösterge Panelleri"
        title="Üretim Hattınızın Nabzını Tek Ekranda Tutan Bir Gösterge Panosu"
        desc="Bu, Dijital Yönetim Sistemleri ve Yönetici Gösterge Panelleri hizmetimiz kapsamında müşterilerimiz için kurduğumuz panoların örnek bir versiyonudur. OEE, duruş, kalite ve enerji verilerini tek bakışta yönetilebilir hale getiriyoruz. Aşağıdaki veriler gösterim amaçlı örnek verilerdir."
      />

      {/* KPI GRID */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeading
              dark
              eyebrow="Hat A · Vardiya 2"
              title="Temel Performans Göstergeleri"
              desc="Hedefe karşı gerçekleşen değerler ve önceki vardiyaya göre değişim."
            />
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-white/40 pb-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
              </span>
              Örnek Veri
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {productionLineKpis.map((kpi, i) => {
              const Icon = kpiIcons[kpi.key];
              const good = kpi.invert ? kpi.delta <= 0 : kpi.delta >= 0;
              return (
                <Reveal key={kpi.key} delay={i * 0.05}>
                  <div className="card-premium-dark rounded-sm h-full">
                    <div className="flex items-start justify-between">
                      <Icon size={20} className={accentChipDark(i)} strokeWidth={1.5} />
                      <span
                        className={`flex items-center gap-1 text-xs font-medium ${
                          good ? "text-steel-400" : "text-[#C97A7A]"
                        }`}
                      >
                        {good ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
                        {kpi.delta > 0 ? "+" : ""}
                        {kpi.delta}
                      </span>
                    </div>
                    <p className="mt-5 font-display font-extrabold text-3xl text-white">
                      {kpi.value}
                      <span className="text-base text-white/40 ml-1">{kpi.unit}</span>
                    </p>
                    <p className="mt-2 text-xs text-white/50 leading-relaxed">{kpi.label}</p>
                    <p className="mt-3 pt-3 border-t border-white/10 text-[11px] text-white/35">
                      Hedef: {kpi.target} {kpi.unit}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTION LINE FLOW */}
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-ember-500/10 blur-3xl animate-float" />
        <div className="container-max relative">
          <SectionHeading
            dark
            eyebrow="Hat Akışı"
            title="İstasyon Bazında Anlık Durum"
            desc="Her istasyonun çalışma durumu ve saatlik çıktısı, sahadaki anormalliği yönetim toplantısını beklemeden görünür kılar."
          />

          <Reveal delay={0.1}>
            <div className="mt-14 glass-panel-dark rounded-sm p-6 md:p-10 overflow-x-auto">
              <div className="flex items-stretch gap-0 min-w-[900px]">
                {productionLineStations.map((station, i) => {
                  const style = statusStyles[station.status];
                  return (
                    <div key={station.name} className="flex items-stretch flex-1">
                      <div className="flex-1 px-3">
                        <div
                          className={`rounded-sm border border-white/[0.08] bg-white/[0.03] p-5 ring-1 ${style.ring} transition-all duration-300 hover:bg-white/[0.05]`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="h-2.5 w-2.5 rounded-full shrink-0"
                              style={{ backgroundColor: style.color }}
                            />
                            <span className="text-[11px] uppercase tracking-wider" style={{ color: style.color }}>
                              {style.label}
                            </span>
                          </div>
                          <h3 className="mt-4 text-sm font-semibold text-white leading-snug">
                            {station.name}
                          </h3>
                          <p className="mt-2 font-display font-extrabold text-2xl text-white">
                            {station.throughput}
                            <span className="text-sm text-white/40 ml-1">adet/sa</span>
                          </p>
                        </div>
                      </div>
                      {i < productionLineStations.length - 1 && (
                        <div className="flex items-center px-1 shrink-0">
                          <div className="h-px w-6 bg-gradient-to-r from-white/20 to-white/5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TREND + DOWNTIME PARETO */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass-panel-dark rounded-sm p-8 h-full">
              <p className="eyebrow-invert mb-2">Trend</p>
              <h3 className="font-display font-extrabold text-2xl text-white">Son 12 Vardiyada OEE</h3>
              <p className="mt-2 text-sm text-white/50">
                Kaizen döngülerinin etkisiyle OEE&apos;de kademeli iyileşme eğilimi.
              </p>
              <svg
                viewBox="0 0 560 160"
                className="mt-6 w-full h-auto"
                preserveAspectRatio="none"
                role="img"
                aria-label="Son 12 vardiyada OEE trendi"
              >
                <defs>
                  <linearGradient id="oeeArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F2670C" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#F2670C" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={spark.area} fill="url(#oeeArea)" />
                <path d={spark.line} fill="none" stroke="#F2670C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {spark.points.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r={i === spark.points.length - 1 ? 4 : 2.5} fill="#F2670C" />
                ))}
              </svg>
              <div className="flex items-center justify-between text-[11px] text-white/35 mt-1">
                <span>V-11</span>
                <span>Güncel</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel-dark rounded-sm p-8 h-full">
              <p className="eyebrow-invert mb-2">Pareto Analizi</p>
              <h3 className="font-display font-extrabold text-2xl text-white">Duruş Nedenleri (dk/hafta)</h3>
              <p className="mt-2 text-sm text-white/50">
                En büyük kayıp kaynağı reaktif bakımdan geliyor — TPM önceliği burada.
              </p>
              <div className="mt-8">
                {productionLineDowntimeReasons.map((d) => (
                  <div key={d.reason} className="py-3 border-b border-white/[0.07] last:border-none">
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-white/80">{d.reason}</span>
                      <span className="text-white/40 text-xs">{d.minutes} dk</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-ember-500"
                        style={{ width: `${(d.minutes / maxDowntime) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ALERTS FEED */}
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-steel-500/10 blur-3xl animate-pulse-glow" />
        <div className="container-max relative">
          <SectionHeading
            dark
            eyebrow="Erken Uyarı"
            title="Anormallik Akışı"
            desc="Görsel yönetim ilkesi gereği, sapmalar raporlanmayı beklemeden ekranda görünür hale gelir."
          />
          <Reveal delay={0.1}>
            <div className="mt-14 glass-panel-dark rounded-sm divide-y divide-white/[0.07]">
              {productionLineAlerts.map((alert) => {
                const s = severityStyles[alert.severity];
                const Icon = s.icon;
                return (
                  <div key={alert.time + alert.text} className="flex items-start gap-4 p-5 md:p-6">
                    <Icon size={18} className="mt-0.5 shrink-0" style={{ color: s.color }} strokeWidth={1.75} />
                    <div className="flex-1">
                      <p className="text-sm text-white/85 leading-relaxed">{alert.text}</p>
                    </div>
                    <span className="text-xs text-white/35 shrink-0 flex items-center gap-1.5">
                      <Radio size={12} />
                      {alert.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Bu Panoyu Kendi Sahanız İçin Kuralım"
        desc="Fabrika Check-Up ile mevcut veri altyapınızı değerlendirir, işletmenize özel bir yönetici gösterge panosu tasarlarız."
      />
    </>
  );
}

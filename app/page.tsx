import Link from "next/link";
import {
  ArrowRight,
  Factory,
  ClipboardList,
  Warehouse,
  Truck,
  Wrench,
  ShoppingCart,
  BadgeCheck,
  Building2,
  Zap,
  Boxes,
  Hourglass,
  RotateCcw,
  TrendingDown,
  GitBranch,
  UserX,
  Gavel,
  Stethoscope,
  Activity,
  FlaskConical,
  Search,
  Pill,
  ShieldCheck,
  Eye,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ScoreBar from "@/components/ScoreBar";
import CTASection from "@/components/CTASection";
import {
  disciplines,
  hiddenCostAreas,
  doctorStages,
  checkupCategories,
  prescriptionItems,
  stats,
} from "@/lib/data";

const hiddenCostIcons = [
  Factory,
  ClipboardList,
  Warehouse,
  Truck,
  Wrench,
  ShoppingCart,
  BadgeCheck,
  Building2,
  Zap,
  Boxes,
  Hourglass,
  RotateCcw,
  TrendingDown,
  GitBranch,
  UserX,
  Gavel,
];

const doctorIcons = [Stethoscope, Search, FlaskConical, Activity, Pill, ShieldCheck, Eye];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-gradient pt-28">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute top-1/4 -right-40 h-[32rem] w-[32rem] rounded-full bg-gold-500/10 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-steel-500/10 blur-3xl" />

        <div className="container-max relative px-6 md:px-12 lg:px-20 py-16">
          <Reveal>
            <p className="eyebrow mb-6">Stratejik Operasyonel Mükemmellik Danışmanlığı</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-balance max-w-5xl text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight text-white">
              İşletmenizdeki <span className="text-gold-500">Görünmeyen Maliyetleri</span> Ortaya
              Çıkarıyoruz.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed">
              Yalın Yönetim, Süreç Geliştirme, Six Sigma, Kurumsal Risk Yönetimi ve Veri
              Analitiğini tek çatı altında birleştirerek işletmelerin gerçek potansiyelini ortaya
              çıkarıyoruz.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-11 flex flex-col sm:flex-row gap-4">
              <Link href="/randevu" className="btn-primary">
                İşletme Check-Up Talep Et <ArrowRight size={16} />
              </Link>
              <Link href="/iletisim" className="btn-secondary">
                Ücretsiz Ön Görüşme
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10 max-w-3xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl md:text-4xl text-white">{s.value}</p>
                  <p className="mt-1 text-xs md:text-sm text-white/45">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <SectionHeading
            eyebrow="Beş Disiplin, Tek Felsefe"
            title="Geleneksel Bir Yalın Danışmanlığı Değiliz"
            desc="Operasyonel mükemmelliği tek bir metodolojiye indirgemiyoruz. Beş farklı disiplini bütünleşik bir yönetim felsefesi altında birleştirerek işletmenizin tüm yönlerini aynı anda teşhis ediyoruz."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {disciplines.map((d, i) => (
              <Reveal key={d.key} delay={i * 0.06}>
                <div className="card-premium h-full">
                  <span className="font-display text-3xl text-gold-500">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white leading-snug">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HIDDEN COST HUNTER */}
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative">
          <SectionHeading
            eyebrow="The Hidden Cost Hunter"
            title="Gizli Maliyetler, İşletmenizin Her Noktasında Saklanır"
            desc="Görünmeyen kayıplar tek bir departmanda yaşamaz. Üretimden yönetim kararlarına kadar uzanan on altı alanda sistematik olarak avlanır, ölçer ve ortaya çıkarırız."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {hiddenCostAreas.map((area, i) => {
              const Icon = hiddenCostIcons[i % hiddenCostIcons.length];
              return (
                <Reveal key={area.title} delay={(i % 8) * 0.05}>
                  <div className="glass-panel rounded-sm p-6 h-full transition-all duration-300 hover:border-gold-500/30">
                    <Icon size={22} className="text-gold-500" strokeWidth={1.5} />
                    <h3 className="mt-4 text-base font-semibold text-white">{area.title}</h3>
                    <p className="mt-2 text-xs text-white/45 leading-relaxed">{area.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* İŞLETME DOKTORU */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <SectionHeading
            eyebrow="İşletme Doktoru"
            title="Danışmanlığa Tıbbi Bir Disiplinle Yaklaşıyoruz"
            desc="Tıpkı bir hastalığın teşhisinde olduğu gibi; belirtiden başlayıp kök nedene ulaşan, kanıta dayalı bir tedavi süreci uyguluyoruz. Her aşama Yalın ve Six Sigma araçlarıyla eşleştirilmiştir."
          />
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-7 gap-4">
            {doctorStages.map((stage, i) => {
              const Icon = doctorIcons[i];
              return (
                <Reveal key={stage.step} delay={i * 0.06} className="lg:col-span-1">
                  <div className="card-premium h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl text-gold-500">{stage.step}</span>
                      <Icon size={20} className="text-steel-400" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-white">{stage.title}</h3>
                    <p className="text-[11px] uppercase tracking-wider text-white/35 mt-0.5">
                      {stage.subtitle}
                    </p>
                    <p className="mt-3 text-xs text-white/50 leading-relaxed grow">{stage.desc}</p>
                    <p className="mt-4 pt-4 border-t border-white/10 text-[11px] text-steel-400">
                      {stage.mapping}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* İŞLETME CHECK-UP */}
      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="İşletme Check-Up"
              title="14 Kritik Boyutta Yönetim Olgunluğunuzu Ölçüyoruz"
              desc="Her kategori, sahadan toplanan veriler ve yönetim görüşmeleriyle 0-100 arası bir olgunluk skoruna dönüştürülür. Sonuç, yönetim kurulunuza sunulabilecek somut bir teşhis raporudur."
            />
            <Reveal delay={0.2}>
              <div className="mt-10">
                <Link href="/randevu" className="btn-primary">
                  Kendi Check-Up&apos;ınızı Talep Edin <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="glass-panel rounded-sm p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest2 text-white/40 mb-2">
                  Örnek Değerlendirme Sonucu
                </p>
                <div>
                  {checkupCategories.map((cat) => (
                    <ScoreBar key={cat.title} title={cat.title} score={cat.score} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KURTULUŞ REÇETESİ */}
      <section className="section-pad bg-charcoal-900">
        <div className="container-max">
          <SectionHeading
            eyebrow="Kurtuluş Reçetesi"
            title="Teşhisten Sonra, Somut Bir Tedavi Planı Gelir"
            desc="Check-Up sonrasında işletmenize özel, önceliklendirilmiş ve finansal etkisi ölçülmüş bir aksiyon planı sunuyoruz."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {prescriptionItems.map((item, i) => (
              <Reveal key={item.title} delay={(i % 5) * 0.06}>
                <div className="card-premium h-full">
                  <span className="font-display text-2xl text-gold-500">0{i + 1}</span>
                  <h3 className="mt-4 text-base font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY QUOTE */}
      <section className="relative overflow-hidden bg-navy-gradient py-28 md:py-36">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative px-6 md:px-12 lg:px-20 text-center">
          <Reveal>
            <p className="eyebrow mb-8">Felsefemiz</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-display text-balance mx-auto max-w-4xl text-3xl md:text-5xl leading-[1.2] text-white">
              &ldquo;Teşhis edemediğiniz şeyi <span className="text-gold-500">iyileştiremezsiniz.</span>&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

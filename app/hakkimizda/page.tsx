import { Award, Compass, Microscope, ShieldCheck, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { accentChip } from "@/lib/theme";
import { disciplines, roadmapPhases } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Beş disiplini tek çatı altında birleştiren, teşhise dayalı operasyonel mükemmellik danışmanlığı felsefemiz.",
};

const principles = [
  {
    icon: Microscope,
    title: "Önce Teşhis, Sonra Reçete",
    desc: "Hiçbir çözümü, kapsamlı bir veri analizi ve kök neden doğrulaması yapılmadan önermeyiz.",
  },
  {
    icon: Target,
    title: "Ölçülebilir Etki",
    desc: "Her proje, finansal ve operasyonel etkisi net biçimde tanımlanmış hedeflerle başlar.",
  },
  {
    icon: Compass,
    title: "Bütünsel Bakış",
    desc: "Süreci, insanı, veriyi ve riski aynı anda ele alan bütünleşik bir metodoloji kullanırız.",
  },
  {
    icon: ShieldCheck,
    title: "Kurumsal Dayanıklılık",
    desc: "İyileştirmenin kalıcı olmasını, risk yönetimi ve standardizasyonla güvence altına alırız.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Operasyonel Mükemmellik İçin Kurulmuş Bir Teşhis Otoritesi"
        desc="Biz geleneksel bir Yalın danışmanlığı değiliz. Beş farklı yönetim disiplinini tek bir teşhis ve tedavi felsefesi altında birleştiren stratejik bir operasyonel mükemmellik firmasıyız."
      />

      <section className="section-pad bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Felsefemiz"
              title="Teşhis Edemediğiniz Şeyi İyileştiremezsiniz"
            />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-ink-600 leading-relaxed text-base">
                <p>
                  Çoğu danışmanlık firması, doğrudan çözümle işe başlar. Biz tam tersini yapıyoruz:
                  önce belirtileri dinler, sonra veriyi analiz eder, ancak kök neden doğrulandıktan
                  sonra bir tedavi planı öneririz.
                </p>
                <p>
                  Bu yaklaşım bizi McKinsey&apos;in stratejik disiplini, Toyota Üretim
                  Sistemi&apos;nin sahaya dayalı pratikliği, Six Sigma Black Belt&apos;in analitik
                  titizliği, Kurumsal Risk Yönetimi&apos;nin ileri görüşlülüğü ve İş Zekasının
                  veri gücünü birleştiren bir konsept haline getirir.
                </p>
                <p>
                  Amacımız yalnızca bir iyileştirme projesi teslim etmek değil; işletmenizin kendi
                  kendini teşhis edebilen, sürekli iyileşen bir organizmaya dönüşmesini sağlamaktır.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {principles.map((p, i) => {
                const chip = accentChip(i);
                return (
                  <Reveal key={p.title} delay={i * 0.08}>
                    <div className="card-premium h-full">
                      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${chip.bg} ${chip.border}`}>
                        <p.icon size={20} className={chip.text} strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-ink-900">{p.title}</h3>
                      <p className="mt-2.5 text-sm text-ink-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="container-max relative">
          <SectionHeading
            dark
            eyebrow="Entegre Model"
            title="Beş Disiplin, Tek Yönetim Felsefesi"
            desc="Bu beş disiplini birbirinden bağımsız hizmetler olarak değil, birbirini besleyen tek bir teşhis-tedavi sistemi olarak uyguluyoruz."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 rounded-sm overflow-hidden">
            {disciplines.map((d, i) => (
              <Reveal key={d.key} delay={i * 0.06} className="h-full">
                <div className="bg-navy-900 h-full p-8">
                  <span className="font-display font-extrabold text-2xl text-ember-400">0{i + 1}</span>
                  <h3 className="mt-5 text-base font-semibold text-white leading-snug">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-xs text-white/45 leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="glass-panel rounded-md p-10 md:p-14 !bg-paper-100">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ember-50 border border-ember-100">
                <Award size={26} className="text-ember-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-ink-900 mt-6 leading-snug">
                Yönetim Kurullarının Güvendiği Danışman
              </h3>
              <p className="mt-5 text-ink-600 leading-relaxed">
                CEO&apos;lar, Fabrika Müdürleri, COO&apos;lar ve Yönetim Kurulları ile doğrudan
                çalışıyor; teknik bulguları stratejik kararlara dönüştürüyoruz. Raporlarımız saha
                dilinde değil, yönetim kurulu dilinde konuşur.
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Kimlerle Çalışıyoruz"
              title="Üst Yönetim İçin Tasarlanmış Bir Danışmanlık Deneyimi"
              desc="Sahadan topladığımız her veri, üst yönetim için anlamlı, aksiyona dönüştürülebilir içgörülere çevrilir. Teknik derinlik ile stratejik netliği aynı anda sunarız."
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper-100">
        <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Farkımız"
              title="20 Yıllık Saha Deneyimini Ölçeklenebilir Bir Platforma Dönüştürüyoruz"
            />
            <Reveal delay={0.12}>
              <div className="mt-8 space-y-5 text-ink-600 leading-relaxed text-base">
                <p>
                  Piyasada birçok kişi yalın üretim araçlarını anlatıyor. Bizim farkımız, bunları
                  yalnızca teorik olarak değil; yıllara dayanan üretim deneyimi, gerçek fabrika
                  verileri, Six Sigma istatistiksel analizleri, risk yönetimi yaklaşımı ve yapay
                  zekâ destekli eğitim teknolojileriyle bir araya getirmemiz.
                </p>
                <p>
                  Eğitim alan kişi sadece &ldquo;araçları öğrenmez&rdquo;; aynı zamanda bunları
                  kendi işletmesinde uygulayabileceği şablonlara, kontrol listelerine, veri
                  analizlerine ve dijital destek sistemlerine de erişir.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink-900/10 rounded-sm overflow-hidden">
              {roadmapPhases.map((phase, i) => (
                <Reveal key={phase.phase} delay={i * 0.08} className="h-full">
                  <div className="bg-white h-full p-8">
                    <p className="text-[11px] uppercase tracking-widest2 text-ember-600 font-bold">
                      {phase.phase} · {phase.period}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-ink-900 leading-snug">
                      {phase.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed">{phase.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

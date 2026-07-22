import Link from "next/link";
import Reveal from "./Reveal";

export default function CTASection({
  title = "İşletmenizde Kaç Puanlık Görünmeyen Kayıp Var?",
  desc = "İşletme Check-Up ile 14 kritik boyutta olgunluğunuzu ölçelim, gizli maliyetlerinizi rakamlarla ortaya koyalım.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-gradient">
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="container-max relative px-0 text-center">
        <Reveal>
          <h2 className="font-display text-balance mx-auto max-w-3xl text-3xl md:text-5xl leading-[1.15] text-white">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-white/60 text-base md:text-lg">{desc}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/randevu" className="btn-primary">
              İşletme Check-Up Talep Et
            </Link>
            <Link href="/iletisim" className="btn-secondary">
              Ücretsiz Ön Görüşme
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

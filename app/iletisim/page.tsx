import { Mail, MapPin, Phone, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "İşletmenizin operasyonel teşhisi için bizimle iletişime geçin.",
};

const info = [
  { icon: MapPin, label: "Ofis", value: "Levent, İstanbul, Türkiye" },
  { icon: Phone, label: "Telefon", value: "+90 212 000 00 00" },
  { icon: Mail, label: "E-posta", value: "iletisim@yalin-consulting.com" },
  { icon: Clock, label: "Çalışma Saatleri", value: "Pazartesi – Cuma, 09:00 – 18:00" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="İşletmenizin Teşhisine Bugün Başlayalım"
        desc="Sorularınız veya İşletme Check-Up talebiniz için bize ulaşın. 1 iş günü içinde geri dönüş yapıyoruz."
      />

      <section className="section-pad bg-charcoal-900">
        <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <div className="space-y-5">
              {info.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.06}>
                  <div className="glass-panel rounded-sm p-6 flex items-start gap-4">
                    <item.icon size={20} className="text-gold-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40">
                        {item.label}
                      </p>
                      <p className="mt-1 text-white/85">{item.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-6 rounded-sm overflow-hidden border border-white/10 h-56 relative bg-navy-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-noise opacity-30" />
                <p className="relative text-white/30 text-sm">İstanbul, Levent — Harita Görünümü</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

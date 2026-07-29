import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { nav, moreLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-navy-950">
      <div className="container-max px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <span className="font-display text-2xl text-white">YALIN</span>
            <p className="mt-1 text-[11px] uppercase tracking-widest2 text-gold-500">
              Operasyonel Mükemmellik
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/50">
              Teşhis etmeden iyileştiremezsiniz. Operasyonel Mükemmellik Akademisi; eğitim,
              danışmanlık, dijital araçlar ve yapay zekâ destekli karar desteğini tek çatı altında
              sunar.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold-500 hover:text-gold-400"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Misyon
            </h4>
            <p className="text-sm leading-relaxed text-white/50">
              İşletmelerin görünmeyen kayıplarını veriye dayalı yöntemlerle ortaya çıkarmak ve
              sürdürülebilir, ölçülebilir operasyonel mükemmelliğe ulaşmalarını sağlamak.
            </p>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5 mt-8">
              Vizyon
            </h4>
            <p className="text-sm leading-relaxed text-white/50">
              Eğitim, danışmanlık, dijital araçlar, sertifikasyon ve yapay zekâ destekli karar
              desteğini bir araya getiren uluslararası bir Operational Excellence Digital Academy
              platformuna dönüşmek.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Temel Değerler
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>Teşhis Önce Çözüm Sonra</li>
              <li>Veriye Dayalı Karar</li>
              <li>Analitik Dürüstlük</li>
              <li>Ölçülebilir Etki</li>
              <li>Sürdürülebilir Mükemmellik</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Hızlı Erişim
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-gold-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5 mt-8">
              Diğer Sayfalar
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {moreLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-gold-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/randevu" className="text-gold-500 hover:text-gold-400 transition-colors">
                  İşletme Check-Up Talep Et
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/[0.07] pt-10 text-sm text-white/50">
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-gold-500 shrink-0" />
            <span>Levent, İstanbul, Türkiye</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-gold-500 shrink-0" />
            <span>+90 212 000 00 00</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-gold-500 shrink-0" />
            <span>iletisim@yalin-consulting.com</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.07] pt-8 text-xs text-white/35">
          <p>© {new Date().getFullYear()} Yalın Operasyonel Mükemmellik Danışmanlığı. Tüm hakları saklıdır.</p>
          <p>Teşhis etmeden iyileştiremezsiniz.</p>
        </div>
      </div>
    </footer>
  );
}

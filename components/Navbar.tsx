"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Download } from "lucide-react";
import { nav, moreLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* UTILITY BAR */}
      <div className="hidden md:block bg-navy-950 border-b border-white/[0.06]">
        <div className="container-max flex items-center justify-between px-6 md:px-12 lg:px-20 h-9 text-[12px]">
          <div className="flex items-center gap-6 text-white/50">
            <a href="tel:+902120000000" className="flex items-center gap-1.5 hover:text-ember-400 transition-colors">
              <Phone size={12} strokeWidth={1.75} /> +90 212 000 00 00
            </a>
            <a
              href="mailto:iletisim@yalin-consulting.com"
              className="hidden lg:flex items-center gap-1.5 hover:text-ember-400 transition-colors"
            >
              <Mail size={12} strokeWidth={1.75} /> iletisim@yalin-consulting.com
            </a>
          </div>
          <Link href="/akademi" className="flex items-center gap-1.5 text-ember-400 hover:text-ember-300 transition-colors">
            <Download size={12} strokeWidth={1.75} /> Ücretsiz Örnek Modül İndirin
          </Link>
        </div>
      </div>

      {/* MAIN NAV */}
      <div
        className={`transition-all duration-500 ${scrolled ? "glass-nav" : "bg-transparent md:bg-navy-950/40"}`}
      >
      <div className="container-max flex items-center justify-between px-6 md:px-12 lg:px-20 h-20">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display font-extrabold text-2xl tracking-tight text-white">YALIN</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-widest2 text-ember-500 mt-1">
            Operasyonel Mükemmellik
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[13px] tracking-wide transition-colors duration-300 relative py-1 whitespace-nowrap ${
                pathname === item.href ? "text-ember-400" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-ember-500" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link href="/randevu" className="btn-primary !py-3 !px-6 text-xs">
            Check-Up Talep Et
          </Link>
        </div>

        <button
          className="xl:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      </div>

      {open && (
        <div className="xl:hidden glass-nav border-t border-white/[0.06]">
          <div className="flex flex-col px-6 py-6 gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-base border-b border-white/[0.06] ${
                  pathname === item.href ? "text-ember-400" : "text-white/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {moreLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-sm border-b border-white/[0.06] ${
                  pathname === item.href ? "text-ember-400" : "text-white/55"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/randevu" className="btn-primary mt-5 justify-center">
              Check-Up Talep Et
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

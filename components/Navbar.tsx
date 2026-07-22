"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/data";

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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between px-6 md:px-12 lg:px-20 h-20">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight text-white">YALIN</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-widest2 text-gold-500 mt-1">
            Operasyonel Mükemmellik
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors duration-300 relative py-1 ${
                pathname === item.href ? "text-gold-400" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold-500" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/randevu" className="btn-primary !py-3 !px-6 text-xs">
            Check-Up Talep Et
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-nav border-t border-white/[0.06]">
          <div className="flex flex-col px-6 py-6 gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-base border-b border-white/[0.06] ${
                  pathname === item.href ? "text-gold-400" : "text-white/80"
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

"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

const industries = [
  "Demir Çelik",
  "Otomotiv",
  "İmalat",
  "Gıda",
  "Makine İmalatı",
  "Yapı Malzemeleri",
  "Lojistik",
  "Depolama",
  "Enerji",
  "Genel Endüstri",
];

export default function CheckupForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass-panel rounded-sm p-10 md:p-14 text-center">
        <CheckCircle2 size={40} className="text-gold-500 mx-auto" strokeWidth={1.5} />
        <h3 className="font-display text-2xl text-white mt-6">Talebiniz Alındı</h3>
        <p className="mt-3 text-white/55 leading-relaxed max-w-md mx-auto">
          İşletme Check-Up talebiniz için teşekkür ederiz. Danışmanlarımız 1 iş günü içinde sizinle
          iletişime geçerek ön görüşme takvimini planlayacaktır.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-sm p-8 md:p-12 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Ad Soyad" name="name" required />
        <Field label="Şirket" name="company" required />
        <Field label="Pozisyon" name="position" placeholder="CEO / Fabrika Müdürü / COO" />
        <Field label="Telefon" name="phone" type="tel" />
        <Field label="E-posta" name="email" type="email" required className="sm:col-span-2" />

        <div>
          <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">
            Sektör
          </label>
          <select
            name="industry"
            required
            className="w-full rounded-sm border border-white/15 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-gold-500/60"
          >
            <option value="" className="bg-navy-900">
              Sektör Seçin
            </option>
            {industries.map((ind) => (
              <option key={ind} value={ind} className="bg-navy-900">
                {ind}
              </option>
            ))}
          </select>
        </div>

        <Field label="Çalışan Sayısı" name="employees" placeholder="Örn. 250" />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">
          İşletmenizle İlgili Kısa Not
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Öncelikli operasyonel sorununuzu kısaca aktarabilirsiniz."
          className="w-full rounded-sm border border-white/15 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold-500/60"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        İşletme Check-Up Talebini Gönder <Send size={16} />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">
        {label}
        {required && <span className="text-gold-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-white/15 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold-500/60"
      />
    </div>
  );
}

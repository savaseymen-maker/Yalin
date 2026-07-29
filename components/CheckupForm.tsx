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
      <div className="glass-panel rounded-md p-10 md:p-14 text-center">
        <CheckCircle2 size={40} className="text-ember-500 mx-auto" strokeWidth={1.5} />
        <h3 className="font-display font-extrabold text-2xl text-ink-900 mt-6">Talebiniz Alındı</h3>
        <p className="mt-3 text-ink-600 leading-relaxed max-w-md mx-auto">
          İşletme Check-Up talebiniz için teşekkür ederiz. Danışmanlarımız 1 iş günü içinde sizinle
          iletişime geçerek ön görüşme takvimini planlayacaktır.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-md p-8 md:p-12 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Ad Soyad" name="name" required />
        <Field label="Şirket" name="company" required />
        <Field label="Pozisyon" name="position" placeholder="CEO / Fabrika Müdürü / COO" />
        <Field label="Telefon" name="phone" type="tel" />
        <Field label="E-posta" name="email" type="email" required className="sm:col-span-2" />

        <div>
          <label className="block text-xs uppercase tracking-wider text-ink-500 mb-2">
            Sektör
          </label>
          <select
            name="industry"
            required
            className="w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-ember-500"
          >
            <option value="">Sektör Seçin</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        <Field label="Çalışan Sayısı" name="employees" placeholder="Örn. 250" />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-ink-500 mb-2">
          İşletmenizle İlgili Kısa Not
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Öncelikli operasyonel sorununuzu kısaca aktarabilirsiniz."
          className="w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:border-ember-500"
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
      <label className="block text-xs uppercase tracking-wider text-ink-500 mb-2">
        {label}
        {required && <span className="text-ember-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:border-ember-500"
      />
    </div>
  );
}

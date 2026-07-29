"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass-panel rounded-md p-10 text-center">
        <CheckCircle2 size={36} className="text-ember-500 mx-auto" strokeWidth={1.5} />
        <h3 className="font-display font-extrabold text-xl text-ink-900 mt-5">Mesajınız İletildi</h3>
        <p className="mt-2.5 text-ink-600 text-sm leading-relaxed">
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-md p-8 md:p-10 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-ink-500 mb-2">
            Ad Soyad
          </label>
          <input
            required
            name="name"
            className="w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-ember-500"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-ink-500 mb-2">
            E-posta
          </label>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-ember-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-ink-500 mb-2">Konu</label>
        <input
          name="subject"
          className="w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-ember-500"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-ink-500 mb-2">Mesaj</label>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-ember-500"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Mesajı Gönder <Send size={16} />
      </button>
    </form>
  );
}

# Yalın — Operasyonel Mükemmellik Danışmanlığı

Stratejik operasyonel mükemmellik danışmanlığı için premium kurumsal web sitesi. Next.js 14 (App Router), TypeScript, Tailwind CSS ve Framer Motion ile geliştirilmiştir.

## Sayfalar

- Ana Sayfa (`/`)
- Hakkımızda (`/hakkimizda`)
- Hizmetler (`/hizmetler`)
- Metodolojiler (`/metodolojiler`)
- Sektörler (`/sektorler`)
- Vaka Çalışmaları (`/vaka-calismalari`, `/vaka-calismalari/[slug]`)
- İçgörüler (`/icgoruler`, `/icgoruler/[slug]`)
- İşletme Check-Up Talep Et (`/randevu`)
- İletişim (`/iletisim`)

## Geliştirme

```bash
npm install
npm run dev
```

## Prodüksiyon Build

```bash
npm run build
npm run start
```

## İçerik

Tüm statik içerik `lib/data.ts` dosyasında merkezi olarak tutulur (hizmetler, metodolojiler, sektörler, vaka çalışmaları, içgörüler, İşletme Check-Up olgunluk kategorileri vb.).

// Renkli ikon rozetleri için dönen aksan paleti — Tailwind'in içerik taramasında
// yakalanabilmesi için sınıf adları tam olarak yazılmalıdır (dinamik string birleştirme kullanılmaz).
export const accentChips = [
  { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
  { bg: "bg-ember-50", text: "text-ember-600", border: "border-ember-100" },
  { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
  { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100" },
  { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100" },
  { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-100" },
];

export function accentChip(index: number) {
  return accentChips[index % accentChips.length];
}

// Koyu (navy) zeminler üzerinde kullanılacak parlak ikon tonları.
export const accentChipsDark = [
  "text-blue-400",
  "text-ember-400",
  "text-emerald-400",
  "text-violet-400",
  "text-rose-400",
  "text-cyan-400",
];

export function accentChipDark(index: number) {
  return accentChipsDark[index % accentChipsDark.length];
}

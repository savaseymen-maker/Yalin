"use client";

import { motion } from "framer-motion";

function scoreLabel(score: number) {
  if (score >= 70) return { label: "Olgun", color: "#7FA6C9" };
  if (score >= 55) return { label: "Gelişen", color: "#C9A227" };
  return { label: "Kritik", color: "#B45757" };
}

export default function ScoreBar({ title, score }: { title: string; score: number }) {
  const { label, color } = scoreLabel(score);
  return (
    <div className="py-4 border-b border-white/[0.07] last:border-none">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-sm md:text-base text-white/85 font-medium">{title}</span>
        <span className="text-xs uppercase tracking-wider" style={{ color }}>
          {label} · {score}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

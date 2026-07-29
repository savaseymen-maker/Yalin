import { ReactNode } from "react";

export default function Marquee({ items }: { items: ReactNode[] }) {
  const track = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 py-1">
        {track.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

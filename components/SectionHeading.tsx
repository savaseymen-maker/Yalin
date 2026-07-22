import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`font-display text-balance text-3xl md:text-5xl leading-[1.1] tracking-tight ${
            light ? "text-white" : "text-white"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.1}>
          <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed">{desc}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <div className={`gold-divider mt-8 ${align === "center" ? "mx-auto" : ""}`} />
      </Reveal>
    </div>
  );
}

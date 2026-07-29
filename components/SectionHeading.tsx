import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
  /** Set true when this heading sits on a dark navy band (Hero/CTA-style sections). */
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal>
          <p className={dark ? "eyebrow-invert mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`font-display font-extrabold text-balance text-3xl md:text-5xl leading-[1.1] tracking-tight ${
            dark ? "text-white" : "text-ink-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.1}>
          <p
            className={`mt-6 text-base md:text-lg leading-relaxed ${dark ? "text-white/60" : "text-ink-600"}`}
          >
            {desc}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <div className={`gold-divider mt-8 ${align === "center" ? "mx-auto" : ""}`} />
      </Reveal>
    </div>
  );
}

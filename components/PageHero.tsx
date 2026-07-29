import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient pt-40 pb-24 md:pt-48 md:pb-28">
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-ember-500/15 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-steel-500/10 blur-3xl animate-pulse-glow" />
      <div className="container-max relative px-6 md:px-12 lg:px-20">
        <Reveal>
          <p className="eyebrow-invert mb-5">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display font-extrabold text-balance max-w-4xl text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
            {title}
          </h1>
        </Reveal>
        {desc && (
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">
              {desc}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

import { highlights, services } from "@/data/site";
import { Check, highlightIcons } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="One engineer, the whole delivery chain."
            description="Most of my work starts as a rough idea and ends as a published app with paying users. That means I cover product, interface, native implementation, infrastructure and store operations — not just one slice of it."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = highlightIcons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 70} className="h-full">
                <div className="glass glass-hover h-full rounded-3xl p-5 sm:p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/12 bg-gradient-to-br from-white/12 to-white/[0.02] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[1.05rem] font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-400">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 60} className="h-full">
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 sm:p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[1.02rem] font-semibold text-white">{service.title}</h3>
                  <span className="font-mono text-[0.65rem] text-ink-400">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-400">{service.body}</p>
                <ul className="mt-4 space-y-1.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-[0.82rem] text-ink-300">
                      <Check className="h-3.5 w-3.5 text-cyan-glow/80" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { process } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A short, predictable path from idea to store listing."
            description="No black boxes. Each phase ends with something you can hold, test on your own phone and give feedback on."
          />
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {process.map((step, index) => (
            <Reveal key={step.step} delay={index * 80} className="h-full">
              <li className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <span className="font-display text-[2.4rem] leading-none font-semibold text-white/10">
                  {step.step}
                </span>
                <h3 className="mt-2 text-[1rem] font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-400">{step.body}</p>
                <span
                  className="absolute inset-x-5 bottom-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(139,92,246,0.7), rgba(34,211,238,0.15), transparent)",
                    opacity: 0.6 + index * 0.1,
                  }}
                />
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

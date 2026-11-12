import { Sparkle } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      <span className="pill">
        <Sparkle className="h-3.5 w-3.5 text-cyan-glow" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className="text-balance text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.85rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-ink-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

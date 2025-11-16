type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${align === "center" ? "text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
        <span className="h-1 w-1 rounded-full bg-sky-400" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-300/85 sm:text-lg">{description}</p>
      )}
    </div>
  );
}

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      {tag && (
        <span
          className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${
            light ? "text-emerald-300" : "text-emerald-600"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl mb-3 ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""} ${
            light ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : ""}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--ink)] sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">{description}</p> : null}
    </div>
  );
}


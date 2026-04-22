type AdSlotProps = {
  title?: string;
  description?: string;
  className?: string;
  mode?: "placeholder" | "live";
};

export function AdSlot({ title, description, className = "", mode = "placeholder" }: AdSlotProps) {
  if (mode === "placeholder") {
    return <div aria-hidden="true" role="presentation" className={`min-h-[90px] ${className}`} />;
  }

  return (
    <aside
      aria-label={title ?? "Espaço complementar"}
      className={`rounded-3xl border border-[color:var(--border)] bg-[rgba(255,255,255,0.82)] px-4 py-5 sm:px-5 ${className}`}
    >
      <div className="min-h-[90px] rounded-2xl p-3">
        <div className="adsbygoogle min-h-[90px] w-full" aria-label={title ?? "Espaço complementar"} data-slot-description={description ?? ""} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.adsbygoogle = window.adsbygoogle || []; (window.adsbygoogle).push({});",
          }}
        />
      </div>
    </aside>
  );
}

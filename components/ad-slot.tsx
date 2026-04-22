type AdSlotProps = {
  title: string;
  description: string;
  className?: string;
};

export function AdSlot({ title, description, className = "" }: AdSlotProps) {
  return (
    <aside
      aria-label={title}
      className={`rounded-3xl border border-dashed border-[color:var(--border)] bg-[rgba(255,255,255,0.82)] px-4 py-5 sm:px-5 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{description}</p>
      <p className="mt-3 text-xs text-[color:var(--muted)]">Espaço reservado para monetização futura sem quebrar a navegação.</p>
    </aside>
  );
}


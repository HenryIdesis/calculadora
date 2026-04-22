import Link from "next/link";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";

type ArticleCardProps = {
  href: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
};

export function ArticleCard({ href, title, description, category, readingTime }: ArticleCardProps) {
  return (
    <article className="group rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-[rgba(22,58,114,0.2)]">
      <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
        <span className="inline-flex items-center gap-2 text-[color:var(--brand)]">
          <Sparkles className="h-3.5 w-3.5" />
          {category}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5" />
          {readingTime}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-[color:var(--ink)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{description}</p>
      <Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]">
        Ler guia
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}


import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";
import { Container } from "@/components/container";
import { site, siteNavigation } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[rgba(246,242,234,0.82)] backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3 rounded-full focus-ring">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--brand),var(--brand-strong))] text-white shadow-soft">
            <Landmark className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-[color:var(--brand)]">{site.shortName}</span>
            <span className="block text-xs text-[color:var(--muted)]">Finanças para MEI/PJ</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="flex max-w-[58vw] gap-2 overflow-x-auto whitespace-nowrap pr-1 sm:max-w-none">
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-2 text-sm text-[color:var(--muted)] transition hover:border-[color:var(--border)] hover:bg-white hover:text-[color:var(--ink)] focus-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/ferramenta"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-strong))] px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:translate-y-[-1px] focus-ring"
        >
          Calcular
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Container>
    </header>
  );
}


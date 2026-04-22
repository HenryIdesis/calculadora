import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/container";
import { legalNavigation, site } from "@/lib/site";
import { editorialNavigation } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[rgba(255,255,255,0.7)]">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-[color:var(--brand)]">{site.name}</p>
          <p className="max-w-md text-sm leading-7 text-[color:var(--muted)]">
            Conteúdo prático para decisão financeira, comparação MEI x PJ, organização de caixa e uma base limpa para monetização com anúncios e afiliados.
          </p>
          <Link href="/contato" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]">
            <Mail className="h-4 w-4" />
            {site.contactEmail}
          </Link>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">Guias</h2>
          <ul className="space-y-3 text-sm">
            {editorialNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex items-center gap-1 text-[color:var(--ink)] hover:text-[color:var(--brand)]">
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">Legal</h2>
          <ul className="space-y-3 text-sm">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[color:var(--ink)] hover:text-[color:var(--brand)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="pb-8">
        <p className="border-t border-[color:var(--border)] pt-4 text-xs leading-6 text-[color:var(--muted)]">
          Conteúdo informativo. Revise sempre regras fiscais e contábeis vigentes antes de tomar decisões. Alguns blocos podem ser monetizados com anúncios ou links de afiliado.
        </p>
      </Container>
    </footer>
  );
}


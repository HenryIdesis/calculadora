import type { Metadata } from "next";
import { ScrollText } from "lucide-react";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";
import { termsSections } from "@/content/legal";

export const metadata: Metadata = buildMetadata({
  title: "Termos de Uso",
  description: "Termos que orientam o uso do conteúdo, calculadoras, links e páginas do site.",
  path: "/termos",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      description="Condições gerais para navegação, uso das calculadoras e acesso aos conteúdos publicados."
      updatedAt="22 de abril de 2026"
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Termos de Uso" }]}
      intro={
        <div className="flex gap-3">
          <ScrollText className="mt-0.5 h-5 w-5 text-[color:var(--brand)]" />
          <p className="text-sm leading-7 text-[color:var(--muted)]">
            O uso do site pressupõe entendimento de que o conteúdo é educativo. Antes de decisões fiscais ou financeiras, valide tudo com um profissional habilitado.
          </p>
        </div>
      }
      sections={termsSections}
      footerNote="Se novos produtos, assinaturas ou áreas restritas forem adicionados depois, os termos devem ser atualizados para refletir a operação real."
    />
  );
}


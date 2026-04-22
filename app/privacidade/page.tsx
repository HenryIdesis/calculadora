import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";
import { privacySections } from "@/content/legal";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade",
  description: "Entenda como o site trata dados, cookies e integrações externas.",
  path: "/privacidade",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      description="Documento informativo sobre coleta, uso e tratamento de dados neste site."
      updatedAt="22 de abril de 2026"
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Política de Privacidade" }]}
      intro={
        <div className="flex gap-3">
          <Shield className="mt-0.5 h-5 w-5 text-[color:var(--brand)]" />
          <p className="text-sm leading-7 text-[color:var(--muted)]">
            Este texto explica, de forma direta, como o site lida com dados de navegação e integrações externas. Se o projeto passar a usar serviços novos, esta página deve ser revisada.
          </p>
        </div>
      }
      sections={privacySections}
      footerNote="A política pode ser atualizada conforme novas integrações forem adicionadas ao site."
    />
  );
}

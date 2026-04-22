import type { Metadata } from "next";
import { UserRound, Target } from "lucide-react";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";
import { aboutSections } from "@/content/legal";

export const metadata: Metadata = buildMetadata({
  title: "Sobre",
  description: "Conheça a proposta editorial, a lógica de monetização e o foco em conteúdo útil para MEI e PJ.",
  path: "/sobre",
});

export default function AboutPage() {
  return (
    <LegalPage
      title="Sobre o projeto"
      description="Uma base editorial para ajudar MEI e PJ a entender o próprio caixa, comparar cenários e decidir com mais segurança."
      updatedAt="22 de abril de 2026"
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Sobre" }]}
      intro={
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex gap-3">
            <span className="mt-0.5 text-[color:var(--brand)]">
              <Target className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold">Missão editorial</p>
              <p className="mt-1 text-sm leading-7 text-[color:var(--muted)]">Transformar dúvida financeira em decisão clara.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="mt-0.5 text-[color:var(--brand)]">
              <UserRound className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold">Público</p>
              <p className="mt-1 text-sm leading-7 text-[color:var(--muted)]">MEI, prestadores de serviço, autônomos e pequenos PJ.</p>
            </div>
          </div>
        </div>
      }
      sections={aboutSections}
      footerNote="Este projeto pode usar anúncios e links de afiliado no futuro, mas a organização foi pensada para manter o conteúdo principal legível e confiável."
    />
  );
}


import type { Metadata } from "next";
import { Mail, MessageCircleMore, ShieldQuestion } from "lucide-react";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";
import { contactSections } from "@/content/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description: "Canal para pautas, correções, dúvidas de conteúdo e propostas de parceria.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <LegalPage
      title="Contato"
      description="Use este canal para falar com a equipe editorial sobre correções, parcerias e sugestões de conteúdo."
      updatedAt="22 de abril de 2026"
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Contato" }]}
      intro={
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-[color:var(--brand)]" />
            <div>
              <p className="font-semibold">E-mail</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{site.contactEmail}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MessageCircleMore className="mt-0.5 h-5 w-5 text-[color:var(--brand)]" />
            <div>
              <p className="font-semibold">Sugestões</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">Novos temas, melhorias na calculadora e correções.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <ShieldQuestion className="mt-0.5 h-5 w-5 text-[color:var(--brand)]" />
            <div>
              <p className="font-semibold">Parcerias</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">Espaço para afiliados, mídia e cooperação futura.</p>
            </div>
          </div>
        </div>
      }
      sections={contactSections}
      footerNote="Se você for sugerir parceria comercial, descreva o produto, o modelo de monetização e o contexto de uso para evitar propostas desalinhadas com a experiência do site."
    />
  );
}


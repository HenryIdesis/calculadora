import type { Metadata } from "next";
import { Mail, MessageCircleMore, ShieldQuestion } from "lucide-react";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";
import { contactSections } from "@/content/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description: "Canal para pautas, correções e dúvidas sobre o conteúdo do site.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <LegalPage
      title="Contato"
      description="Use este canal para falar com a equipe editorial sobre correções, sugestões e dúvidas sobre o conteúdo."
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
              <p className="mt-1 text-sm text-[color:var(--muted)]">Novos temas, melhorias na calculadora e correções de conteúdo.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <ShieldQuestion className="mt-0.5 h-5 w-5 text-[color:var(--brand)]" />
            <div>
              <p className="font-semibold">Dúvidas</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">Perguntas sobre cálculo, regime ou organização financeira.</p>
            </div>
          </div>
        </div>
      }
      sections={contactSections}
      footerNote="Se a sua mensagem pedir contexto financeiro, inclua a atividade, o faturamento aproximado e o regime atual para facilitar a resposta."
    />
  );
}

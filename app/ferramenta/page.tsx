import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, Info, Scale, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { AdSlot } from "@/components/ad-slot";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CalculatorTool } from "@/components/calculator-tool";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Comparador MEI x PJ",
  description:
    "Ferramenta para comparar MEI e PJ com leitura simples de faturamento, custo fixo, imposto estimado e caixa líquido.",
  path: "/ferramenta",
});

export default function ToolPage() {
  const applicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Comparador MEI x PJ",
    description:
      "Simulador financeiro para comparar MEI e PJ com receita, custos, imposto estimado e caixa líquido.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
  };

  return (
    <main className="py-8 sm:py-12">
      <Container>
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Ferramenta" }]} />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)] shadow-soft">
                <Sparkles className="h-3.5 w-3.5" />
                Ferramenta principal
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Comparador MEI x PJ para decisão financeira</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
                A ferramenta ajuda a enxergar o que sobra no fim do mês. Ela não tenta adivinhar seu regime ideal por regra fechada; ela mostra o impacto de receita, custo e imposto no caixa.
              </p>
            </div>
            <div className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[rgba(22,58,114,0.08)] text-[color:var(--brand)]">
                  <Calculator className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[color:var(--ink)]">Feito para mobile</p>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                    Campos simples, botões grandes e resultado visível sem excesso de ruído visual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="py-8">
        <Container>
          <AdSlot
            title="Slot superior"
            description="Espaço reservado para AdSense no topo da página da ferramenta, abaixo da introdução."
          />
        </Container>
      </section>

      <section className="py-6 sm:py-10">
        <Container>
          <CalculatorTool />
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-[color:var(--border)] bg-white p-6 shadow-soft">
              <SectionHeading
                eyebrow="Como usar"
                title="Leitura correta da simulação"
                description="O objetivo é decidir com mais clareza se vale manter a estrutura atual ou preparar a migração para PJ."
              />
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[color:var(--muted)]">
                <li>• Comece com o faturamento médio dos últimos meses.</li>
                <li>• Inclua custos que realmente saem do caixa.</li>
                <li>• Ajuste a taxa PJ e o DAS para refletir o seu caso.</li>
                <li>• Compare o líquido, não apenas o imposto.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(22,58,114,0.05),rgba(255,255,255,1))] p-6">
              <SectionHeading
                eyebrow="Monetização futura"
                title="Espaço de afiliado dentro do fluxo"
                description="Este bloco pode virar recomendação de planilha, sistema financeiro, conta PJ ou outro parceiro sem alterar a estrutura da ferramenta."
              />
              <div className="mt-6 rounded-3xl border border-dashed border-[color:var(--border)] bg-white p-5">
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 h-5 w-5 text-[color:var(--brand)]" />
                  <div className="text-sm leading-7 text-[color:var(--muted)]">
                    CTA de afiliado reservado. Aqui você pode inserir uma recomendação contextual, com transparência e sem invadir a experiência do usuário.
                  </div>
                </div>
                <Link
                  href="/guia"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-strong))] px-4 py-3 text-sm font-semibold text-white focus-ring"
                >
                  Ver guias relacionados
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <AdSlot
            title="Slot do meio"
            description="Espaço reservado para anúncio no meio do conteúdo, depois do uso da ferramenta e antes dos guias."
          />
        </Container>
      </section>

      <section className="py-6 sm:py-10">
        <Container>
          <section className="rounded-3xl border border-[color:var(--border)] bg-white p-6 shadow-soft">
            <SectionHeading
              eyebrow="Perguntas rápidas"
              title="O que esta ferramenta faz e o que ela não faz"
              description="Essas respostas reforçam transparência e ajudam o usuário a interpretar a simulação sem expectativas erradas."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <details className="rounded-2xl border border-[color:var(--border)] bg-[rgba(22,58,114,0.03)] p-4">
                <summary className="cursor-pointer list-none font-semibold focus-ring">Ela calcula imposto exato?</summary>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">Não. Ela mostra uma leitura de decisão para comparar cenários. A conta exata depende de regime, anexo, atividade e obrigações específicas.</p>
              </details>
              <details className="rounded-2xl border border-[color:var(--border)] bg-[rgba(22,58,114,0.03)] p-4">
                <summary className="cursor-pointer list-none font-semibold focus-ring">Posso usar no celular?</summary>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">Sim. O layout foi desenhado para toque fácil, leitura clara e entrada rápida de dados em telas pequenas.</p>
              </details>
              <details className="rounded-2xl border border-[color:var(--border)] bg-[rgba(22,58,114,0.03)] p-4">
                <summary className="cursor-pointer list-none font-semibold focus-ring">Posso trocar a fórmula depois?</summary>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">Sim. A lógica fica isolada em um arquivo de cálculo, então você pode atualizar a regra sem mexer no layout inteiro.</p>
              </details>
              <details className="rounded-2xl border border-[color:var(--border)] bg-[rgba(22,58,114,0.03)] p-4">
                <summary className="cursor-pointer list-none font-semibold focus-ring">Isso ajuda no AdSense?</summary>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">Sim. Ferramentas úteis com páginas institucionais, FAQ, privacidade, termos e navegação consistente costumam ter uma base melhor para revisão e retenção.</p>
              </details>
            </div>
          </section>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <AdSlot
            title="Slot final"
            description="Espaço reservado para anúncio no final da página, antes do rodapé e sem competir com a CTA principal."
          />
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationSchema) }} />
    </main>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calculator, ChartNoAxesCombined, FileText, Shield, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { AdSlot } from "@/components/ad-slot";
import { ArticleCard } from "@/components/article-card";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { articles } from "@/data/articles";
import { faqItems } from "@/data/faq";
import { homeEditorialPromise, homeHighlights, homeTrustPoints } from "@/content/home";

export const metadata: Metadata = buildMetadata({
  title: "Finanças para MEI/PJ",
  description:
    "Ferramenta e guias para MEI e PJ compararem caixa, imposto e decisão financeira com mais clareza.",
  path: "/",
});

export default function HomePage() {
  const featuredArticles = articles.slice(0, 6);
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#162f57_55%,#0f2b57_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(247,198,92,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.12),transparent_32%)]" />
        <Container className="relative py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Utilidade financeira para MEI e PJ
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Entenda quanto sobra no seu negócio antes de decidir entre MEI e PJ.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                A ideia aqui é simples: ajudar você a comparar imposto, custo fixo e caixa real sem linguagem rebuscada nem ruído desnecessário.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/ferramenta"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand)] transition hover:translate-y-[-1px] focus-ring"
                >
                  <Calculator className="h-4 w-4" />
                  Abrir calculadora
                </Link>
                <Link
                  href="/guia"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-ring"
                >
                  <FileText className="h-4 w-4" />
                  Ver guias
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {homeEditorialPromise.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 text-sm text-white/80 backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">O que você ganha aqui</p>
              <div className="mt-5 space-y-4">
                <ValueRow icon={<ChartNoAxesCombined className="h-4 w-4" />} title="Decisão com contexto" text="Compare o caixa líquido e não apenas a carga tributária." />
                <ValueRow icon={<Shield className="h-4 w-4" />} title="Base editorial confiável" text="Políticas, termos, FAQ e contato já publicados." />
                <ValueRow icon={<BadgeCheck className="h-4 w-4" />} title="Pronto para escalar" text="Arquitetura simples para adicionar novos clusters de conteúdo." />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10">
        <Container>
          <AdSlot />
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Ferramenta principal"
            title="Comparador MEI x PJ"
            description="Use a calculadora para testar faturamento, custo fixo e imposto estimado antes de decidir se vale manter o MEI ou migrar para PJ."
          />
          <div className="mt-8">
            <Link
              href="/ferramenta"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand)] shadow-soft focus-ring"
            >
              Testar cenário agora
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {homeHighlights.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-soft">
                <p className="text-base font-semibold text-[color:var(--ink)]">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {homeTrustPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-[color:var(--border)] bg-[rgba(255,255,255,0.82)] px-4 py-4 text-sm leading-7 text-[color:var(--muted)]">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Guias iniciais"
            title="Conteúdo editorial que responde dúvidas reais"
            description="A base editorial foi desenhada para atacar temas que o público pesquisa de forma recorrente: imposto, caixa, pró-labore, migração e organização financeira."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                href={`/guia/${article.slug}`}
                title={article.title}
                description={article.description}
                category={article.category}
                readingTime={article.readingTime}
              />
            ))}
          </div>
          <div className="mt-6">
            <Link href="/guia" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]">
              Ver todos os artigos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-[color:var(--border)] bg-white p-6 shadow-soft">
              <SectionHeading
                eyebrow="Leitura sem ruído"
                title="O conteúdo vem antes de tudo"
                description="O site foi organizado para que a calculadora, os guias e as páginas institucionais fiquem fáceis de encontrar e rápidos de ler no celular."
              />
              <div className="mt-6 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
                <p>Rotas simples, para o usuário chegar rápido ao que precisa.</p>
                <p>Artigos com hierarquia clara e perguntas reais.</p>
                <p>Páginas institucionais diretas, sem texto inflado.</p>
                <p>Fluxo de leitura pensado para quem consulta no meio do trabalho.</p>
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(22,58,114,0.05),rgba(255,255,255,1))] p-6">
              <SectionHeading
                eyebrow="Como o site se organiza"
                title="Estrutura simples de manter"
                description="A base usa rotas claras, componentes reutilizáveis e conteúdo organizado para facilitar revisão, atualização e expansão editorial."
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Home", "Ferramenta", "Sobre", "Contato", "Privacidade", "Termos", "FAQ", "Artigos"].map((item) => (
                  <div key={item} className="rounded-2xl border border-[color:var(--border)] bg-white px-4 py-4 text-sm font-medium text-[color:var(--ink)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="FAQ rápido"
            title="Perguntas que realmente ajudam na decisão"
            description="Esses pontos antecipam dúvidas comuns de quem usa a calculadora e lê os guias pela primeira vez."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqItems.slice(0, 4).map((item) => (
              <details key={item.question} className="group rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-soft">
                <summary className="cursor-pointer list-none text-base font-semibold text-[color:var(--ink)] focus-ring">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <AdSlot />
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </main>
  );
}

type ValueRowProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

function ValueRow({ icon, title, text }: ValueRowProps) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.08] p-4">
      <span className="mt-0.5 text-white/90">{icon}</span>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-white/70">{text}</p>
      </div>
    </div>
  );
}

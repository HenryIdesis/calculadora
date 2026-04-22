import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock3, CalendarDays, BadgeInfo } from "lucide-react";
import { Container } from "@/components/container";
import { AdSlot } from "@/components/ad-slot";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AuthorBadge } from "@/components/author-badge";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { articles, getArticleBySlug } from "@/data/articles";
import { formatDateBR } from "@/lib/format";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return buildMetadata({
      title: "Artigo não encontrado",
      description: "O artigo solicitado não existe.",
      path: "/guia",
    });
  }

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/guia/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const canonical = new URL(`/guia/${article.slug}`, site.url).toString();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: canonical,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Guias", item: "/guia" },
      { "@type": "ListItem", position: 3, name: article.title, item: canonical },
    ],
  };

  return (
    <main className="py-8 sm:py-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/guia", label: "Guias" }, { label: article.title }]} />
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">{article.category}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{article.title}</h1>
            <AuthorBadge name={article.author.name} role={article.author.role} />
            <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{article.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[color:var(--muted)]">
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" />
                {article.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                Publicado em {formatDateBR(article.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeInfo className="h-4 w-4" />
                Atualizado em {formatDateBR(article.updatedAt)}
              </span>
            </div>

            <div className="mt-8 rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-soft">
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                Resumo prático: {article.description}
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(135deg,var(--brand),var(--brand-strong),#0b1220)] text-white shadow-soft">
              <div className="aspect-[16/9] w-full p-5 sm:p-7">
                <div className="flex h-full flex-col justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">{article.category}</p>
                  <div className="mx-auto max-w-2xl text-center">
                    <p className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">{article.title}</p>
                  </div>
                  <div className="text-xs text-white/65">Leitura editorial com foco em decisão financeira e contexto tributário.</div>
                </div>
              </div>
            </div>

            <div className="article-content mt-8">
              {article.sections.map((section, index) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {index === 0 ? (
                    <div className="my-8 rounded-3xl border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(22,58,114,0.05),rgba(255,255,255,1))] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">Ferramenta complementar</p>
                      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm leading-7 text-[color:var(--muted)]">
                          Use a calculadora principal para testar esse cenário com seus próprios números antes de mudar regime ou preço.
                        </p>
                        <Link
                          href="/ferramenta"
                          className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-strong))] px-4 py-3 text-sm font-semibold text-white focus-ring"
                        >
                          Abrir ferramenta
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

          </article>
        </div>
      </Container>

      <section className="py-8">
        <Container>
          <AdSlot
            title="Slot do meio"
            description="Espaço reservado para anúncio no meio do artigo, posicionado depois da primeira parte do conteúdo."
          />
        </Container>
      </section>

      <Container>
        <div className="mx-auto max-w-3xl pb-8">
          <section className="rounded-3xl border border-[color:var(--border)] bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">Próxima ação</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Leve este tema para a ferramenta</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Se o artigo despertou dúvida de decisão, a calculadora ajuda a testar os números com o seu cenário real antes de tomar qualquer decisão sobre regime ou estrutura.
            </p>
          </section>
        </div>
      </Container>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}

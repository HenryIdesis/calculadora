import type { Metadata } from "next";
import { Container } from "@/components/container";
import { AdSlot } from "@/components/ad-slot";
import { ArticleCard } from "@/components/article-card";
import { buildMetadata } from "@/lib/seo";
import { articles } from "@/data/articles";
import { SectionHeading } from "@/components/section-heading";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Guias práticos",
  description: "Biblioteca editorial com artigos úteis sobre MEI, PJ, imposto, caixa, pró-labore e organização financeira.",
  path: "/guia",
});

export default function GuideIndexPage() {
  const grouped = articles.reduce<Record<string, typeof articles>>((accumulator, article) => {
    const list = accumulator[article.category] ?? [];
    list.push(article);
    accumulator[article.category] = list;
    return accumulator;
  }, {});

  const categories = Object.entries(grouped);

  return (
    <main className="py-8 sm:py-12">
      <Container>
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Guias" }]} />
          <SectionHeading
            eyebrow="Biblioteca editorial"
            title="Guias práticos para decidir, organizar e crescer"
            description="Os artigos foram desenhados para responder dúvidas que aparecem em pesquisa orgânica e para criar uma base sólida de conteúdo útil."
          />
        </div>
      </Container>

      <section className="py-8">
        <Container>
          <AdSlot
            title="Slot superior"
            description="Espaço reservado para monetização no topo da lista editorial, sem poluir o catálogo de artigos."
          />
        </Container>
      </section>

      <section className="py-4 sm:py-8">
        <Container>
          <div className="space-y-10">
            {categories.map(([category, items]) => (
              <section key={category}>
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">{category}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">{category}</h2>
                  </div>
                  <p className="text-sm text-[color:var(--muted)]">{items.length} artigos</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((article) => (
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
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <AdSlot
            title="Slot final"
            description="Espaço reservado para anúncio no fim da listagem, com boa separação visual do conteúdo editorial."
          />
        </Container>
      </section>
    </main>
  );
}


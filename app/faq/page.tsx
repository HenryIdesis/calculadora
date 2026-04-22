import type { Metadata } from "next";
import { MessageSquareMore } from "lucide-react";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/seo";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Perguntas frequentes sobre a calculadora, os guias e a organização do site.",
  path: "/faq",
});

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="py-8 sm:py-12">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "FAQ" }]} />
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Respostas rápidas para usar o site sem dúvida"
            description="A página reúne dúvidas comuns sobre uso, precisão, organização e interpretação dos conteúdos."
          />
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[color:var(--ink)] focus-ring">
                  <span>{item.question}</span>
                  <MessageSquareMore className="h-4 w-4 shrink-0 text-[color:var(--brand)] transition group-open:rotate-12" />
                </summary>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}

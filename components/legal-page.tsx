import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";

type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalPageProps = {
  title: string;
  description: string;
  updatedAt: string;
  breadcrumbs: { href?: string; label: string }[];
  intro?: ReactNode;
  sections: Section[];
  footerNote?: string;
};

export function LegalPage({ title, description, updatedAt, breadcrumbs, intro, sections, footerNote }: LegalPageProps) {
  return (
    <main className="py-8 sm:py-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">Documento institucional</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{description}</p>
          <p className="mt-3 text-xs text-[color:var(--muted)]">Atualizado em {updatedAt}</p>
          {intro ? <div className="mt-6 rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-soft">{intro}</div> : null}

          <div className="article-content mt-8">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {footerNote ? <p className="mt-8 text-sm leading-7 text-[color:var(--muted)]">{footerNote}</p> : null}
        </div>
      </Container>
    </main>
  );
}


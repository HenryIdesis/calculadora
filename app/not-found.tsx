import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <main className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-[color:var(--border)] bg-white p-8 text-center shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Página não encontrada</h1>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            O link pode ter mudado ou o artigo ainda não existe. Volte para a página inicial ou abra a ferramenta principal.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-strong))] px-5 py-3 text-sm font-semibold text-white">
              Ir para Home
            </Link>
            <Link href="/ferramenta" className="rounded-full border border-[color:var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--ink)]">
              Abrir ferramenta
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}


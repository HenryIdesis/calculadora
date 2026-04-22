import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";

const disclaimerSections = [
  {
    heading: "Natureza informativa",
    paragraphs: [
      "O conteúdo publicado neste site tem finalidade informativa e educativa. Ele foi escrito para ajudar empreendedores, autônomos e pequenos negócios a entender melhor suas finanças, seu caixa e o impacto de decisões comuns sobre MEI e PJ.",
      "Nada aqui substitui a análise individual de um contador, consultor financeiro, advogado ou outro profissional habilitado. Cada negócio tem atividade, regime, contratos, obrigações e riscos próprios, então qualquer decisão relevante precisa ser validada com base no caso concreto.",
    ],
  },
  {
    heading: "Estimativas e simulações",
    paragraphs: [
      "As calculadoras e comparadores disponíveis no site trabalham com estimativas e premissas simplificadas. Isso significa que os números ajudam a orientar a decisão, mas não devem ser tratados como valor oficial de imposto, encargo ou resultado financeiro.",
      "Valores como DAS, alíquotas do Simples Nacional, faixas de faturamento e obrigações acessórias podem mudar ao longo do tempo. Sempre confirme as regras vigentes antes de abrir empresa, alterar regime, definir pró-labore ou tomar qualquer decisão tributária.",
    ],
  },
  {
    heading: "Afiliados e publicidade",
    paragraphs: [
      "Se em algum momento o site usar links externos ou recomendações de produtos, isso será informado de forma clara. A ideia é não confundir leitura editorial com indicação comercial.",
      "Quando houver qualquer referência externa, o usuário continua responsável por avaliar preço, adequação e condições antes de decidir por conta própria.",
    ],
  },
  {
    heading: "Limitação de responsabilidade",
    paragraphs: [
      "Este site não substitui contador, advogado ou consultor financeiro. As calculadoras e os textos ajudam na organização e na leitura do cenário, mas a decisão final precisa considerar o caso concreto.",
      "Também não assumimos responsabilidade por informações de terceiros, mudanças de regra ou indisponibilidade de serviços externos. Quando houver link para fora, ele será apenas uma referência de navegação.",
    ],
  },
  {
    heading: "Atualizações e contato",
    paragraphs: [
      "Este documento pode ser atualizado sempre que a operação do site mudar, quando novas integrações forem adicionadas ou quando a legislação exigir ajustes. A versão publicada nesta página é a referência vigente para navegação e consumo do conteúdo.",
      "Se você quiser questionar algum ponto, reportar inconsistência ou pedir esclarecimento sobre privacidade, use a página de contato do site.",
    ],
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Aviso legal",
  description:
    "Aviso legal do site: conteúdo informativo, estimativas financeiras e limitação de responsabilidade.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Aviso legal"
      description="Leia este aviso antes de usar as calculadoras, artigos e orientações publicadas no site."
      updatedAt="22 de abril de 2026"
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Aviso legal" }]}
      sections={disclaimerSections}
      footerNote="Ao continuar navegando, você entende que o conteúdo é informativo e que decisões financeiras ou tributárias precisam ser confirmadas com um profissional habilitado."
    />
  );
}

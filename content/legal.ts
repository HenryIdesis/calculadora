import { site } from "@/lib/site";

export const aboutSections = [
  {
    heading: "O que este projeto resolve",
    paragraphs: [
      "O site existe para ajudar o pequeno empreendedor a enxergar o dinheiro com mais clareza. Em vez de publicar conteúdo solto, a proposta é reunir calculadora, guias e páginas institucionais em um fluxo útil para quem vive a rotina de MEI e PJ.",
      "A prioridade editorial é responder dúvidas reais: quanto sobra no caixa, quando vale migrar de regime, como organizar imposto e como evitar erros básicos de operação.",
    ],
  },
  {
    heading: "Como o conteúdo é produzido",
    paragraphs: [
      "Os textos são escritos para leitura humana e pensados para mobile. Cada artigo segue uma estrutura objetiva, com contexto, passo a passo, erros comuns e orientação de próxima ação.",
      "O site pode usar anúncios e links de afiliado no futuro, mas os blocos de monetização ficam separados da leitura para preservar a experiência do usuário.",
    ],
  },
];

export const privacySections = [
  {
    heading: "Dados que podem ser coletados",
    paragraphs: [
      "O site pode coletar dados de navegação, páginas acessadas, idioma do navegador e informações técnicas de desempenho quando ferramentas de análise, publicidade ou afiliados forem ativadas.",
      "Se houver formulários de contato ou newsletter no futuro, os dados enviados voluntariamente pelo usuário também poderão ser tratados para responder mensagens e manter relacionamento editorial.",
    ],
  },
  {
    heading: "Uso de cookies e terceiros",
    paragraphs: [
      "Quando serviços como Google AdSense, analytics ou redes de afiliados forem habilitados, cookies e tecnologias semelhantes podem ser usados para medir audiência, exibir anúncios e atribuir conversões.",
      "O usuário pode gerenciar cookies no navegador. A desativação pode afetar algumas funcionalidades de medição e personalização.",
    ],
  },
  {
    heading: "Base de tratamento",
    paragraphs: [
      "O tratamento de dados segue as bases legais aplicáveis no Brasil, incluindo consentimento, legítimo interesse, cumprimento de obrigação legal e execução de medidas solicitadas pelo usuário.",
      "Em caso de dúvida, o usuário pode usar o contato editorial informado na página de contato para solicitar esclarecimentos.",
    ],
  },
];

export const termsSections = [
  {
    heading: "Uso do conteúdo",
    paragraphs: [
      "O conteúdo do site é informativo e educativo. Ele não substitui consultoria contábil, jurídica ou financeira individualizada.",
      "A utilização das calculadoras e guias é por conta e risco do usuário, que deve validar decisões relevantes antes de executá-las no negócio.",
    ],
  },
  {
    heading: "Links externos e monetização",
    paragraphs: [
      "O site pode incluir links externos, anúncios e recomendações de afiliados. Esses recursos podem gerar comissão ou receita publicitária sem custo adicional ao usuário.",
      "Não controlamos sites de terceiros e não nos responsabilizamos por políticas, preços ou resultados fora do nosso domínio.",
    ],
  },
  {
    heading: "Atualizações",
    paragraphs: [
      "As páginas podem ser atualizadas sem aviso prévio para refletir melhorias editoriais, ajustes técnicos ou mudanças na estrutura de monetização.",
      "Ao continuar navegando, o usuário concorda com os termos vigentes na data de acesso.",
    ],
  },
];

export const contactSections = [
  {
    heading: "Fale com a equipe editorial",
    paragraphs: [
      "Use este canal para sugerir pautas, reportar inconsistências, pedir correção de cálculo ou conversar sobre parcerias.",
      "O objetivo é manter o conteúdo útil, objetivo e confiável para quem usa o site no dia a dia.",
    ],
  },
  {
    heading: "Canal principal",
    paragraphs: [
      `E-mail editorial: ${site.contactEmail}`,
      "Se preferir, a página de contato pode ser transformada depois em formulário ou integração com um CRM sem mudar a navegação principal.",
    ],
  },
];

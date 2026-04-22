export const site = {
  name: "Finanças para MEI/PJ",
  shortName: "MEI/PJ",
  description:
    "Ferramentas e guias práticos para MEI e PJ no Brasil, com foco em decisão financeira, organização do caixa e conteúdo útil de verdade.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://simuladormei.com.br",
  locale: "pt-BR",
  contactEmail: "henryidesis.profissional@gmail.com",
  currency: "BRL",
};

export const siteNavigation = [
  { href: "/", label: "Home" },
  { href: "/ferramenta", label: "Ferramenta" },
  { href: "/guia", label: "Guias" },
  { href: "/faq", label: "FAQ" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export const legalNavigation = [
  { href: "/privacidade", label: "Privacidade" },
  { href: "/disclaimer", label: "Aviso legal" },
  { href: "/termos", label: "Termos" },
];

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "mei-vs-pj-quando-faz-sentido-migrar",
    title: "MEI ou PJ: quando faz sentido migrar de regime",
    description: "Entenda os sinais de que o MEI já ficou pequeno e como comparar custo, imposto e previsibilidade do caixa antes de mudar.",
    category: "Decisão",
    publishedAt: "2026-04-01",
    updatedAt: "2026-04-14",
    readingTime: "6 min",
    sections: [
      {
        heading: "O ponto de partida",
        paragraphs: [
          "O erro mais comum é tratar a migração como um passo simbólico, quando na prática ela precisa ser uma decisão financeira. O que importa não é apenas faturar mais, e sim quanto sobra depois de impostos, custos e obrigações.",
          "Se o negócio começou a ganhar recorrência, contratar apoio ou emitir notas com frequência, vale observar a estrutura do mês e não só o valor bruto da receita.",
        ],
      },
      {
        heading: "Sinais práticos de que o MEI ficou apertado",
        bullets: [
          "O faturamento já está perto do teto e exige atenção constante.",
          "Você começou a ter custo fixo relevante com contador, ferramentas ou terceiros.",
          "A operação precisa de mais previsibilidade para fechar contrato e crescer.",
        ],
        paragraphs: [
          "Quando esses sinais aparecem juntos, o MEI deixa de ser só uma simplificação tributária e passa a limitar a operação. Nesse caso, a comparação deve considerar o caixa líquido, não apenas o imposto nominal.",
        ],
      },
      {
        heading: "Como usar este conteúdo na prática",
        paragraphs: [
          "Antes de migrar, simule o cenário atual e o cenário PJ com os mesmos números de receita e despesa. A decisão fica mais clara quando você vê o que realmente sobra no fim do mês.",
        ],
      },
    ],
  },
  {
    slug: "como-calcular-imposto-no-mei-sem-erros",
    title: "Como calcular imposto no MEI sem erros",
    description: "Um guia direto para evitar confusão entre DAS, custo do negócio e dinheiro que realmente sobra.",
    category: "Impostos",
    publishedAt: "2026-03-29",
    updatedAt: "2026-04-10",
    readingTime: "5 min",
    sections: [
      {
        heading: "Separar imposto de faturamento",
        paragraphs: [
          "No MEI, a confusão costuma acontecer quando o empreendedor mistura entrada de dinheiro com lucro. O correto é olhar o faturamento bruto, descontar o custo operacional e então reservar o valor do DAS como obrigação mensal.",
          "Se o imposto fica no mesmo caixa da despesa pessoal, a sensação de sobra é ilusória.",
        ],
      },
      {
        heading: "Checklist mensal",
        bullets: [
          "Anote o faturamento total do mês.",
          "Separe custos de operação antes de pensar em retirada.",
          "Reserve o valor do DAS em uma conta ou subconta específica.",
        ],
        paragraphs: [
          "Esse hábito reduz atraso, evita surpresa e deixa o caixa mais legível para decidir se o negócio está crescendo de forma saudável.",
        ],
      },
      {
        heading: "Erro que gera problema",
        paragraphs: [
          "O erro mais caro é usar o dinheiro do imposto para cobrir buracos de curto prazo. Quando isso acontece por alguns meses, a operação passa a parecer melhor do que é e a regularização vira corrida atrás do prejuízo.",
        ],
      },
    ],
  },
  {
    slug: "como-organizar-faturamento-mensal-de-autonomos",
    title: "Como organizar o faturamento mensal de autônomos",
    description: "Uma rotina simples para saber o que entrou, o que saiu e o que pode ser retirado sem comprometer o negócio.",
    category: "Caixa",
    publishedAt: "2026-03-26",
    updatedAt: "2026-04-09",
    readingTime: "6 min",
    sections: [
      {
        heading: "O registro mínimo que funciona",
        paragraphs: [
          "Autônomos e prestadores de serviço não precisam de um sistema complexo para começar. Um controle mensal com data, origem, valor, meio de recebimento e status de pagamento já resolve boa parte da bagunça.",
          "O mais importante é registrar no mesmo dia ou no mesmo ciclo de recebimento.",
        ],
      },
      {
        heading: "Separar por destino",
        bullets: [
          "Receita do negócio",
          "Reserva de imposto",
          "Retirada do titular",
          "Investimento em operação",
        ],
        paragraphs: [
          "Quando cada entrada tem um destino, fica muito mais fácil enxergar se o mês foi realmente lucrativo ou apenas movimentado.",
        ],
      },
      {
        heading: "Ritual semanal",
        paragraphs: [
          "Reserve um horário fixo para conferir recebimentos pendentes e atualizar o saldo disponível. Esse hábito reduz esquecimento e deixa a gestão do caixa muito mais confiável.",
        ],
      },
    ],
  },
  {
    slug: "simples-nacional-o-que-olhar-antes-de-abrir-pj",
    title: "Simples Nacional: o que olhar antes de abrir PJ",
    description: "Antes de abrir a empresa, entenda receita, custo fixo, anexo e necessidade real de formalização.",
    category: "Regime",
    publishedAt: "2026-03-22",
    updatedAt: "2026-04-12",
    readingTime: "7 min",
    sections: [
      {
        heading: "O Simples não resolve tudo sozinho",
        paragraphs: [
          "A ideia de que PJ sempre paga menos é uma meia verdade. O regime tributário pode ser vantajoso, mas depende da atividade, da receita, do pró-labore e dos custos administrativos.",
          "A conta precisa considerar o mês inteiro, não só a alíquota de capa.",
        ],
      },
      {
        heading: "Fatores que mudam a conta",
        bullets: [
          "Frequência de emissão de notas",
          "Necessidade de contador",
          "Custo bancário e ferramentas de operação",
          "Percentual de imposto efetivo",
        ],
        paragraphs: [
          "Com esses pontos visíveis, a decisão deixa de ser achismo e passa a ser uma comparação concreta entre cenários.",
        ],
      },
      {
        heading: "Pergunta que vale fazer",
        paragraphs: [
          "Se você não abrir PJ agora, qual problema real isso gera no próximo trimestre? Se a resposta for só 'parece profissional', talvez ainda não seja hora.",
        ],
      },
    ],
  },
  {
    slug: "como-separar-conta-pessoal-e-conta-da-empresa",
    title: "Como separar conta pessoal e conta da empresa",
    description: "Uma rotina simples para evitar mistura de caixa e facilitar leitura financeira.",
    category: "Organização",
    publishedAt: "2026-03-19",
    updatedAt: "2026-04-08",
    readingTime: "5 min",
    sections: [
      {
        heading: "A regra que simplifica tudo",
        paragraphs: [
          "Misturar conta pessoal com conta da empresa cria ruído em qualquer negócio pequeno. Separar os fluxos logo no começo evita erro de leitura, ajuda no imposto e deixa claro o que pode ser retirado.",
          "A solução não precisa ser complexa: contas e cartões distintos já mudam a rotina.",
        ],
      },
      {
        heading: "Fluxo recomendado",
        bullets: [
          "Receita entra na conta do negócio.",
          "Reserva de imposto sai automaticamente.",
          "Retirada pessoal acontece em data fixa.",
        ],
        paragraphs: [
          "Esse desenho dá previsibilidade e reduz a tentação de usar o caixa do negócio como se fosse saldo livre.",
        ],
      },
    ],
  },
  {
    slug: "despesas-dedutiveis-o-que-guardar",
    title: "Despesas dedutíveis: o que vale guardar",
    description: "Como organizar comprovantes e separar gasto útil de gasto que só parece importante.",
    category: "Controle",
    publishedAt: "2026-03-18",
    updatedAt: "2026-04-07",
    readingTime: "5 min",
    sections: [
      {
        heading: "Não é sobre guardar tudo",
        paragraphs: [
          "Guardar comprovante por guardar cria arquivo morto. O que faz diferença é registrar despesas que realmente têm relação com a atividade e podem ser justificadas com facilidade.",
          "Esse hábito ajuda a entender a estrutura de custo e evita perda de tempo na hora de organizar o mês.",
        ],
      },
      {
        heading: "Classificação útil",
        bullets: [
          "Operação: ferramentas, tráfego, taxas e banco.",
          "Administração: contador, sistemas e apoio externo.",
          "Expansão: investimento que aumenta capacidade ou margem.",
        ],
        paragraphs: [
          "Com essas três categorias, a leitura do negócio fica mais clara e a tomada de decisão fica mais rápida.",
        ],
      },
    ],
  },
  {
    slug: "como-definir-pro-labore-sem-estrangular-o-caixa",
    title: "Como definir pró-labore sem estrangular o caixa",
    description: "Uma forma prática de separar retirada pessoal, reserva da empresa e previsibilidade financeira.",
    category: "Pró-labore",
    publishedAt: "2026-03-14",
    updatedAt: "2026-04-11",
    readingTime: "6 min",
    sections: [
      {
        heading: "O pró-labore precisa caber no mês",
        paragraphs: [
          "Pró-labore não é uma retirada emocional, e sim uma decisão de estrutura. Se ele ocupa mais caixa do que o negócio suporta, o problema aparece nas próximas semanas como atraso, aperto e falta de fôlego.",
          "Definir um valor fixo e revisar periodicamente funciona melhor do que sacar conforme a ansiedade do mês.",
        ],
      },
      {
        heading: "Como testar a saúde do valor",
        bullets: [
          "O negócio continua pagando custos e imposto sem atraso?",
          "A reserva de emergência da empresa cresce ou encolhe?",
          "A retirada pessoal depende de faturamento inesperado?",
        ],
        paragraphs: [
          "Se a resposta para uma dessas perguntas for negativa, o pró-labore provavelmente está acima do que o caixa suporta hoje.",
        ],
      },
    ],
  },
  {
    slug: "quando-o-mei-deixa-de-compensar",
    title: "Quando o MEI deixa de compensar",
    description: "Os sinais financeiros e operacionais que mostram quando a simplicidade começa a custar caro.",
    category: "Planejamento",
    publishedAt: "2026-03-11",
    updatedAt: "2026-04-06",
    readingTime: "6 min",
    sections: [
      {
        heading: "A simplicidade também tem custo",
        paragraphs: [
          "MEI compensa quando a operação realmente se beneficia da simplicidade. Quando o negócio cresce, a estrutura pode ficar pequena para contratos, volume de notas e custo de organização.",
          "Se a economia tributária é pequena perto da perda de oportunidades ou da limitação de faturamento, vale rever a estratégia.",
        ],
      },
      {
        heading: "Perguntas objetivas",
        bullets: [
          "Eu perdi negócios por causa do limite do MEI?",
          "Meu custo de operação cabe no modelo atual?",
          "A migração reduz risco ou cria burocracia desnecessária?",
        ],
        paragraphs: [
          "Responder com números ajuda mais do que comparar impressões vagas sobre formalização.",
        ],
      },
    ],
  },
  {
    slug: "como-montar-reserva-de-imposto",
    title: "Como montar reserva de imposto",
    description: "Uma rotina simples para não entrar no mês seguinte devendo para a empresa ou para o governo.",
    category: "Reserva",
    publishedAt: "2026-03-09",
    updatedAt: "2026-04-05",
    readingTime: "5 min",
    sections: [
      {
        heading: "Reserva automática é melhor do que memória",
        paragraphs: [
          "A reserva de imposto deve sair da receita assim que o dinheiro entra. Se você espera 'ver o que sobra', a chance de usar o valor em outra coisa é alta.",
          "Mesmo uma separação simples em conta ou subconta já melhora a disciplina do negócio.",
        ],
      },
      {
        heading: "Regra prática",
        bullets: [
          "Separe um percentual fixo logo no recebimento.",
          "Revise a estimativa a cada fechamento mensal.",
          "Trate a reserva como custo obrigatório, não como saldo livre.",
        ],
        paragraphs: [
          "Isso evita surpresa, reduz estresse e melhora a previsibilidade do caixa.",
        ],
      },
    ],
  },
  {
    slug: "erros-financeiros-que-travam-pequenos-negocios",
    title: "Erros financeiros que travam pequenos negócios",
    description: "Os deslizes mais comuns que fazem o empreendedor trabalhar muito e sobrar pouco.",
    category: "Erros",
    publishedAt: "2026-03-06",
    updatedAt: "2026-04-04",
    readingTime: "7 min",
    sections: [
      {
        heading: "Os erros que mais custam caro",
        bullets: [
          "Não registrar entradas e saídas com consistência.",
          "Misturar retirada pessoal com lucro do negócio.",
          "Aumentar custo fixo antes de validar receita.",
        ],
        paragraphs: [
          "Esses erros criam a sensação de progresso, mas enfraquecem o caixa. O negócio parece vivo, mas não ganha fôlego.",
        ],
      },
      {
        heading: "Como evitar",
        paragraphs: [
          "Uma rotina semanal de conferência já corta boa parte do problema. Não é glamour, é controle.",
        ],
      },
    ],
  },
  {
    slug: "como-usar-cartao-e-boleto-sem-baguncar-o-caixa",
    title: "Como usar cartão e boleto sem bagunçar o caixa",
    description: "Boas práticas para vender mais sem perder o controle do recebimento.",
    category: "Recebimento",
    publishedAt: "2026-03-03",
    updatedAt: "2026-04-03",
    readingTime: "5 min",
    sections: [
      {
        heading: "Recebimento parcelado exige previsão",
        paragraphs: [
          "Vender por cartão ou boleto facilita o fechamento comercial, mas traz atraso entre venda e entrada do dinheiro. Se isso não entra na conta, o caixa sofre mesmo com faturamento bom.",
          "A solução é olhar prazo, taxa e volume de parcelas antes de assumir que a venda valeu a pena.",
        ],
      },
      {
        heading: "Checklist",
        bullets: [
          "Anote prazo médio de recebimento.",
          "Desconte taxas da maquininha ou boleto.",
          "Separe o dinheiro de vendas futuras do caixa livre.",
        ],
      },
    ],
  },
  {
    slug: "taxas-de-maquininha-como-entrar-na-conta",
    title: "Taxas de maquininha: como entrar na conta",
    description: "Aprenda a medir se a taxa de cartão ainda faz sentido para o seu volume de vendas.",
    category: "Custos",
    publishedAt: "2026-03-01",
    updatedAt: "2026-04-02",
    readingTime: "5 min",
    sections: [
      {
        heading: "Taxa baixa nem sempre significa melhor margem",
        paragraphs: [
          "A taxa da maquininha precisa ser comparada ao fluxo de recebimento, ao prazo de liberação e ao ticket médio. O que parece barato pode travar capital de giro.",
          "Por isso, o cálculo deve considerar impacto no mês, não só percentual anunciado.",
        ],
      },
      {
        heading: "Como olhar a taxa",
        bullets: [
          "Qual é o custo total por venda?",
          "Quanto tempo o dinheiro leva para cair?",
          "O volume de vendas compensa o encargo?",
        ],
      },
    ],
  },
  {
    slug: "checklist-para-trocar-de-mei-para-pj",
    title: "Checklist para trocar de MEI para PJ",
    description: "Uma lista curta para validar estrutura, contador, preço e rotina antes da migração.",
    category: "Checklist",
    publishedAt: "2026-02-26",
    updatedAt: "2026-04-01",
    readingTime: "6 min",
    sections: [
      {
        heading: "Antes de trocar",
        bullets: [
          "Verifique o impacto no imposto mensal.",
          "Confirme se há custo de contador e conformidade.",
          "Reveja preço de serviço e margem.",
          "Teste o novo cenário no caixa de 3 meses.",
        ],
        paragraphs: [
          "Se a migração for feita com base em expectativa e não em caixa projetado, o risco de frustração aumenta.",
        ],
      },
    ],
  },
  {
    slug: "como-precificar-servico-com-margem",
    title: "Como precificar serviço com margem",
    description: "Estruture preço considerando custo, imposto, tempo e lucro, sem cair na armadilha do valor no achismo.",
    category: "Preço",
    publishedAt: "2026-02-22",
    updatedAt: "2026-03-29",
    readingTime: "7 min",
    sections: [
      {
        heading: "Preço precisa cobrir mais do que esforço",
        paragraphs: [
          "Serviço não se precifica só com base no tempo de execução. Também entram imposto, ferramentas, retrabalho, prazo de recebimento e capacidade ociosa.",
          "Quando tudo isso fica invisível, o lucro some mesmo com agenda cheia.",
        ],
      },
      {
        heading: "Camadas do preço",
        bullets: [
          "Custo direto do serviço",
          "Custo fixo mensal",
          "Margem desejada",
          "Imposto e taxas",
        ],
      },
    ],
  },
  {
    slug: "como-ler-fluxo-de-caixa-no-final-do-mes",
    title: "Como ler fluxo de caixa no fim do mês",
    description: "Um método rápido para saber se o mês foi saudável, apertado ou apenas movimentado.",
    category: "Fluxo",
    publishedAt: "2026-02-18",
    updatedAt: "2026-03-27",
    readingTime: "5 min",
    sections: [
      {
        heading: "Fechamento mensal em três perguntas",
        bullets: [
          "Quanto entrou de fato?",
          "Quanto saiu em custo e imposto?",
          "Quanto pode ser retirado sem comprometer o próximo ciclo?",
        ],
        paragraphs: [
          "Se o negócio responde isso com clareza, a tomada de decisão fica simples. Se não responde, o problema não é lucro, é visibilidade.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

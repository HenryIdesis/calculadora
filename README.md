# calculadora

Site em Next.js para o nicho de finanças de MEI/PJ no Brasil, com calculadora principal, guias editoriais e páginas institucionais.

## Stack

- Next.js App Router
- TypeScript strict
- Tailwind CSS
- lucide-react

## Estrutura

- `app/` rotas, metadata, sitemap e robots
- `components/` componentes reutilizáveis
- `data/` conteúdo estruturado de artigos e FAQ
- `content/` texto institucional e blocos editoriais
- `lib/` utilitários, SEO e cálculos
- `public/` ativos estáticos
- `styles/` espaço reservado para expansão de estilos

## Páginas

- `/` Home
- `/ferramenta` Comparador MEI x PJ
- `/guia` Lista de artigos
- `/guia/[slug]` Artigo individual
- `/sobre`
- `/contato`
- `/privacidade`
- `/termos`
- `/faq`

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run start
```

## Variável de ambiente

Defina a URL final do site antes de publicar:

```bash
NEXT_PUBLIC_SITE_URL=https://simuladormei.com.br
```

Sem essa variável, o projeto usa a URL de desenvolvimento configurada em `lib/site.ts` como fallback para canonical e metadados. Ajuste isso antes de publicar.

## Espaços complementares

Os espaços reservados em `components/ad-slot.tsx` aparecem em:

- topo
- meio do conteúdo
- final da página

## Próximos passos sugeridos

1. Ajustar `NEXT_PUBLIC_SITE_URL` para o domínio real.
2. Expandir a base editorial para 30+ artigos por cluster.
3. Adicionar formulário de contato com backend simples ou serviço externo.
4. Criar páginas de categoria para temas como imposto, caixa e pró-labore.

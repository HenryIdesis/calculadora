# calculadora

Site em Next.js para o nicho de finanças de MEI/PJ no Brasil, com calculadora principal, guias editoriais, páginas institucionais e base pronta para AdSense + afiliados.

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
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Configure isso antes de submeter o site para o Google AdSense. Canonical, sitemap, Open Graph e metadados dependem da URL final.

Sem essa variável, o projeto usa a URL de desenvolvimento configurada em `lib/site.ts` como fallback para canonical e metadados. Ajuste isso antes de publicar e, principalmente, antes de submeter ao Google AdSense.

## Monetização

Os slots de monetização já estão isolados em `components/ad-slot.tsx` e aparecem em:

- topo
- meio do conteúdo
- final da página

Os CTAs de afiliado também ficam separados para facilitar troca futura sem mexer no layout inteiro.

## Próximos passos sugeridos

1. Ajustar `NEXT_PUBLIC_SITE_URL` para o domínio real.
2. Conectar Google AdSense nos slots preparados.
3. Trocar o CTA de afiliado do artigo e da ferramenta por parceiros reais.
4. Expandir a base editorial para 30+ artigos por cluster.
5. Adicionar formulário de contato com backend simples ou serviço externo.
6. Criar páginas de categoria para temas como imposto, caixa e pró-labore.

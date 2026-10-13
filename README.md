# Site do Café Eté Ilhabela

Site de uma página (Next.js 16 + TypeScript + Tailwind CSS 4) para o Café Eté — cafeteria de cafés especiais e coworking na Praça do Museu Náutico, Centro Histórico de Ilhabela (SP).

## Rodar localmente

Requer **Node.js 20.9 ou mais novo** (recomendado: versão LTS em https://nodejs.org).

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Em modo `dev`, blocos tracejados amarelos mostram o que ainda está **pendente de confirmação** — eles nunca aparecem no site publicado.

Versão de produção:

```bash
npm run build
npm start
```

Outros comandos: `npm run typecheck` (verifica os tipos).

## Onde atualizar o conteúdo

Todo o conteúdo fica em `src/content/` — não é preciso mexer no layout.

| O que | Arquivo |
| --- | --- |
| Endereço, WhatsApp, Instagram, Maps, **horários**, foto principal | `src/content/site.ts` |
| **Cardápio** (itens, descrições, **preços**, fotos, etiquetas, aba Bebidas/Comidas) | `src/content/cardapio.ts` |
| Fotos do espaço e comodidades (Wi-Fi, tomadas, acessibilidade…) | `src/content/espaco.ts` |
| Nossa história e os textos de "O que você encontra no Eté" | `src/content/historia.ts` |

Regras do projeto:

- **Cardápio:** transcrito do cardápio "De volta às origens" (Canva). Para mudar um preço, altere `preco`. Um item só aparece com `confirmado: true`; categorias sem itens confirmados ficam ocultas. `grupo` define a aba (bebidas ou comidas); `restricoes` aceita `"vegana"` e `"veg"`; `rotulo` mostra uma etiqueta como "Criação da casa". A faixa de preço para o Google é calculada automaticamente.
- **Horários:** enquanto `horarios` for `null`, o site orienta o visitante a ver o destaque "Horários" do Instagram. Ao preencher, os horários aparecem na abertura, em "Visite", no rodapé e nos dados estruturados do Google.
- **Fotos:** salve em `public/fotos/`, preencha `src`, `alt` (descrição da foto) e, se souber, `largura`/`altura`. Use somente fotos do café ou com autorização. A primeira foto da galeria ocupa o espaço maior. Sem foto principal, a abertura mostra uma ilustração. A imagem de compartilhamento usa `public/fotos/mesa-cafe-da-manha.jpg` (troque em `src/app/opengraph-image.tsx`).
- **Comodidades:** só aparecem com `confirmado: true`.
- **Domínio:** defina `NEXT_PUBLIC_SITE_URL` (veja `.env.example`). Padrão: `https://cafeete.com.br`, o domínio indicado no Linktree oficial.

## Estrutura

```
src/
  app/
    layout.tsx            fontes, metadados (SEO, Open Graph), link "pular para o conteúdo"
    page.tsx              ordem das seções
    globals.css           cores, botões, animação (respeita "reduzir movimento")
    opengraph-image.tsx   imagem de compartilhamento (gerada, sem fotos de terceiros)
    sitemap.ts, robots.ts
    icon.svg              ícone provisório — trocar pelo logotipo oficial
  components/             cabeçalho, seções, mapa sob demanda, rodapé, dados estruturados
  content/                todo o conteúdo editável
```

## Privacidade e desempenho

- Sem analytics, pixels, cookies ou formulários. Por isso não há página de cookies/privacidade.
- O mapa (OpenStreetMap) só carrega quando o visitante clica em "Mostrar mapa aqui".
- Fontes são servidas pelo próprio site (next/font), sem chamadas ao Google Fonts no navegador.

Veja `PENDENCIAS.md` para a lista do que a equipe ainda precisa confirmar.

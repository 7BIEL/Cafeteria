# Pendências de conteúdo — Café Eté

Atualizado em 13/10/2026. Fontes: Linktree (linktr.ee/cafe.ete), Instagram (@cafe.ete.ilhabela), cardápio "De volta às origens" (Canva) e fotos enviadas pela equipe. O domínio cafeete.com.br hoje mostra só uma página "em breve" da HostGator.

## Já confirmado e publicado no site

- Endereço: Praça do Museu Náutico — Praça Cel. Julião de Moura Negrão, 121/137, Loja 3, Vila, Ilhabela – SP, CEP 11635-136 (Linktree).
- Google Maps, WhatsApp ("só chamar a Kika"), Instagram e "Trabalhe com a gente" (Linktree / bio).
- Café especial e coworking no Centro Histórico (Linktree). Princípios da bio: cafés especiais do Brasil, gastronomia cultural, regeneração.
- **Cardápio completo com preços** — 17 categorias, 79 itens, opções veganas/veg marcadas (Canva "De volta às origens").
- Texto de "Nossa história": apresentação escrita pela equipe no cardápio.
- Rodas de choro e oficina para baristas (posts de setembro/2026).
- 6 fotos enviadas pela equipe, em `public/fotos/`.

## Precisa da equipe

**Alta prioridade**
1. **O cardápio ainda vale?** O próprio texto diz "cardápio de outono" e hoje é primavera. Confirmar itens e preços atuais → `src/content/cardapio.ts`.
2. **Horários de funcionamento** → `src/content/site.ts`, campo `horarios`.
3. **Foto da mesa de coworking** (notebook, caneca, livros): foi enviada na conversa, mas o arquivo não chegou ao projeto. Salvar como `public/fotos/coworking.jpg` e preencher `src`, `largura` e `altura` em `src/content/espaco.ts`.
4. **Direitos das fotos**: confirmar que todas são do café ou têm autorização. Em especial a do espresso, que parece foto de banco de imagens com a marca aplicada.
5. **Fotos em resolução maior**: as enviadas têm ~700 px (uma tem 274 px), tiradas de prints do Instagram. Os originais (1600 px ou mais) deixam o site mais nítido.
6. **Logotipo oficial** em SVG ou PNG. Hoje o cabeçalho usa o nome "café.eté" em texto e o ícone do site (`src/app/icon.svg`) é provisório.

**Média prioridade**
7. **Origem do café**: quem está por trás, quando abriu, o que significa "Eté" → `origem` em `src/content/historia.ts`.
8. **"Veg" no cardápio**: quer dizer vegano ou vegetariano? (A empanada diz "vegana"; bolo Vó Alice, sorvete e espacial dizem "veg".)
9. **Coworking**: precisa reservar? Tem custo? Wi-Fi, tomadas? → `src/content/espaco.ts`.
10. **Vista para o mar**: o Linktree diz "curtir a vista pro mar". Confirmar e enviar foto antes de usar.
11. **Acessibilidade, pets, reservas** → `src/content/espaco.ts`.
12. **Foto da fachada** e uma dica para reconhecer a entrada → `src/content/espaco.ts` e `comoReconhecer` em `src/content/site.ts`.

**Técnico**
13. **Domínio final e hospedagem**: confirmar `cafeete.com.br` e o acesso (hoje há um WordPress "em breve" na HostGator). Para Next.js: Vercel, Netlify ou servidor com Node 20+.
14. **Mapa embutido**: testar "Mostrar mapa aqui" num navegador comum depois de publicar (no ambiente de desenvolvimento os blocos do mapa não carregaram dentro do quadro).

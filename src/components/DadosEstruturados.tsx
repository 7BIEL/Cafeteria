import { cardapio } from "@/content/cardapio";
import { site } from "@/content/site";

/**
 * Schema.org CafeOrCoffeeShop — apenas dados confirmados.
 * Horários entram automaticamente quando `site.horarios` for preenchido.
 * Não há avaliações nem notas: nada disso foi verificado.
 * A faixa de preço é calculada a partir do cardápio.
 */
export function DadosEstruturados() {
  const { endereco, links, horarios } = site;
  const precos = cardapio
    .flatMap((c) => c.itens)
    .filter((i) => i.confirmado && i.preco !== undefined)
    .map((i) => i.preco as number);

  const dados = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${site.url}/#cafe`,
    name: site.nomeCompleto,
    alternateName: site.nome,
    description: site.descricao,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${endereco.logradouro}, ${endereco.complemento}`,
      addressLocality: endereco.cidade,
      addressRegion: endereco.uf,
      postalCode: endereco.cep,
      addressCountry: endereco.pais,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: endereco.geo.latitude,
      longitude: endereco.geo.longitude,
    },
    hasMap: links.maps,
    sameAs: [links.instagram],
    servesCuisine: ["Cafés especiais", "Brasileira", "Latino-americana"],
    hasMenu: `${site.url}/#cardapio`,
    ...(precos.length ? { priceRange: `R$ ${Math.min(...precos)}–${Math.max(...precos)}` } : {}),
    ...(horarios
      ? {
          openingHoursSpecification: horarios.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.diasSchema,
            opens: h.abre,
            closes: h.fecha,
          })),
        }
      : {}),
    ...(site.fotoPrincipal.src ? { image: `${site.url}${site.fotoPrincipal.src}` } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify de dados fixos do próprio projeto; `<` escapado por segurança.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }}
    />
  );
}

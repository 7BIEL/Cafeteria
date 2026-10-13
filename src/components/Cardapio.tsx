import Image from "next/image";
import {
  avisoCardapio,
  cardapio,
  cardapioAtual,
  formatarPreco,
  fotoCardapio,
  type CategoriaCardapio,
  type ItemCardapio,
} from "@/content/cardapio";
import { site } from "@/content/site";
import { AbasCardapio } from "./AbasCardapio";
import { FotoOuReserva } from "./FotoOuReserva";
import { IconeWhatsApp } from "./Icones";
import { LinkExterno } from "./LinkExterno";

const nomeRestricao = { vegana: "Vegana", veg: "Veg" } as const;

function Item({ item }: { item: ItemCardapio }) {
  const etiquetas = [
    ...(item.rotulo ? [{ texto: item.rotulo, forte: true }] : []),
    ...(item.restricoes ?? []).map((r) => ({ texto: nomeRestricao[r], forte: false })),
  ];

  return (
    <li className="flex gap-4 py-3.5">
      {item.foto?.src ? (
        <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-crema-escuro sm:size-20">
          <Image src={item.foto.src} alt={item.foto.alt} fill sizes="80px" className="object-cover" />
        </div>
      ) : null}

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <h4 className="font-display text-[1.15rem] leading-snug font-medium">{item.nome}</h4>
          {item.preco !== undefined ? (
            <>
              <span
                aria-hidden="true"
                className="min-w-4 flex-1 translate-y-[-0.3em] border-b-2 border-dotted border-grao/30"
              />
              <span className="font-semibold whitespace-nowrap tabular-nums">
                {formatarPreco(item.preco)}
              </span>
            </>
          ) : null}
        </div>

        {item.descricao ? <p className="mt-0.5 text-[0.97rem] leading-snug text-grao">{item.descricao}</p> : null}

        {etiquetas.length ? (
          <ul className="mt-1.5 flex flex-wrap gap-1.5" aria-label="Etiquetas">
            {etiquetas.map((e) => (
              <li
                key={e.texto}
                className={`rounded-full px-2.5 py-0.5 text-sm font-medium ${
                  e.forte ? "bg-vinho text-filtro" : "border border-vinho text-vinho"
                }`}
              >
                {e.texto}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}

function Categorias({ categorias }: { categorias: CategoriaCardapio[] }) {
  return (
    <div className="gap-x-10 sm:columns-2">
      {categorias.map((categoria) => (
        <section
          key={categoria.id}
          aria-labelledby={`cat-${categoria.id}`}
          className="mb-9 break-inside-avoid"
        >
          <h3
            id={`cat-${categoria.id}`}
            className="border-b-2 border-torra pb-1.5 text-[1.6rem] font-medium italic"
          >
            {categoria.nome}
          </h3>
          {categoria.descricao ? <p className="mt-2 text-grao">{categoria.descricao}</p> : null}
          <ul className="divide-y divide-crema-escuro">
            {categoria.itens.map((item) => (
              <Item key={item.nome} item={item} />
            ))}
          </ul>
          {categoria.nota ? <p className="mt-1 text-[0.95rem] text-grao italic">{categoria.nota}</p> : null}
        </section>
      ))}
    </div>
  );
}

export function Cardapio() {
  const visiveis = cardapio
    .map((c) => ({ ...c, itens: c.itens.filter((i) => i.confirmado) }))
    .filter((c) => c.itens.length > 0);

  const abas = [
    { id: "bebidas", rotulo: "Bebidas" },
    { id: "comidas", rotulo: "Comidas" },
  ]
    .map((g) => ({
      ...g,
      categorias: visiveis.filter((c) => c.grupo === g.id),
    }))
    .filter((g) => g.categorias.length > 0)
    .map((g) => ({ id: g.id, rotulo: g.rotulo, conteudo: <Categorias categorias={g.categorias} /> }));

  return (
    <section id="cardapio" aria-labelledby="titulo-cardapio" className="px-3 py-16 sm:px-5 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-painel bg-crema px-6 py-12 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14 lg:px-14 lg:py-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="titulo-cardapio" className="titulo-secao">
            Cardápio
          </h2>
          <p className="mt-3 font-display text-2xl text-vinho italic">{cardapioAtual.nome}</p>
          <p className="mt-4 max-w-[40ch] text-lg text-grao">{cardapioAtual.apresentacao}</p>

          <div className="relative mt-7 aspect-square overflow-hidden rounded-cartao bg-crema-escuro">
            <FotoOuReserva foto={fotoCardapio} sizes="(min-width: 1024px) 30vw, 100vw" />
          </div>

          <blockquote className="mt-6 border-l-4 border-vinho pl-4 text-[1.02rem] text-grao italic">
            {cardapioAtual.recado}
          </blockquote>

          <LinkExterno href={site.links.whatsapp} className="botao botao-primario mt-7">
            <IconeWhatsApp />
            Perguntar o que tem hoje
          </LinkExterno>
        </div>

        <div>
          <AbasCardapio abas={abas} />
          {avisoCardapio ? (
            <p className="mt-2 border-t border-crema-escuro pt-5 text-[0.95rem] text-grao">
              {avisoCardapio}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

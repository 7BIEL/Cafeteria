import { historia } from "@/content/historia";
import { site } from "@/content/site";
import { IconeInstagram } from "./Icones";
import { LinkExterno } from "./LinkExterno";
import { Pendente } from "./Pendente";

export function Historia() {
  const paragrafos = [...historia.origem, ...historia.paragrafos];

  return (
    <section id="historia" aria-labelledby="titulo-historia" className="px-3 sm:px-5">
      <div className="sobre-escuro mx-auto grid max-w-7xl gap-10 rounded-painel bg-vinho px-6 py-14 text-filtro sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-14 lg:py-20">
        <div>
          <h2 id="titulo-historia" className="titulo-secao">
            Nossa história
          </h2>
          <p className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-display text-xl text-rosa-claro italic">
            {site.principios.map((p, i) => (
              <span key={p}>
                {p}
                {i < site.principios.length - 1 ? <span aria-hidden="true"> /</span> : null}
              </span>
            ))}
          </p>
        </div>

        <div className="max-w-[60ch]">
          {historia.origem.length === 0 ? (
            <Pendente>
              Falta a origem do café (quem está por trás, quando abriu, o significado de “Eté”).
              Hoje a seção usa o texto de apresentação do cardápio. Edite{" "}
              <code>src/content/historia.ts</code>.
            </Pendente>
          ) : null}

          <div className="space-y-5 font-display text-[1.3rem] leading-[1.55] font-light sm:text-[1.45rem]">
            {paragrafos.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          <p className="mt-8 text-lg text-filtro/85">{historia.encontros}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkExterno href={site.links.instagram} className="botao botao-claro">
              <IconeInstagram />
              Acompanhar no Instagram
            </LinkExterno>
            <LinkExterno href={site.links.trabalheConosco} className="botao botao-contorno-claro">
              Trabalhe com a gente
            </LinkExterno>
          </div>
        </div>
      </div>
    </section>
  );
}

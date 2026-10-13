import { comodidades, galeria } from "@/content/espaco";
import { site } from "@/content/site";
import { FotoOuReserva } from "./FotoOuReserva";
import { IconeInstagram } from "./Icones";
import { LinkExterno } from "./LinkExterno";
import { Pendente } from "./Pendente";

/** Classes de grade para cada posição, conforme o total de fotos. */
function posicao(i: number, total: number) {
  if (i === 0) return "sm:col-span-2 sm:row-span-2";
  if (total >= 4 && i === 1) return "lg:row-span-2";
  return "";
}

export function Espaco() {
  const confirmadas = comodidades.filter((c) => c.confirmado);
  const pendentes = comodidades.filter((c) => !c.confirmado);
  const emDesenvolvimento = process.env.NODE_ENV === "development";
  // No site publicado só entram fotos reais; em desenvolvimento, também os espaços reservados.
  const exibidas = emDesenvolvimento ? galeria : galeria.filter((f) => f.src);
  const colunas = exibidas.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section id="espaco" aria-labelledby="titulo-espaco" className="px-3 pb-16 sm:px-5 sm:pb-24">
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2 id="titulo-espaco" className="titulo-secao">
            O espaço
          </h2>
          <div>
            <p className="max-w-[52ch] text-lg">
              O {site.nome} fica na Loja 3 da {site.endereco.referencia}, no coração da Vila. Luz
              natural, muitas plantas, luminárias de palha e mesas para todo ritmo: um café rápido
              no meio do passeio, uma leitura sem pressa ou uma manhã inteira de trabalho.
            </p>

            {confirmadas.length ? (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="O que o espaço oferece">
                {confirmadas.map((c) => (
                  <li
                    key={c.nome}
                    className="rounded-full bg-vinho px-4 py-1.5 text-[0.95rem] font-medium text-filtro"
                  >
                    {c.nome}
                  </li>
                ))}
              </ul>
            ) : null}

            <Pendente>
              Confirmar com a equipe antes de exibir: {pendentes.map((c) => c.nome).join(", ")}.
              Marque <code>confirmado: true</code> em <code>src/content/espaco.ts</code>.
            </Pendente>

            <p className="mt-6">
              <LinkExterno href={site.links.instagram} className="botao botao-contorno">
                <IconeInstagram />
                Ver mais fotos no Instagram
              </LinkExterno>
            </p>
          </div>
        </div>

        {exibidas.length ? (
          <ul
            className={`mt-12 grid auto-rows-[240px] grid-cols-1 gap-3 sm:auto-rows-[260px] sm:grid-cols-2 ${colunas}`}
            aria-label="Fotos do espaço"
          >
            {exibidas.map((foto, i) => (
              <li
                key={foto.src ?? foto.instrucao}
                className={`relative overflow-hidden rounded-cartao bg-crema ${posicao(i, exibidas.length)}`}
              >
                <FotoOuReserva
                  foto={foto}
                  sizes={
                    i === 0
                      ? "(min-width: 640px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  }
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

import { pilares } from "@/content/historia";
import { Pendente } from "./Pendente";

export function Experiencia() {
  return (
    <section aria-labelledby="titulo-experiencia" className="px-3 pb-16 sm:px-5 sm:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-3 sm:px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-14">
        <div>
          <h2 id="titulo-experiencia" className="titulo-secao max-w-[14ch]">
            O que você encontra no Eté
          </h2>
          <p className="mt-5 max-w-[40ch] text-lg text-grao">
            Um café pequeno no meio do Centro Histórico, pensado para quem está de passagem e para
            quem mora na ilha e quer um lugar para voltar.
          </p>
        </div>

        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {pilares.map((p) => (
            <li key={p.titulo} className="border-t-2 border-vinho pt-5">
              <h3 className="text-[1.6rem] font-medium">{p.titulo}</h3>
              {p.descricao ? (
                <p className="mt-2 text-grao">{p.descricao}</p>
              ) : (
                <Pendente>
                  Texto de “{p.titulo}” em <code>src/content/historia.ts</code>. Sem descrição, o
                  site mostra só o título.
                </Pendente>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

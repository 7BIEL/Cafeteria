import { site } from "@/content/site";
import { IconeInstagram, IconeMapa, IconeWhatsApp } from "./Icones";
import { LinkExterno } from "./LinkExterno";
import { MapaSobDemanda } from "./MapaSobDemanda";
import { Pendente } from "./Pendente";

export function Visite() {
  const { endereco, links, horarios, comoReconhecer } = site;

  return (
    <section id="visite" aria-labelledby="titulo-visite" className="px-3 py-16 sm:px-5 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-3 sm:px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-14">
        <div>
          <h2 id="titulo-visite" className="titulo-secao">
            Visite
          </h2>

          <address className="mt-7 not-italic">
            <p className="font-display text-[1.6rem] leading-snug font-medium">
              {endereco.referencia}
            </p>
            <p className="mt-2 text-lg text-grao">
              {endereco.logradouro}, {endereco.complemento}
              <br />
              {endereco.bairro} ({endereco.regiao}), {endereco.cidade} – {endereco.uf}
              <br />
              CEP {endereco.cep}
            </p>
          </address>

          {comoReconhecer ? <p className="mt-5 max-w-[46ch]">{comoReconhecer}</p> : null}

          <div className="mt-8">
            <h3 className="font-sans text-base font-semibold tracking-normal">Horários</h3>
            {horarios ? (
              <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
                {horarios.map((h) => (
                  <div key={h.dias} className="contents">
                    <dt>{h.dias}</dt>
                    <dd className="tabular-nums">
                      {h.abre} às {h.fecha}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-1 max-w-[44ch] text-grao">
                Confira os horários do dia no destaque “Horários” do{" "}
                <LinkExterno href={links.instagram} className="link-texto">
                  Instagram {links.instagramUsuario}
                </LinkExterno>{" "}
                ou pergunte no WhatsApp antes de sair.
              </p>
            )}
          </div>

          <Pendente>
            Faltam: horários de funcionamento e uma dica para reconhecer a fachada. Preencha{" "}
            <code>horarios</code> e <code>comoReconhecer</code> em <code>src/content/site.ts</code>.
          </Pendente>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkExterno href={links.maps} className="botao botao-primario">
              <IconeMapa />
              Abrir no Google Maps
            </LinkExterno>
            <LinkExterno href={links.whatsapp} className="botao botao-contorno">
              <IconeWhatsApp />
              Falar com a equipe
            </LinkExterno>
            <LinkExterno href={links.instagram} className="botao botao-contorno">
              <IconeInstagram />
              Instagram
            </LinkExterno>
          </div>
        </div>

        <MapaSobDemanda
          latitude={endereco.geo.latitude}
          longitude={endereco.geo.longitude}
          linkMapa={links.maps}
        />
      </div>
    </section>
  );
}

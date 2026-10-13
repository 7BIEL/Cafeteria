import { enderecoLinha, site } from "@/content/site";
import { LinkExterno } from "./LinkExterno";

export function Rodape() {
  const ano = new Date().getFullYear();
  const { links, horarios } = site;

  return (
    <footer className="sobre-escuro bg-torra px-6 pt-14 pb-10 text-filtro sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-9">
        <div>
          <p className="text-4xl font-bold tracking-tight">
            <span aria-hidden="true">{site.marca}</span>
            <span className="sr-only">{site.nome}</span>
          </p>
          <p className="mt-3 max-w-[36ch] text-filtro/75">{site.descricao}</p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal text-laranja">Endereço</h2>
          <address className="mt-2 not-italic text-filtro/85">
            {site.endereco.referencia}
            <br />
            {enderecoLinha}
            <br />
            CEP {site.endereco.cep}
          </address>
          {horarios ? (
            <>
              <h2 className="mt-6 font-sans text-sm font-semibold tracking-normal text-laranja">
                Horários
              </h2>
              <ul className="mt-2 text-filtro/85">
                {horarios.map((h) => (
                  <li key={h.dias}>
                    {h.dias}: {h.abre} às {h.fecha}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal text-laranja">Contato</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <LinkExterno href={links.whatsapp} className="underline-offset-4 hover:underline">
                WhatsApp
              </LinkExterno>
            </li>
            <li>
              <LinkExterno href={links.instagram} className="underline-offset-4 hover:underline">
                Instagram {links.instagramUsuario}
              </LinkExterno>
            </li>
            <li>
              <LinkExterno href={links.maps} className="underline-offset-4 hover:underline">
                Google Maps
              </LinkExterno>
            </li>
            <li>
              <LinkExterno href={links.trabalheConosco} className="underline-offset-4 hover:underline">
                Trabalhe com a gente
              </LinkExterno>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-filtro/15 pt-6 text-sm text-filtro/65 sm:flex-row sm:justify-between lg:px-9">
        <p>
          © {ano} {site.nomeCompleto}. Todos os direitos reservados.
        </p>
        <p>
          <a href="#inicio" className="underline-offset-4 hover:underline">
            Voltar ao topo
          </a>
        </p>
      </div>
    </footer>
  );
}

import { site, enderecoLinha } from "@/content/site";
import { ArteVapor } from "./ArteVapor";
import { FotoOuReserva } from "./FotoOuReserva";
import { IconeMapa, IconeRelogio, IconeWhatsApp } from "./Icones";
import { LinkExterno } from "./LinkExterno";

export function Abertura() {
  const { fotoPrincipal, horarios, links, endereco } = site;

  return (
    <section id="inicio" aria-labelledby="titulo-inicio" className="px-3 pt-4 sm:px-5">
      <div className="sobre-escuro mx-auto grid max-w-7xl overflow-hidden rounded-painel bg-torra text-filtro lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center px-6 pt-12 pb-10 sm:px-10 sm:pt-16 lg:py-24 lg:pr-6 lg:pl-14">
          <h1
            id="titulo-inicio"
            className="max-w-[12ch] text-[clamp(2.9rem,1.9rem+5vw,5.6rem)] leading-[0.98] font-medium"
            style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
          >
            Pare na Vila. Fique para o café.
          </h1>

          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-filtro/85">
            Cafés especiais do Brasil e cozinha afetiva — de pão de cará a cuscuz nordestino — na{" "}
            {endereco.referencia}, no Centro Histórico de Ilhabela. Dá para passar rápido, sentar
            com calma ou abrir o notebook e trabalhar.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#cardapio" className="botao botao-claro">
              Ver cardápio
            </a>
            <a href="#visite" className="botao botao-contorno-claro">
              <IconeMapa />
              Como chegar
            </a>
            <LinkExterno href={links.whatsapp} className="botao botao-contorno-claro">
              <IconeWhatsApp />
              Falar no WhatsApp
            </LinkExterno>
          </div>
        </div>

        <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
          <FotoOuReserva
            foto={fotoPrincipal}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            semFoto={<ArteVapor className="absolute inset-0 h-full w-full" />}
          />
        </div>
      </div>

      {/* Respostas rápidas para quem está planejando a visita */}
      <ul className="mx-auto grid max-w-7xl md:grid-cols-3">
        <li className="flex gap-3 px-6 py-6 sm:px-8">
          <IconeMapa className="mt-0.5 size-6 shrink-0 text-vinho" />
          <div>
            <h2 className="font-sans text-sm font-semibold tracking-normal text-grao">Onde fica</h2>
            <p className="mt-1 leading-snug">
              {endereco.referencia}
              <span className="block text-[0.95rem] text-grao">{enderecoLinha}</span>
            </p>
          </div>
        </li>
        <li className="flex gap-3 px-6 py-6 sm:px-8">
          <IconeRelogio className="mt-0.5 size-6 shrink-0 text-vinho" />
          <div>
            <h2 className="font-sans text-sm font-semibold tracking-normal text-grao">Horários</h2>
            {horarios ? (
              <ul className="mt-1 leading-snug">
                {horarios.map((h) => (
                  <li key={h.dias}>
                    {h.dias}: {h.abre} às {h.fecha}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-1 leading-snug">
                Os horários atualizados ficam no destaque “Horários” do{" "}
                <LinkExterno href={links.instagram} className="link-texto">
                  Instagram
                </LinkExterno>
                .
              </p>
            )}
          </div>
        </li>
        <li className="flex gap-3 px-6 py-6 sm:px-8">
          <IconeWhatsApp className="mt-0.5 size-6 shrink-0 text-vinho" />
          <div>
            <h2 className="font-sans text-sm font-semibold tracking-normal text-grao">
              Fale com a equipe
            </h2>
            <p className="mt-1 leading-snug">
              Dúvidas sobre o cardápio do dia ou o coworking?{" "}
              <LinkExterno href={links.whatsapp} className="link-texto">
                Chame a {links.whatsappAtendente} no WhatsApp
              </LinkExterno>
              .
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

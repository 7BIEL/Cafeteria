"use client";

import { useEffect, useState } from "react";
import { IconeMapa } from "./Icones";
import { LinkExterno } from "./LinkExterno";

type Estado = "parado" | "carregando" | "pronto" | "erro";

/**
 * Mapa do OpenStreetMap carregado só quando a pessoa pede: a página abre mais
 * rápido e nenhum serviço externo é acionado sem ação do visitante.
 * O botão "Abrir no Google Maps" continua sendo o caminho principal para rotas.
 */
export function MapaSobDemanda({
  latitude,
  longitude,
  linkMapa,
}: {
  latitude: number;
  longitude: number;
  linkMapa: string;
}) {
  const [estado, setEstado] = useState<Estado>("parado");

  useEffect(() => {
    if (estado !== "carregando") return;
    const limite = window.setTimeout(() => setEstado("erro"), 15000);
    return () => window.clearTimeout(limite);
  }, [estado]);

  const margem = 0.0022;
  const bbox = [longitude - margem, latitude - margem, longitude + margem, latitude + margem]
    .map((n) => n.toFixed(5))
    .join(",");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-cartao bg-crema sm:aspect-[16/11]">
      {estado === "parado" ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <IconeMapa className="size-10 text-vinho" />
          <p className="max-w-[32ch] text-grao">
            Veja o ponto exato do café no mapa. Ele vem do OpenStreetMap e só carrega se você pedir.
          </p>
          <button type="button" className="botao botao-primario" onClick={() => setEstado("carregando")}>
            Mostrar mapa aqui
          </button>
        </div>
      ) : null}

      {estado === "carregando" || estado === "pronto" ? (
        <>
          {estado === "carregando" ? (
            <p role="status" className="absolute inset-0 flex items-center justify-center text-grao">
              Carregando o mapa…
            </p>
          ) : null}
          <iframe
            title="Mapa com a localização do Café Eté na Praça do Museu Náutico, Vila, Ilhabela"
            src={src}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            onLoad={() => setEstado("pronto")}
          />
        </>
      ) : null}

      {estado === "erro" ? (
        <div
          role="alert"
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center"
        >
          <p className="max-w-[32ch]">O mapa não carregou aqui. Abra a localização direto no Google Maps.</p>
          <LinkExterno href={linkMapa} className="botao botao-primario">
            Abrir no Google Maps
          </LinkExterno>
        </div>
      ) : null}
    </div>
  );
}

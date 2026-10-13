"use client";

import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { IconeFechar, IconeMapa, IconeMenu } from "./Icones";

const navegacao = [
  { href: "#inicio", rotulo: "Início" },
  { href: "#cardapio", rotulo: "Cardápio" },
  { href: "#espaco", rotulo: "O espaço" },
  { href: "#historia", rotulo: "Nossa história" },
  { href: "#visite", rotulo: "Visite" },
];

export function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);
  const painelId = useId();

  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false);
        botaoRef.current?.focus();
      }
    };
    const aoRedimensionar = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setAberto(false);
    };
    document.addEventListener("keydown", aoTeclar);
    window.addEventListener("resize", aoRedimensionar);
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      window.removeEventListener("resize", aoRedimensionar);
    };
  }, [aberto]);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl rounded-[1.4rem] border border-crema-escuro/60 bg-filtro/90 shadow-[0_8px_30px_-18px_rgb(43_27_19_/_0.45)] backdrop-blur-md supports-[not(backdrop-filter:blur(1px))]:bg-filtro">
        <div className="flex items-center justify-between gap-4 py-2 pr-2 pl-5">
          <a href="#inicio" className="text-[1.5rem] leading-none font-bold tracking-tight text-vinho">
            <span aria-hidden="true">{site.marca}</span>
            <span className="sr-only">{site.nome} — voltar ao início</span>
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-grao transition-colors hover:bg-crema hover:text-torra"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#visite" className="botao botao-primario hidden min-h-11 px-5 sm:inline-flex">
              <IconeMapa />
              Como chegar
            </a>
            <button
              ref={botaoRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full text-torra hover:bg-crema lg:hidden"
              aria-expanded={aberto}
              aria-controls={painelId}
              onClick={() => setAberto((v) => !v)}
            >
              {aberto ? <IconeFechar className="size-6" /> : <IconeMenu className="size-6" />}
              <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
            </button>
          </div>
        </div>

        <nav
          id={painelId}
          aria-label="Principal (celular)"
          hidden={!aberto}
          className="border-t border-crema-escuro/60 px-3 pt-2 pb-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="block rounded-xl px-3 py-3 font-display text-2xl text-torra hover:bg-crema"
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#visite"
            onClick={() => setAberto(false)}
            className="botao botao-primario mt-3 w-full sm:hidden"
          >
            <IconeMapa />
            Como chegar
          </a>
        </nav>
      </div>
    </header>
  );
}

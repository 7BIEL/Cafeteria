"use client";

import { useId, useRef, useState } from "react";

type Aba = { id: string; rotulo: string; conteudo: React.ReactNode };

/**
 * Abas acessíveis (padrão WAI-ARIA): setas esquerda/direita, Home e End
 * trocam de aba; o painel inativo fica oculto com `hidden`.
 */
export function AbasCardapio({ abas }: { abas: Aba[] }) {
  const [ativa, setAtiva] = useState(0);
  const base = useId();
  const botoes = useRef<(HTMLButtonElement | null)[]>([]);

  const irPara = (i: number) => {
    const destino = (i + abas.length) % abas.length;
    setAtiva(destino);
    botoes.current[destino]?.focus();
  };

  const aoTeclar = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "ArrowRight") irPara(i + 1);
    else if (e.key === "ArrowLeft") irPara(i - 1);
    else if (e.key === "Home") irPara(0);
    else if (e.key === "End") irPara(abas.length - 1);
    else return;
    e.preventDefault();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Partes do cardápio"
        className="inline-flex rounded-full bg-filtro p-1 shadow-[inset_0_0_0_1px_var(--color-crema-escuro)]"
      >
        {abas.map((aba, i) => (
          <button
            key={aba.id}
            ref={(el) => {
              botoes.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-aba-${aba.id}`}
            aria-selected={ativa === i}
            aria-controls={`${base}-painel-${aba.id}`}
            tabIndex={ativa === i ? 0 : -1}
            onClick={() => setAtiva(i)}
            onKeyDown={(e) => aoTeclar(e, i)}
            className={`min-h-11 rounded-full px-6 text-base font-semibold transition-colors ${
              ativa === i ? "bg-torra text-filtro" : "text-grao hover:text-torra"
            }`}
          >
            {aba.rotulo}
          </button>
        ))}
      </div>

      {abas.map((aba, i) => (
        <div
          key={aba.id}
          role="tabpanel"
          id={`${base}-painel-${aba.id}`}
          aria-labelledby={`${base}-aba-${aba.id}`}
          hidden={ativa !== i}
          tabIndex={0}
          className="mt-8 rounded-xl"
        >
          {aba.conteudo}
        </div>
      ))}
    </div>
  );
}

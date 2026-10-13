import { Abertura } from "@/components/Abertura";
import { Cabecalho } from "@/components/Cabecalho";
import { Cardapio } from "@/components/Cardapio";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { Espaco } from "@/components/Espaco";
import { Experiencia } from "@/components/Experiencia";
import { Historia } from "@/components/Historia";
import { Rodape } from "@/components/Rodape";
import { Visite } from "@/components/Visite";

export default function Pagina() {
  return (
    <>
      <DadosEstruturados />
      <Cabecalho />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Abertura />
        <Cardapio />
        <Experiencia />
        <Espaco />
        <Historia />
        <Visite />
      </main>
      <Rodape />
    </>
  );
}

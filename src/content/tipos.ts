/**
 * Tipos compartilhados pelos arquivos de conteúdo.
 *
 * Regra do projeto: nada aparece no site publicado sem confirmação.
 * Campos `null` ou listas vazias são tratados como "pendente" — o layout
 * simplesmente não exibe o bloco em produção (e mostra um aviso em `npm run dev`).
 */

export type Foto = {
  /** Caminho a partir de /public, ex.: "/fotos/fachada.jpg". `null` = foto pendente. */
  src: string | null;
  /** Texto alternativo descritivo (obrigatório quando houver foto). */
  alt: string;
  /** Orientação para quem for fotografar ou escolher a imagem. Só aparece em desenvolvimento. */
  instrucao: string;
  /** Dimensões originais da foto, em pixels (melhora o carregamento). */
  largura?: number;
  altura?: number;
};

export type Horario = {
  /** Ex.: "Terça a domingo" */
  dias: string;
  /** Formato 24h, ex.: "08:00" */
  abre: string;
  fecha: string;
  /** Dias no padrão Schema.org, para os dados estruturados. */
  diasSchema: Array<
    "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
  >;
};

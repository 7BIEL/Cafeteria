/**
 * NOSSA HISTÓRIA
 *
 * Os parágrafos abaixo vêm do texto de apresentação do cardápio
 * "De volta às origens", escrito pela própria equipe.
 *
 * PENDENTE: a equipe ainda pode enviar a origem do Café Eté — quem está por
 * trás, quando abriu e o que significa o nome "Eté". Quando chegar, coloque em
 * `origem` (um parágrafo por item). Enquanto `origem` estiver vazia, o site
 * mostra só os parágrafos abaixo.
 */
export const historia = {
  origem: [] as string[],

  paragrafos: [
    "No Café Eté, acreditamos que cada xícara de café e cada pedaço de pão podem contar uma história. Queremos te levar para um lugar conhecido, ainda que surpreendente: de volta às origens.",
    "É um convite para desacelerar. Para lembrar do cheiro da casa da vó. Do café coado com calma. Do bolo que saía do forno enquanto a rua amanhecia molhada. Das mãos que amassam pão no ritmo da vida — lento, firme, amoroso.",
    "Dos grãos de café colhidos por famílias brasileiras às fermentações naturais feitas aqui, todo preparo é uma homenagem à nossa latinidade, à terra e às mãos que trabalham com propósito.",
  ],

  /** Fatos publicados no Instagram. */
  encontros:
    "Além do balcão, o café abre espaço para encontros: já recebeu rodas de choro abertas a quem quisesse levar seu instrumento e oficinas para baristas. A programação sai no Instagram.",
};

/**
 * Pilares da experiência (seção "O que você encontra no Eté").
 * Baseados na bio do Instagram e no cardápio. `descricao: null` = só o título aparece.
 */
export const pilares: { titulo: string; descricao: string | null }[] = [
  {
    titulo: "Cafés especiais do Brasil",
    descricao:
      "Grãos colhidos por famílias brasileiras, do espresso aos microlotes preparados na mesa em V60, prensa francesa ou Aeropress. Quer comparar? Peça a degustação com três cafés.",
  },
  {
    titulo: "Gastronomia cultural",
    descricao:
      "Cozinha afetiva e latina: pão de cará, cuscuz nordestino, empanadas e bolos com nome de vó. As opções veganas vêm marcadas no cardápio.",
  },
  {
    titulo: "Coworking na Vila",
    descricao:
      "Dá para abrir o notebook e trabalhar com um café ao lado. Se for ficar por mais tempo, combine antes pelo WhatsApp.",
  },
  {
    titulo: "Regeneração",
    descricao:
      "Ingredientes locais, fermentações naturais feitas na casa e receitas que respeitam o tempo, o ciclo e o cuidado.",
  },
];

import type { Foto } from "./tipos";

/**
 * O ESPAÇO — galeria e comodidades.
 *
 * Só fotos com `src` aparecem no site publicado. Em `npm run dev`, os espaços
 * reservados (src: null) aparecem com as instruções.
 *
 * A primeira foto ocupa o espaço maior da galeria.
 * Fotos: salve em /public/fotos/ e preencha `src`, `alt`, `largura` e `altura`.
 */
export const galeria: Foto[] = [
  {
    src: "/fotos/entrada-salao.jpg",
    alt: "Entrada do Café Eté à noite: luminárias redondas de palha, poltronas de vime com almofadas listradas, plantas e, ao fundo, o balcão com prateleiras.",
    instrucao: "",
    largura: 509,
    altura: 664,
  },
  {
    // PENDENTE: a foto da mesa de coworking (notebook, livros e caneca) foi enviada
    // na conversa, mas o arquivo ainda não está no projeto.
    src: null,
    alt: "Mesa de madeira com notebook aberto, caneca e livros de design, no salão do Café Eté.",
    instrucao:
      "Salvar a foto da mesa de coworking (notebook, caneca e livros) como /public/fotos/coworking.jpg e preencher src, largura e altura.",
  },
  {
    src: "/fotos/cafe-bolo-jardim.jpg",
    alt: "Xícara de café, fatia de bolo com calda amarela e um livro aberto sobre a mesa, com o jardim iluminado ao fundo.",
    instrucao: "",
    largura: 684,
    altura: 666,
  },
  {
    src: "/fotos/leitura-ao-sol.jpg",
    alt: "Pessoa lendo em uma mesa ao sol, com bancos estofados, plantas e um tapete listrado.",
    instrucao: "",
    largura: 274,
    altura: 294,
  },
  {
    src: null,
    alt: "",
    instrucao: "Fachada vista da Praça do Museu Náutico, de dia, mostrando a entrada da Loja 3.",
  },
];

/**
 * Comodidades. Só marque `confirmado: true` depois de a equipe confirmar.
 * Itens não confirmados não aparecem no site.
 */
export const comodidades: { nome: string; confirmado: boolean }[] = [
  { nome: "Espaço de coworking", confirmado: true }, // Linktree oficial
  { nome: "Opções veganas", confirmado: true }, // cardápio "De volta às origens"
  { nome: "Leite vegetal", confirmado: true }, // cardápio: Leite vegetal Naveia
  { nome: "Wi-Fi", confirmado: false },
  { nome: "Tomadas nas mesas", confirmado: false },
  { nome: "Acessível para cadeira de rodas", confirmado: false },
  { nome: "Aceita pets", confirmado: false },
  { nome: "Reservas", confirmado: false },
  { nome: "Vista para o mar", confirmado: false }, // citado no Linktree; confirmar e enviar foto antes de ativar
];

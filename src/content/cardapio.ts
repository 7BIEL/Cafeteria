import type { Foto } from "./tipos";

/**
 * CARDÁPIO
 *
 * Fonte: cardápio "De volta às origens" enviado pela equipe (Canva), lido em 13/10/2026.
 * https://www.canva.com/design/DAGqRPEWOOc/alE8DMOqkE5FUi_aPF1cQw/view
 * O próprio cardápio se apresenta como "cardápio de outono" — confirme se continua valendo.
 *
 * Como editar:
 * - Mudar preço: altere `preco` (em reais, sem centavos se for inteiro).
 * - Tirar um item do site sem apagar: `confirmado: false`.
 * - Novo item: copie um item existente e ajuste.
 * - `restricoes`: só com confirmação da equipe ("vegana" ou "veg", como no cardápio impresso).
 * - `rotulo`: etiqueta curta, ex.: "Criação da casa".
 * - Categorias sem itens confirmados não aparecem.
 */

export type Restricao = "vegana" | "veg";

export type ItemCardapio = {
  nome: string;
  descricao?: string;
  preco?: number;
  foto?: Foto;
  rotulo?: string;
  restricoes?: Restricao[];
  confirmado: boolean;
};

export type CategoriaCardapio = {
  id: string;
  nome: string;
  grupo: "bebidas" | "comidas";
  descricao?: string;
  nota?: string;
  itens: ItemCardapio[];
};

const ok = true;

export const cardapio: CategoriaCardapio[] = [
  // ——— BEBIDAS ———
  {
    id: "classicos",
    nome: "Clássicos",
    grupo: "bebidas",
    itens: [
      {
        nome: "Espresso simples",
        preco: 9,
        confirmado: ok,
        foto: {
          src: "/fotos/espresso-simples.jpg",
          alt: "Espresso sendo extraído da máquina para uma xícara de vidro, com a marca café.eté.",
          instrucao: "",
          largura: 688,
          altura: 686,
        },
      },
      { nome: "Espresso duplo", preco: 12, confirmado: ok },
      { nome: "Americano", preco: 12, confirmado: ok },
      { nome: "Coado do dia", preco: 10, confirmado: ok },
      { nome: "Coado com leite", preco: 12, confirmado: ok },
      { nome: "Cappuccino italiano", descricao: "Espresso com leite vaporizado.", preco: 12, confirmado: ok },
      { nome: "Latte", descricao: "Espresso com bastante leite vaporizado.", preco: 14, confirmado: ok },
      { nome: "Macchiato", descricao: "Espresso manchado com espuma de leite.", preco: 11, confirmado: ok },
      { nome: "Mocha", descricao: "Espresso, chocolate, leite vaporizado e chantilly.", preco: 20, confirmado: ok },
      { nome: "Chocolate ao leite", descricao: "Leite vaporizado com cacau.", preco: 15, confirmado: ok },
      { nome: "Leite caramelizado", descricao: "Do jeito que a gente tomava na casa da vó.", preco: 16, confirmado: ok },
      { nome: "Affogato", descricao: "Sorvete de baunilha e espresso.", preco: 20, confirmado: ok },
    ],
  },
  {
    id: "microlotes",
    nome: "Microlotes",
    grupo: "bebidas",
    descricao: "Escolha seu método.",
    itens: [
      { nome: "Hario V60", descricao: "240 ml, rende 2 xícaras.", preco: 19, confirmado: ok },
      { nome: "Prensa francesa", descricao: "240 ml, rende 2 xícaras.", preco: 18, confirmado: ok },
      { nome: "Aeropress", descricao: "240 ml, rende 2 xícaras.", preco: 19, confirmado: ok },
      { nome: "Coado na mesa", descricao: "120 ml, rende 1 xícara.", preco: 12, confirmado: ok },
      {
        nome: "Experiência sensorial",
        descricao:
          "Degustação comparativa: prove 3 cafés diferentes e conheça um pouco do universo do café. 360 ml em 3 xícaras.",
        preco: 34,
        confirmado: ok,
      },
    ],
  },
  {
    id: "criacoes",
    nome: "Criações da casa",
    grupo: "bebidas",
    itens: [
      { nome: "Cappuccino espacial", descricao: "Leite, cacau, café e canela.", preco: 16, confirmado: ok },
      { nome: "Espacial veg", descricao: "Com leite vegetal.", preco: 19, restricoes: ["veg"], confirmado: ok },
      {
        nome: "Chocomutcho",
        descricao: "Chocolate quente cremosão com muiiiito chocolate e marshmallow.",
        preco: 24,
        confirmado: ok,
      },
    ],
  },
  {
    id: "gelados",
    nome: "Gelados",
    grupo: "bebidas",
    itens: [
      { nome: "Espresso tônica", preco: 22, confirmado: ok },
      {
        nome: "Cold brew",
        descricao: "Infusão de café a frio de longa duração. Puro, com laranja ou limão.",
        preco: 22,
        confirmado: ok,
      },
      { nome: "Macchiato caramelo", descricao: "Espresso, leite cremoso gelado e caramelo.", preco: 17, confirmado: ok },
    ],
  },
  {
    id: "chas",
    nome: "Chás artesanais",
    grupo: "bebidas",
    itens: [
      { nome: "Matcha latte", descricao: "Matcha japonês com leite de aveia vaporizado.", preco: 18, confirmado: ok },
      { nome: "Chai", descricao: "Nossa receita de chá preto e especiarias com leite.", preco: 17, confirmado: ok },
      { nome: "Capim-limão gelado", descricao: "Capim-cidreira, limão, mel e gengibre.", preco: 18, confirmado: ok },
      { nome: "Mate cítrico gelado", descricao: "Mate, laranja, limão e canela.", preco: 18, confirmado: ok },
    ],
  },
  {
    id: "frappes",
    nome: "Frappés",
    grupo: "bebidas",
    descricao: "Bebida batida com leite e gelo, finalizada com chantilly.",
    itens: [
      { nome: "Banana e caramelo", preco: 25, confirmado: ok },
      { nome: "Cappuccino", preco: 26, confirmado: ok },
      { nome: "Chocolate", preco: 25, confirmado: ok },
      { nome: "Açaí", preco: 26, confirmado: ok },
    ],
  },
  {
    id: "outras-bebidas",
    nome: "Outras bebidas",
    grupo: "bebidas",
    itens: [
      {
        nome: "Detox verde",
        descricao: "Abacaxi, couve, água de coco, limão e gengibre. Para revigorar.",
        preco: 22,
        confirmado: ok,
      },
      { nome: "Suco do dia", descricao: "Consulte os sabores com o time.", preco: 16, confirmado: ok },
      { nome: "Suco de laranja", descricao: "Natural, feito na hora.", preco: 18, confirmado: ok },
      { nome: "Soda italiana", descricao: "Consulte os sabores.", preco: 20, confirmado: ok },
      { nome: "Refrigerante", descricao: "Consulte os sabores.", preco: 10, confirmado: ok },
      { nome: "Água Prata vidro", descricao: "Com ou sem gás, 300 ml.", preco: 8, confirmado: ok },
      { nome: "Água Prata PET", descricao: "Com ou sem gás, 370 ml.", preco: 9, confirmado: ok },
    ],
  },
  {
    id: "alcoolicos",
    nome: "Alcoólicos",
    grupo: "bebidas",
    itens: [
      {
        nome: "Café Marvado",
        descricao: "Nosso drink de café com cachaça de qualidade.",
        preco: 18,
        rotulo: "Criação da casa",
        confirmado: ok,
      },
      {
        nome: "Café Marinheiro",
        descricao: "Café especial, licor de canela e doce de leite de cumaru.",
        preco: 16,
        rotulo: "Criação da casa",
        confirmado: ok,
      },
      {
        nome: "Choconhaque",
        descricao: "Chocolate quente cremoso com conhaque.",
        preco: 16,
        rotulo: "Criação da casa",
        confirmado: ok,
      },
      {
        nome: "Irish coffee",
        descricao: "Café, whisky escocês e creme de leite.",
        preco: 32,
        rotulo: "Clássico",
        confirmado: ok,
      },
    ],
  },
  {
    id: "extras",
    nome: "Extras",
    grupo: "bebidas",
    itens: [
      { nome: "Leite integral", preco: 4, confirmado: ok },
      { nome: "Leite vegetal Naveia", preco: 5, confirmado: ok },
      { nome: "Chantilly", preco: 5, confirmado: ok },
    ],
  },

  // ——— COMIDAS ———
  {
    id: "matinais",
    nome: "Matinais latinos",
    grupo: "comidas",
    itens: [
      { nome: "Cuscuz nordestino", descricao: "Com manteiga.", preco: 18, confirmado: ok },
      { nome: "Ovos cremosos", descricao: "3 ovos mexidos como você nunca comeu antes.", preco: 20, confirmado: ok },
      { nome: "Banana-da-terra", descricao: "Cozida no vapor.", preco: 12, confirmado: ok },
      { nome: "Queijo coalho", descricao: "Na chapa.", preco: 15, confirmado: ok },
      { nome: "Carne seca", preco: 22, confirmado: ok },
      { nome: "Fruta do dia", preco: 8, confirmado: ok },
    ],
  },
  {
    id: "tostados",
    nome: "Tostados na chapa",
    grupo: "comidas",
    itens: [
      { nome: "Pão de cará", preco: 12, confirmado: ok },
      { nome: "Pão brioche caseiro", preco: 11, confirmado: ok },
      { nome: "Pão focaccia", preco: 13, confirmado: ok },
    ],
  },
  {
    id: "tostados-especiais",
    nome: "Tostados especiais",
    grupo: "comidas",
    itens: [
      { nome: "Brioche com ganache de chocolate", preco: 22, confirmado: ok },
      { nome: "Brioche queijo quente com melado de cana", preco: 28, confirmado: ok },
      { nome: "Focaccia na chapa com banana-da-terra e melado de cana", preco: 32, confirmado: ok },
    ],
  },
  {
    id: "sanduiches",
    nome: "Sanduíches",
    grupo: "comidas",
    itens: [
      { nome: "Misto quente", preco: 23, confirmado: ok },
      {
        nome: "Misto chic",
        descricao: "Nosso croque monsieur: misto quente com creme bechamel e parmesão gratinado.",
        preco: 28,
        confirmado: ok,
      },
      { nome: "Queijo quente", preco: 20, confirmado: ok },
      {
        nome: "Focaccia Eté",
        descricao: "Lanche frio com coalhada seca da casa, tomate e bertalha fresca.",
        preco: 26,
        confirmado: ok,
      },
    ],
  },
  {
    id: "empanadas",
    nome: "Empanadas",
    grupo: "comidas",
    itens: [
      { nome: "Abóbora com cogumelo", preco: 18, restricoes: ["vegana"], confirmado: ok },
      { nome: "Coxa de frango ao curry", preco: 18, confirmado: ok },
    ],
  },
  {
    id: "bolos",
    nome: "Bolos quentinhos",
    grupo: "comidas",
    nota: "Seja criativo: com cobertura adicional fica super interessante.",
    itens: [
      { nome: "Vó Maria", descricao: "Mandioca com coco.", preco: 16, confirmado: ok },
      {
        nome: "Vó Alice",
        descricao: "Banana bread com frutas secas.",
        preco: 16,
        restricoes: ["veg"],
        confirmado: ok,
      },
      {
        nome: "Abuelita peruana",
        descricao: "Cenoura com nozes e cobertura de cream cheese.",
        preco: 18,
        confirmado: ok,
      },
      { nome: "Vó Carmélia", descricao: "Chocolate peteleco.", preco: 16, confirmado: ok },
    ],
  },
  {
    id: "doces",
    nome: "Doces e alegria",
    grupo: "comidas",
    itens: [
      { nome: "Ambrosia da vovó", preco: 12, confirmado: ok },
      { nome: "Brigadeiro de colher", descricao: "Morango, tradicional ou café.", preco: 10, confirmado: ok },
      { nome: "Doce de leite de colher", descricao: "Com cumaru.", preco: 10, confirmado: ok },
      { nome: "Galleta", preco: 12, confirmado: ok },
      {
        nome: "Pão de chuva",
        descricao: "Recheado de doce de leite de café com cumaru (baunilha amazônica).",
        preco: 16,
        confirmado: ok,
      },
      { nome: "Torta de chocolate com mousse de cupuaçu", preco: 22, confirmado: ok },
      { nome: "Tortinha de maçã com granola artesanal", preco: 22, confirmado: ok },
      {
        nome: "Sorvete da casa",
        descricao: "Banana com café e mix de castanhas, com calda de chocolate.",
        preco: 24,
        restricoes: ["veg"],
        confirmado: ok,
      },
    ],
  },
  {
    id: "acompanhamentos",
    nome: "Acompanhamentos",
    grupo: "comidas",
    itens: [
      { nome: "Geleia artesanal", descricao: "Consulte os sabores com o time.", preco: 8, confirmado: ok },
      { nome: "Mel", preco: 8, confirmado: ok },
      { nome: "Melado de cana", preco: 8, confirmado: ok },
      { nome: "Ganache de chocolate", preco: 10, confirmado: ok },
    ],
  },
];

/** Nome e apresentação do cardápio atual (texto do próprio cardápio). */
export const cardapioAtual = {
  nome: "De volta às origens",
  apresentacao:
    "Sabores afetivos com ingredientes locais e receitas que respeitam o tempo, o ciclo e o cuidado.",
  recado:
    "Se a casa tá cheia, o pedido pode demorar um tiquinho… Aproveita pra descansar, ler um livrinho ou só espiar a paisagem.",
};

/** Aviso abaixo do cardápio. `null` = sem aviso. */
export const avisoCardapio: string | null =
  "O cardápio muda com as estações. Itens e preços podem variar — confirme no balcão.";

/** Imagem de destaque da seção (mesa servida). */
export const fotoCardapio: Foto = {
  src: "/fotos/mesa-cafe-da-manha.jpg",
  alt: "Mesa de madeira servida com café com leite, uma bebida verde gelada, pão na chapa, empanada com molho, espresso e um ramequim com carne desfiada, ao lado de um saquinho de papel com a marca café.eté.",
  instrucao: "",
  largura: 656,
  altura: 664,
};

export const formatarPreco = (valor: number) =>
  Number.isInteger(valor)
    ? `R$ ${valor}`
    : valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

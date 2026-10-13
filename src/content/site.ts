import type { Foto, Horario } from "./tipos";

/**
 * Dados do Café Eté — endereço, links e horários.
 *
 * Fontes conferidas em 13/10/2026:
 * - Linktree oficial: https://linktr.ee/cafe.ete
 * - Instagram oficial: https://www.instagram.com/cafe.ete.ilhabela/
 * - Link do Google Maps publicado na bio do Instagram (resolve para "Café Eté Ilhabela").
 *
 * Para atualizar: edite os valores abaixo e publique de novo. Não é preciso mexer no layout.
 */
export const site = {
  nome: "Café Eté",
  /** Como a marca escreve o nome no logo e nas fotos. */
  marca: "café.eté",
  nomeCompleto: "Café Eté Ilhabela",

  /** Domínio usado em canonical, Open Graph, sitemap e Schema.org. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://cafeete.com.br").replace(/\/$/, ""),

  /** Apresentação curta. Baseada no Linktree e na bio do Instagram. */
  descricao:
    "Cafeteria de cafés especiais do Brasil, cozinha afetiva e coworking na Praça do Museu Náutico, no Centro Histórico de Ilhabela (SP).",

  /** Três ideias que o próprio café usa para se apresentar na bio do Instagram. */
  principios: ["Cafés especiais do Brasil", "Gastronomia cultural", "Regeneração"],

  endereco: {
    referencia: "Praça do Museu Náutico",
    logradouro: "Praça Cel. Julião de Moura Negrão, 121/137",
    complemento: "Loja 3",
    bairro: "Vila",
    regiao: "Centro Histórico",
    cidade: "Ilhabela",
    uf: "SP",
    cep: "11635-136",
    pais: "BR",
    /** Coordenadas do ponto oficial no Google Maps. */
    geo: { latitude: -23.779189, longitude: -45.3582924 },
  },

  links: {
    maps: "https://maps.app.goo.gl/GMepNygTkmBcMVdU7",
    whatsapp: "https://wa.me/message/X7DZCGSZQIM7N1",
    /** Nome de quem atende o WhatsApp, conforme o Linktree ("só chamar a Kika"). */
    whatsappAtendente: "Kika",
    instagram: "https://www.instagram.com/cafe.ete.ilhabela/",
    instagramUsuario: "@cafe.ete.ilhabela",
    trabalheConosco: "https://forms.gle/YYW9t9CkHGE2aKus5",
  },

  /**
   * PENDENTE: horários não estão publicados no Linktree nem na bio.
   * O Instagram tem um destaque chamado "Horários". Quando a equipe confirmar,
   * preencha assim (e o site passa a exibir os horários + dados estruturados):
   *
   * horarios: [
   *   { dias: "Terça a domingo", abre: "08:00", fecha: "18:00",
   *     diasSchema: ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] },
   * ],
   */
  horarios: null as Horario[] | null,

  /**
   * PENDENTE: dica prática para reconhecer a fachada ou chegar (ex.: "ao lado de...").
   * Só preencha com informação confirmada pela equipe.
   */
  comoReconhecer: null as string | null,

  /** Foto principal (seção de abertura). Também pode virar a imagem de compartilhamento. */
  fotoPrincipal: {
    src: "/fotos/mesa-ao-sol.jpg",
    alt: "Mesa de madeira iluminada pelo sol da tarde, com sanduíches naturais, um tostado na chapa, salada de frutas, um doce de chocolate e café coado em xícara de vidro.",
    instrucao: "",
    largura: 683,
    altura: 674,
  } as Foto,
};

export const enderecoLinha = `${site.endereco.logradouro}, ${site.endereco.complemento} — ${site.endereco.bairro}, ${site.endereco.cidade} – ${site.endereco.uf}`;


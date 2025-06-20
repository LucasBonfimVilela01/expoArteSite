export type Categoria = {
  nome: string;
  imagens: {
    src: string;
    alt: string;
    titulo: string;
    descricao: string;
  }[];
};

export const categorias: Categoria[] = [
  {
    nome: "Paisagens",
    imagens: [
      {
        src: "/paisagem1.png",
        alt: "Paisagem 1",
        titulo: "Montanhas ao Amanhecer",
        descricao: "Uma bela paisagem de montanhas sob a luz suave do amanhecer.",
      },
      {
        src: "/paisagem2.png",
        alt: "Paisagem 2",
        titulo: "Lago Tranquilo",
        descricao: "Reflexo das árvores em um lago calmo ao entardecer.",
      },
    ],
  },
  {
    nome: "Retratos",
    imagens: [
      {
        src: "/retrato1.png",
        alt: "Retrato 1",
        titulo: "Sorriso Jovial",
        descricao: "Retrato de uma jovem sorrindo em um parque.",
      },
      {
        src: "/retrato2.png",
        alt: "Retrato 2",
        titulo: "Pensativo",
        descricao: "Homem olhando pela janela, imerso em pensamentos.",
      },
      {
        src: "/retrato3.png",
        alt: "Retrato 3",
        titulo: "Alegria Infantil",
        descricao: "Criança brincando ao ar livre em um dia ensolarado.",
      },
      {
        src: "/retrato4.png",
        alt: "Retrato 4",
        titulo: "Olhar Forte",
        descricao: "Retrato em close de uma mulher com expressão determinada.",
      },
      {
        src: "/thumb live 5.png",
        alt: "Retrato 5",
        titulo: "klasjdk",
        descricao: "aslokdjfaolidjfaopdjofiajdoifajdoi oisadjfaoijdfoia",
      },
    ],
  },
  {
    nome: "Fotossssss legaisss",
    imagens: [
      {
        src: "/retrato1.png",
        alt: "AAAAAAAAAAAAAAAAAAAAAA",
        titulo: "AAAAAAAAAAAAAAAAAAAAAA",
        descricao: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      },
      {
        src: "/retrato2.png",
        alt: "Retrato 2",
        titulo: "AAAAAAAAAAAAAAAAAAAAAA",
        descricao: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      },
      {
        src: "/retrato3.png",
        alt: "Retrato 3",
        titulo: "AAAAAAAAAAAAAAAAAAAAAA",
        descricao: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      },
      {
        src: "/retrato4.png",
        alt: "Retrato 4",
        titulo: "AAAAAAAAAAAAAAAAAAAAAA",
        descricao: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      },
      {
        src: "/thumb live 5.png",
        alt: "Retrato 5",
        titulo: "AAAAAAAAAAAAAAAAAAAAAA",
        descricao: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      },
    ],
  },
  // Adicione mais categorias e imagens conforme necessário
];
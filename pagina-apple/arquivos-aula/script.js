const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

const azulInverno = {
  nome: "azul-inverno",
  pasta: "imagens-azul-inverno",
};

const estelar = {
  nome: "estelar",
  pasta: "imagens-estelar",
};

const meiaNoite = {
  nome: "meia-noite",
  pasta: "imagens-meia-noite",
};

const rosaClaro = {
  nome: "rosa-claro",
  pasta: "imagens-rosa-claro",
};

const verdeCipreste = {
  nome: "verde-cipreste",
  pasta: "imagens-verde-cipreste",
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45 mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

const trocarImagem = () => {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-imagem"]:checked'
  ).id;
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
};

const trocarTamanho = () => {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;

  if (opcoesTamanho[tamanhoSelecionado] === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
};

const trocarCor = () => {
  const idCorSelecionada = document.querySelector(
    '[name="opcao-cor"]:checked'
  ).id;
  corSelecionada = idCorSelecionada.charAt(0);

  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;

  nomeCor.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;

  miniaturaImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`;
  miniaturaImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
  miniaturaImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`;

  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
};

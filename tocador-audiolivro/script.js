const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");

const nomeCapitulo = document.getElementById("capitulo");

const audioCapitulo = document.getElementById("audio-capitulo");

const tocarFaixa = () => {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
};

const pausarFaixa = () => {
  audioCapitulo.pause();
  botaoPlayPause.classList.add("bi-play-circle-fill");
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
};

const trocarNomeFaixa = () => {
  nomeCapitulo.innerText = `Capítulo ${capituloAtual}`;
};

const avancarFaixa = () => {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual++;
  }
  audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
  tocarFaixa();
  trocarNomeFaixa();
};

const voltarFaixa = () => {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual--;
  }
  audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
  tocarFaixa();
  trocarNomeFaixa();
};

const tocarOuPausar = () => {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  } else {
    pausarFaixa();
    taTocando = 0;
  }
};

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", avancarFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);

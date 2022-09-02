//ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//ativar itens do orçamento
//location é um objeto que trás informações da url
//e dentro do lacation temos uma propriedade chaamda search que basicamente é uma busca
//o URLSearchParams vai trabalhar com os parametros da url, e na verdade é uma classe
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  console.log(ativa);
  pergunta.setAttribute("aria-expanded", ativa);
}
function eventosPergunta(perguntas) {
  perguntas.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPergunta);


//galeria de imagens

const galeria = document.querySelectorAll(".bicicleta-imagens img")
const galeriaContainer = document.querySelector(".bicicleta-imagens")
//prepend troca elementos de lugar
function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    galeriaContainer.prepend(img)
    console.log(media);
    if(media){
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(imagem){
    imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria)
console.log(galeria, galeriaContainer);

//animação
if(window.SimpleAnime){
    new SimpleAnime();
}

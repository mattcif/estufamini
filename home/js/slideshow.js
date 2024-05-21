var imagens = [
    {
      path: "https://rehagro.com.br/blog/inteligencia-artificial-na-agricultura/",
      url: 'https://tecnocoffeeapi.rehagro.com.br/storage/imagens/rehagro.png',
      alt: "link rehagro"
    },
    {
      path: "https://blog.climatefieldview.com.br/agricultura-inteligente#:~:text=O%20que%20é%20agricultura%20inteligente,produção%20e%20gerenciar%20a%20lavoura.",
      url: 'https://blog.climatefieldview.com.br/hubfs/BLOG%20Logo.png',
      alt: "link blog fieldview"
    },
    {
      path: "https://jornal.usp.br/ciencias/por-meio-de-inteligencia-artificial-solucao-criada-na-usp-facilita-tomada-de-decisao-para-o-combate-a-fome/",
      url: '../../imagens/social.png',
      alt: "link usp"
    },
    {
      path: "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021",
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_UNICEF.svg/2560px-Logo_of_UNICEF.svg.png',
      alt: "link unicef"
    },
];

var Index = 0;
var time = 5000;

function slideShow() {
    document.getElementById('image1').src = imagens[Index].url;
    document.getElementById('image1').alt = imagens[Index].alt;
    document.getElementById('link-image').href = imagens[Index].path;

    Index++;

    if (Index == imagens.length) { Index = 0; }
    setTimeout("slideShow()", time);
}
//
slideShow();
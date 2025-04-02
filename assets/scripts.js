/* alert('Olá Mundo!');
console.log('Olá Mundo!')

let nome = prompt('Qual seu nome?') 

alert (`Seja bem vindo! ${nome}`)

console.log(`Seja bem vindo! ${nome}`)   */

function alterar() {
  let p = document.getElementById(`paragrafo`);

  p.innerHTML = "<strong>Novo</strong> Texto"; //ineerText reconehec apenas texto, e innerHTML, reconhece elementos do html

  p.style.color = "red";
}

function Acender() {
  document.getElementById("imgLamp").src = "imagens/pic_bulbon.gif";
}

function Apagar() {
  document.getElementById("imgLamp").src = "imagens/pic_bulboff.gif";
}


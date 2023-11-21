// sumCalculator.js

function somatoria() {
    let numeros = [];
    let soma = 0;
  
    for (let i = 0; i < 5; i++) {
      numeros.push(parseInt(prompt("Digite um número: ")));
    }
  
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
  
    return soma;
  }
  
  module.exports = somatoria;
  
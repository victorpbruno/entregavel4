function calcMDC(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function calculateAndPrintMDC() {
    let a = parseInt(prompt("Digite o valor de a: "));
    let b = parseInt(prompt("Digite o valor de b: "));
  
    let mdc = calcMDC(a, b);
  
    console.log("O MDC entre " + a + " e " + b + " é: " + mdc);
  }
  
  module.exports = { calcMDC, calculateAndPrintMDC };
  
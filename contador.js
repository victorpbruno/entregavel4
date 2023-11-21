function contador(N, X) {
    let contador = 0;
  
    for (let i = X; i < N; i++) {
      contador++;
    }
  
    return "Existem " + contador + " números entre " + X + " e " + N;
  }
  
  module.exports = contador;

  
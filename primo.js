function primo(N) {
    // Check if N is a number
    if (isNaN(N)) {
      return "Por favor, digite um número válido.";
    } else {
      let primo = true;
  
      if (N <= 1) {
        primo = false;
      } else {
        for (let i = 2; i < N; i++) {
          if (N % i == 0) {
            primo = false;
            break;
          }
        }
      }
  
      if (primo) {
        return "O numero e primo";
      } else {
        return "O numero nao e primo";
      }
    }
  }
  
  module.exports = primo;
  

const contador = require('./contador');

test('numeros entre 3 e 39', () => {
  const result = contador(39, 3);
  expect(result).toBe('Existem 36 números entre 3 e 39');
});

test('numeros entre 1000 and 1000', () => {
    const result = contador(10000, 1000);
    expect(result).toBe('Existem 9000 números entre 1000 e 10000');
  });
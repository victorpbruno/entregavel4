const isPrime = require('./primo')

test('numero 2 tem que ser primo', () =>{
    expect(isPrime(2)).toBe('O numero e primo')
})

test('numero 1 nao pode ser primo', () => {
    expect(isPrime(1)).toBe('O numero nao e primo')
})
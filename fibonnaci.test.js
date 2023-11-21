const fibonnaci = require('./fibonnaci')

test('Os 10 primeiros numero da contagem de fibonnaci devem ser os corretos', () => {
    expect(fibonnaci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})
test('Os 2 primeiros numero da contagem deve ser 0 e 1', () => {
    expect(fibonnaci(2)).toMatchObject([0, 1])
})
const mdcCalculator = require('./mdcCalculator')

test('MDC de 20 e 10', () => {
  const result = mdcCalculator.calcMDC(20, 10);
  expect(result).toBe(10);
});

test('MDC de 50 e 70', () => {
  const result = mdcCalculator.calcMDC(50,70);
  expect(result).toBe(10);
});
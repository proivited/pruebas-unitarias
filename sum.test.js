const {sum, res} = require('./sum');

test('debe de sumar dos numeros y retornar la suma', () => {
  expect(sum(1, 2)).toBe(3);
});

test('debe de sumar dos numeros y retornar la suma', () => {
  expect(res(10, 2)).toBe(8);
});
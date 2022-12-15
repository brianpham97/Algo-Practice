const binary = require('./binary.js')

const array = [1, 3, 6, 9, 10];

test('binary function', () => {
  expect(binary(array, 9)).toBe(3)
})

test("binary function", () => {
  expect(binary(array, 1)).toBe(0);
});

test("binary function", () => {
  expect(binary(array, 11)).toBe(-1);
});


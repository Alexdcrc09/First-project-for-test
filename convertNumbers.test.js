const convertNumbers = require('./convertNumbers');

const chiffres = [[1, 'I'], [2, 'II'], [3, 'III'], [4, 'IV'], [5, 'V'], [6, 'VI'], [7, 'VII'], [8, 'VIII'], [9, 'IX'], [10, 'X'], [20, 'XX'], [30, 'XXX'], [40, 'XL'], [50, 'L']]

test('should return I when 1', () => {
  expect(convertNumbers('I')).toBe(1);
});

test('should return I when 1', () => {
  expect(convertNumbers('I')).toBe(1);
});

test('should return 1 when I', () => {
  expect(convertNumbers(1)).toBe('I');
});

test('should return II when 2', () => {
  expect(convertNumbers('II')).toBe(2);
});

test('should return 2 when II', () => {
  expect(convertNumbers(2)).toBe('II');
});

test('should return III when 3', () => {
  expect(convertNumbers('III')).toBe(3);
});

test('should return 3 when III', () => {
  expect(convertNumbers(3)).toBe('III');
});

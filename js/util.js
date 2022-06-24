// Функция, возвращающая случайное целое число из переданного диапазона включительно:
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция, возвращающая случайный элемемент массива
const getRandomArrayElement = function (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно:
function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

export {getRandomArrayElement, getRandomPositiveFloat};

const isInteger = (array) => {
  return array.filter((number) => Number.isInteger(number));
};

const isEven = (array) => {
  return array.filter((item) => item % 2 === 0);
};

const isPositive = (array) => {
  return array.filter((item) => item > 0);
};

const compose =
  (...filters) =>
  (arguments) =>
    filters.reduce((argument, filter) => filter(argument), arguments);

const array = [-935, 726, 305.26, -232, 892, -39, 629.43, 247, 114, -138];

const result = compose(isPositive, isInteger, isEven)(array);

console.log(result);

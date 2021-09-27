const array = [-32, 16, -39, -39, 94, 53, 93, -8, 56, -2];

const strings = [
  "Aliquam purus elit, finibus id ultrices ut, molestie pretium ante.",
  "Hi! Morbi mattis sapien eu eleifend pulvinar.",
  "Fusce egestas interdum magna sed ullamcorper. ",
];

const isMoreThan10 = (number) => number > 10;
const multiply = (number) => number ** 2;
const isPoliteString = (str) => str.toLowerCase().includes("hi");

const map = (array, func) =>
  array.reduce((previous, current) => [...previous, func(current)], []);

const filter = (array, func) =>
  array.reduce(
    (previous, current) =>
      func(current) ? [...previous, current] : [...previous],
    []
  );

const every = (array, func) =>
  array.reduce((previous, current) => previous && func(current), true);

const some = (array, func) =>
  array.reduce((previous, current) => previous || func(current), false);

console.log(map(array, multiply));
console.log(filter(array, isMoreThan10));
console.log(every(strings, isPoliteString));
console.log(some(strings, isPoliteString));

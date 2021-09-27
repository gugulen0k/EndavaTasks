const fibonacci = (steps) => {
  if (steps <= 1) return steps;
  else return fibonacci(steps - 1) + fibonacci(steps - 2);
};

const number = 2;

console.log(`On step ${number} number will be ${fibonacci(number)}`);

const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;

export const countFloorNumber = (instructions) => {
  let floorNumber = 0;
  const symbols = {
    '(': add,
    ')': sub
  };
  for (let index = 0; index < instructions.length; index++) {
    if (instructions[index] in symbols) {
      const operation = symbols[instructions[index]];
      floorNumber = operation(floorNumber, 1);
    }
    if (floorNumber < 0) {
      return index;
    }
    console.log('floor value for each iteration', floorNumber);
  };
  return floorNumber;
};
const main = () => {
  const instructions = Deno.readTextFileSync('day1/input.txt');
  return countFloorNumber(instructions);
};

console.log(main());
const updateHouseNumber = (instructions, [xValue, yValue]) => {
  switch (instructions) {
    case '^':
      return [xValue, yValue + 1];
    case '>':
      return [xValue + 1, yValue];
    case '<':
      return [xValue - 1, yValue];
    case 'v':
      return [xValue, yValue - 1];
  }

  return [xValue, yValue];
};

const setOfHouses = (instructions) => {
  const houseNumbers = new Set();
  let [x, y] = [0, 0];
  houseNumbers.add(`${x}, ${y}`);

  for (let index = 0; index < instructions.length; index++) {
    [x, y] = updateHouseNumber(instructions[index], [x, y]);
    houseNumbers.add(`${x}, ${y}`);
  }

  return houseNumbers;
};

const setOfHousesWithRobo = (instructions) => {
  const houseNumbers = new Set();
  let [x, y] = [0, 0];
  let [a, b] = [0, 0];
  houseNumbers.add(`${x}, ${y}`);

  for (let index = 0; index < instructions.length; index += 2) {
    [x, y] = updateHouseNumber(instructions[index], [x, y]);
    houseNumbers.add(`${x}, ${y}`);
  }

  for (let index = 1; index < instructions.length; index += 2) {
    [a, b] = updateHouseNumber(instructions[index], [a, b]);
    houseNumbers.add(`${a}, ${b}`);
  }

  return houseNumbers;
};

const main = () => {
  const instructions = Deno.readTextFileSync('./instructions.txt').split('');
  const housesbySanta = [...setOfHouses(instructions)];
  const housesbySantaAndRoboSanta = [...setOfHousesWithRobo(instructions)];
  return [housesbySanta.length, housesbySantaAndRoboSanta.length];
};

console.log(main());
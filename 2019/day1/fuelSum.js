const sumOfArrayElements = (array) => {
  return array.reduce(((sum, element) => sum + element), 0);
};

const fuelSum = (element) => {
  return Math.floor(element / 3) - 2;
};

const part1 = (data) => {
  const array = data.map((element) => {
    return fuelSum(element);
  });

  return sumOfArrayElements(array);
};

const part2 = (data) => {
  let number = data;
  const array = [];
  while (number > 0) {
    array.push(number);
    number = fuelSum(number);
  }
  array.shift();

  return array;
};

const reursiveFuelSum = (data) => {
  const array = data.map((element) => {
    const values = part2(+element);

    return sumOfArrayElements(values);
  });

  console.log(sumOfArrayElements(array));
};

const main = () => {
  const data = Deno.readTextFileSync('./input.txt').split('\n');
  console.log(part1(data));
  reursiveFuelSum(data);
};

main();
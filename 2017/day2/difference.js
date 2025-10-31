const main = () => {
  //   const input = ["5 1 9 5", "7 5 3", "2 4 6 8"];
  const input = Deno.readTextFileSync("input.txt").split("\n");
  console.log("The input is ", input);
  const values = input.map((row) => {
    const values = row.split("\t");
    const numbers = values.map((val) => Number(val));
    const ascendingOrder = numbers.sort((a, b) => a - b);
    return Math.abs(
      ascendingOrder[0] - ascendingOrder[ascendingOrder.length - 1]
    );
  });

  console.log("The values are", values);
  const sum = values.reduce((sum, num) => sum + num, 0);
  console.log("The total sum is", sum);
};

const evenlyDivisible = (numbers) => {
  let value = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] % numbers[j] === 0 || numbers[j] % numbers[i] === 0) {
        value =
          numbers[i] > numbers[j]
            ? numbers[i] / numbers[j]
            : numbers[j] / numbers[i];
      }
    }
  }

  return value;
};

const part2 = () => {
  // const input = ["5 9 2 8", "9 4 7 3", "3 8 6 5"];
  const input = Deno.readTextFileSync("input.txt").split("\n");
  const values = input.map((row) => {
    const values = row.split("\t");
    const numbers = values.map((val) => Number(val));
    return evenlyDivisible(numbers);
  });

  console.log("The value are", values);
  const sum = values.reduce((sum, val) => sum + val, 0);
  console.log("The sum is", sum);
};
// main();
part2();

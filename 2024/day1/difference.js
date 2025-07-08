const deriveLists = (input) => {
  const numbers = input.split("\n");
  const list1 = [];
  const list2 = [];
  for (let i = 0; i < numbers.length; i++) {
    const [first, second] = numbers[i].split("   ");
    list1.push(first);
    list2.push(second);
  }
  list1.sort((x, y) => x - y);
  list2.sort((x, y) => x - y);
  return { list1, list2 };
};

const countNumberOfElements = (number, array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      count += 1;
    }
  }

  return count;
};

const countNumbers = (list1, list2) => {
  const values = [];
  list1.forEach((number) => {
    const count = countNumberOfElements(number, list2);
    values.push(number * count);
  });

  return values.reduce((sum, number) => sum + number, 0);
};

const main = () => {
  const input = Deno.readTextFileSync("./input.txt");
  const { list1, list2 } = deriveLists(input);
  const difference = [];
  list1.forEach((number, index) => {
    difference.push(Math.abs(number - list2[index]));
  });

  const sum = difference.reduce((sum, number) => sum + number, 0);
  console.log("The sum was", sum);
  console.log("The repeated count sum is", countNumbers(list1, list2));
};

main();

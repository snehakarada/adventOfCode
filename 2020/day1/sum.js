export const convertToNumbers = (string) => {
  return string.map((element) => Number(element));
};

const findThePair = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 2020) {
        return [numbers[i], numbers[j]];
      }
    }
  };

  return 'not found';
};
const findTheTriplet = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === 2020) {
          return [numbers[i], numbers[j], numbers[k]];
        }
      }
    }
  };

  return 'not found';
};

const main = () => {
  const data = Deno.readTextFileSync('input.txt').split('\n');
  const numbers = convertToNumbers(data);
  const [number1, number2] = findThePair(numbers);
  const [num1, num2, num3] = findTheTriplet(numbers);
  console.log('the multiplication of the pair is', number1 * number2);
  console.log('the multiplication of triplet is', num1 * num2 * num3);
};

// main();
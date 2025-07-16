// const main = (input) => {
//   const numbers = input.match(/mul\(\d+,\d+\)/g);
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const values = numbers[i].match(/\d+/g).map((number) => Number(number));
//     const mul = values.reduce((mul, number) => mul * number, 1);
//     sum = sum + mul;
//   }

//   return sum;
// };

// const filteredMultiplication = () => {
//   // const input =
//   // "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))don't()";
//   const input = Deno.readTextFileSync("./input.txt");
//   const numbers = input.match(/mul\(\d+,\d+\)/g);

//   const values = input.match(/do\(\).*?don\'t\(\)/g);
//   const v1 = input.match(/^\*.*?don\'t\(\)/g);
//   const v2 = input.match(/<\+do\(\).*&:why()/g);
//   console.log("The final one ra bujji", v2);
//   console.log("The values are", values, v1);
//   let sum = 0;
//   for (let i = 0; i < values.length; i++) {
//     sum += main(values[i]);
//   }
//   sum += main(...v1);
//   // sum += main(...v2);
//   console.log("The sum is ", sum);
//   console.log("The final sum ra", main(...v2));
//   // console.log(main(...values), main(...v1));
// };

// filteredMultiplication();

// //87558179 - too high
// //80698289 - too low
// // line 6 2589 - don't()
// // 2408 - do()

// const fs = require("fs");

const filteredMultiplication = () => {
  const input = Deno.readTextFileSync("./input.txt");

  let sum = 0;
  let mulEnabled = true;

  const regex = /do\(\)|don't\(\)|mul\(\d+,\d+\)/g;
  const matches = input.matchAll(regex);
  for (const match of matches) {
    const token = match[0];
    if (token === "do()") {
      mulEnabled = true;
    } else if (token === "don't()") {
      mulEnabled = false;
    } else if (token.startsWith("mul(") && mulEnabled) {
      const [a, b] = token.match(/\d+/g).map(Number);
      sum += a * b;
    }
  }

  console.log("Sum of enabled multiplications:", sum);
};

filteredMultiplication();

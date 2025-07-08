const main = () => {
  //   const input =
  //     "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
  const input = Deno.readTextFileSync("./input.txt");
  const numbers = input.match(/mul\(\d+,\d+\)/g);
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const values = numbers[i].match(/\d+/g).map((number) => Number(number));
    const mul = values.reduce((mul, number) => mul * number, 1);
    sum = sum + mul;
    console.log("The values are", values);
  }

  console.log("The sum is", sum);
};
main();

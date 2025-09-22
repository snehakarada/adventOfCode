const main = () => {
  //   const input = "91212129";
  const input = Deno.readTextFileSync("input.txt");
  console.log("The input is \n", input);
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      sum += Number(input[i]);
    }
  }
  if (input[0] === input[input.length - 1]) {
    sum += Number(input[0]);
  }

  console.log("The sum is", sum);
};
const part2 = () => {
  //   const input = "12131415";
  const input = Deno.readTextFileSync("input.txt");
  const step = input.length / 2;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    let end = i + step;
    console.log("The end is", end);
    if (end > input.length - 1) {
      end = Math.abs(input.length - end);
      console.log("The end in inside", end);
    }
    if (input[i] === input[end]) {
      sum += Number(input[i]);
    }
    console.log("The sum is for every loop", sum);
  }
  console.log("The sum is", sum);
};
// main();
part2();

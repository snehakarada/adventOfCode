const main = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) < Number(input[i + 1])) {
      sum += 1;
    }
  }

  console.log("The sum is", sum);
};
const part2 = () => {
  // const input = [
  //     "199",
  //     "200",
  //     "208",
  //     "210",
  //     "200",
  //     "207",
  //     "240",
  //     "269",
  //     "260",
  //     "263",
  // ];
  const input = Deno.readTextFileSync("input.txt").split("\n");

  const data = [];
  for (let i = 0; i < input.length; i++) {
    data.push(Number(input[i]) + Number(input[i + 1]) + Number(input[i + 2]));
  }

  console.log("The data is", data);
  main(data);
};
// main();
part2();

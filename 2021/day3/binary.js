const convertToDecimal = (bianry) => {
  let j = 0;
  let sum = 0;
  for (let i = bianry.length - 1; i >= 0; i--) {
    sum += 2 ** j * Number(bianry[i]);
    j += 1;
  }

  console.log("The decimal values is", sum);
  return sum;
};
const main = () => {
  //   const input = [
  //     "00100",
  //     "11110",
  //     "10110",
  //     "10111",
  //     "10101",
  //     "01111",
  //     "00111",
  //     "11100",
  //     "10000",
  //     "11001",
  //     "00010",
  //     "01010",
  //   ];
  const input = Deno.readTextFileSync("input.txt").split("\n");
  let epsilon = "";
  let gamma = "";
  for (let i = 0; i < 5; i++) {
    let countOfOne = 0;
    let countOfZero = 0;
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      if (input[j][i] === "0") {
        countOfZero += 1;
      } else {
        countOfOne += 1;
      }
    }
    console.log("The counts are", countOfZero, countOfOne);
    gamma += countOfOne > countOfZero ? "1" : "0";
    epsilon += countOfZero < countOfOne ? "0" : "1";
  }

  console.log("The epsilon and gamma are", gamma, epsilon);
  console.log(convertToDecimal(gamma) * convertToDecimal(epsilon));
};
main();

const main = () => {
  const input = Deno.readTextFileSync("input.txt").split("\n\n");
  const calories = input.map((calorie) => {
    const numericStr = calorie.split("\n");
    const numbers = numericStr.map((numStr) => Number(numStr));
    return numbers.reduce((sum, num) => sum + num, 0);
  });
  console.log(
    "calories are",
    calories,
    calories.sort((x, y) => y - x)[0],
    calories.sort((x, y) => y - x)[1],
    calories.sort((x, y) => y - x)[2],
    calories.sort((x, y) => y - x)[0] +
      calories.sort((x, y) => y - x)[1] +
      calories.sort((x, y) => y - x)[2]
  );
};
main();

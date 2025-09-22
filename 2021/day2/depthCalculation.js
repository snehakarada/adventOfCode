const main = () => {
  const input = Deno.readTextFileSync("input.txt").split("\n");
  let horizental = 0;
  let depth = 0;
  input.forEach((instruction) => {
    const values = instruction.split(" ");
    console.log("Values are", values, horizental);
    if (values[0] === "forward") {
      horizental += Number(values[1]);
    } else if (values[0] === "up") {
      depth -= Number(values[1]);
    } else if (values[0] === "down") {
      depth += Number(values[1]);
    } else {
      console.log("invalid instruction");
    }
  });

  console.log("The forward and depth values are", horizental, depth);
  console.log(
    "The multiplication of depth and horizental is",
    horizental * depth
  );
};
const part2 = () => {
  // const input = [
  //   "forward 5",
  //   "down 5",
  //   "forward 8",
  //   "up 3",
  //   "down 8",
  //   "forward 2",
  // ];
  const input = Deno.readTextFileSync("input.txt").split("\n");
  let horizental = 0;
  let depth = 0;
  let aim = 0;
  input.forEach((instruction) => {
    const values = instruction.split(" ");
    console.log("instruction and values are", values);
    if (values[0] === "forward") {
      horizental += Number(values[1]);
      aim += depth * Number(values[1]);
    } else if (values[0] === "down") {
      depth += Number(values[1]);
    } else if (values[0] === "up") {
      depth -= Number(values[1]);
    } else {
      console.log("indvalid instruction");
    }
    console.log("values", horizental, depth, aim);
  });

  console.log("The horizental and depth values are", horizental, depth, aim);
  console.log(
    "The multiplication of depth and horizental values are",
    horizental * aim
  );
};
// main();
part2();

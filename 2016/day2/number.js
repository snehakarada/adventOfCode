const reset = (number) => {
  if (number < 0) {
    return 0;
  }
  return number;
};

const down = (number) => {
  if (number > 2) {
    return 2;
  }
  return number;
};

const navigate = (dir, row, column) => {
  switch (dir) {
    case "U":
      row -= 1;
      row = reset(row);
      return [row, column];
    case "L":
      column -= 1;
      column = reset(column);
      return [row, column];
    case "R":
      column += 1;
      column = down(column);
      return [row, column];
    case "D":
      row += 1;
      row = down(row);
      return [row, column];
  }
};

const decodeNumber = (input, keyPad) => {
  let [row, column] = [1, 1];
  const number = input.map((instruction) => {
    instruction.split('').forEach(dir => {
      [row, column] = navigate(dir, row, column);
    });
    console.log('digit', row, column, keyPad[row, column]);
    return keyPad[row][column];
  });

  console.log(row, column, keyPad[row][column], number);
};

const main = () => {
  const keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const input = Deno.readTextFileSync("./input.txt").split('\n');
  console.log(input.length);
  console.log(decodeNumber(input, keyPad));
};
main();
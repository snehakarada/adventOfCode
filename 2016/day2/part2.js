const reset = (row, column, keyPad) => {
  console.log('inside reset', row, column);
  return column < 0 || column > 4 || row > 4 || row < 0 || keyPad[row][column] === null;
};

const navigate = (dir, row, column, keyPad) => {
  console.log('hello', dir, row, column, keyPad[row][column]);
  switch (dir) {
    case "U":
      console.log('hello', row);
      if (!(reset(row - 1, column, keyPad))) {
        row -= 1;
      }
      return [row, column];
    case "L":
      if (!reset(row, column - 1, keyPad)) {
        column -= 1;
      }
      return [row, column];
    case "R":
      if (!reset(row, column + 1, keyPad)) {
        column += 1;
      }
      return [row, column];
    case "D":
      if (!reset(row + 1, column, keyPad)) {
        row += 1;
      }
      return [row, column];
  }
};

const decodePassword = (input, keyPad) => {
  console.log(input);
  let [row, column] = [2, 0];

  const number = input.map((instruction) => {
    instruction.split('').forEach(dir => {
      [row, column] = navigate(dir, row, column, keyPad);
    });
    console.log('digit', row, column, keyPad[row, column]);
    return keyPad[row][column];
  });

  return number;
};

const main = () => {
  const keypad = [[null, null, 1, null, null],
  [null, 2, 3, 4, null],
  [5, 6, 7, 8, 9],
  [null, "A", "B", "C", null],
  [null, null, "D", null, null]];

  const input = Deno.readTextFileSync("./input.txt").split('\n');
  console.log(decodePassword(input, keypad));
};

main();
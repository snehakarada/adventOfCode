const add = (num1, num2) => num1 + num2;

const substract = (num1, num2) => num1 - num2;

const extractData = (data) => {
  return [data[0], parseInt(data.slice(1), 10)];
};

const measure = (x, y) => {
  return Math.abs(x - 0) + Math.abs(y - 0);
};


const countBlocks = (currentDir, input, directions) => {
  let [x, y] = [0, 0];
  const visited = new Set();
  visited.add("0,0");

  for (const dir of input) {
    const [turn, value] = extractData(dir);
    let { direction, axis, operation } = directions[currentDir][turn];
    currentDir = direction;

    for (let i = 0; i < value; i++) {
      if (axis === 'x') {
        x = operation(x, 1);
      } else {
        y = operation(y, 1);
      }

      const key = `${x},${y}`;
      if (visited.has(key)) {
        console.log("First revisited location:", key);
        return measure(x, y);
      }

      visited.add(key);
    }
  }

  return measure(x, y); // fallback, only if no location was visited twice
};


const main = () => {
  const directions = {
    north: {
      R: {
        direction: "east",
        axis: "x",
        operation: add
      },
      L: {
        direction: "west",
        axis: "x",
        operation: substract
      }
    },
    east: {
      R: {
        direction: "south",
        axis: "y",
        operation: substract
      },
      L: {
        direction: "north",
        axis: "y",
        operation: add
      }
    },
    south: {
      R: {
        direction: "west",
        axis: "x",
        operation: substract
      },
      L: {
        direction: "east",
        axis: "x",
        operation: add
      }
    },
    west: {
      R: {
        direction: "north",
        axis: "y",
        operation: add
      },
      L: {
        direction: "south",
        axis: "y",
        operation: substract
      }
    }
  };

  const currentDir = "north";
  // const input = ["R8", "R4", "R4", "R8"];
  const input = Deno.readTextFileSync("./input.txt").split(', ');
  console.log('input is', input);
  const numberOfBlocks = countBlocks(currentDir, input, directions);
  console.log(numberOfBlocks);
};
main();
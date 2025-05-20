const giveMidPoint = (start, end) => {
  const mid = Math.floor((start + end) / 2);

  return [[start, mid], [mid + 1, end]];
};

const getRowNumber = (start, end) => {
  let row = 0;
  if (start[0] - start[1] === 0) {
    row = start[0];
  }
  else {
    row = end[0];
  }

  return row;
};

const selectRows = (code) => {
  let [start, end] = giveMidPoint(0, 127);

  for (let i = 0; i < code.length; i++) {
    if (code[i] === 'F') {
      [start, end] = giveMidPoint(start[0], start[1]);
    }
    if (code[i] === 'B') {
      [start, end] = giveMidPoint(end[0], end[1]);
    }
  }

  return getRowNumber(start, end);
};

const selectColumns = (c) => {
  let [s, e] = giveMidPoint(0, 7);

  for (let i = 0; i < c.length; i++) {
    if (c[i] === 'R') {
      [s, e] = giveMidPoint(e[0], e[1]);
    }
    if (c[i] === 'L') {
      [s, e] = giveMidPoint(s[0], s[1]);
    }
  }

  return getRowNumber(s, e);
};

const isItConsecutive = (arr) => {
  console.log('length', arr.length);
  for (let i = 1; i < arr.length; i++) {
    console.log('i am checking for', arr[0] + i, arr[i]);
    if (!(arr[0] + i === arr[i])) {
      console.log(arr[i]);
    }
  }
};

const main = async () => {
  const text = await Deno.readTextFile('./seats.txt');
  const data = text.split('\n');
  const seatId = [];

  for (let i = 0; i < data.length; i++) {
    const rows = selectRows(data[i].slice(0, 7));
    const columns = selectColumns(data[i].slice(7));
    const value = rows * 8 + columns;
    seatId.push(value);
  }

  // console.log(seatId);
  // console.log(Math.max(...seatId));
  const sortedArr = seatId.toSorted((a, b) => a - b);
  console.log(sortedArr);
  // for (let i = 0; i < sortedArr.length; i += 10) {
  //   console.log(sortedArr.slice(i, i + 10));
  // }
  isItConsecutive(sortedArr);
};

main()


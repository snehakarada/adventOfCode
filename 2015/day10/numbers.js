const findSequence = (a, i) => {
  let seq = 1;
  for (let k = i; k < a.length; k++) {
    if (a[k] === a[k + 1]) {
      seq += 1;
      continue;
    }
    break;
  }

  return seq;
};

const recursion = (a) => {
  let op = [];
  let i = 0;
  while (i < a.length) {
    if (a[i] !== a[i + 1]) {
      op.push(1, a[i]);
      i++;
      continue;
    }
    const seq = findSequence(a, i);
    op.push(seq, a[i]);
    i += seq;
  }

  /* 
    1
    1=> 11
    2=> 21
    3=> 1211
    4=> 111221
    5=> 312211
  */
  return op;
};

const main = () => {
  const input = [1, 1, 1, 3, 1, 2, 2, 1, 1, 3];
  const number = 50;
  let i = 1;
  let op = input;
  while (i <= number) {
    op = recursion(op);
    i++;
  }

  console.log("The final is", op.length);
};

main();
// op [
//   2, 1, 1, 1,
//   1, 3, 1, 1
// ]

const getCommonChar = (part1, part2) => {
  for (let i = 0; i < part1.length || part2.length; i++) {
    const char = part1[i];
    for (let j = 0; j < part2.length; j++) {
      //   console.log(part2[j], char);
      if (char === part2[j]) {
        return char;
      }
    }
  }

  return "";
};

const mapping = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

const getCommonChar1 = (part1, part2, part3) => {
  console.log("parts", part1, part2, part3);
  for (let i = 0; i < part1.length; i++) {
    const char = part1[i];
    for (let j = 0; j < part2.length; j++) {
      if (char === part2[j]) {
        for (let k = 0; k < part3.length; k++) {
          console.log("characters are", char, part2[j], part3[k]);
          if (char === part3[k]) return char;
        }
      }
    }
  }

  return "";
};

const part2 = () => {
  // const input = [
  //   "vJrwpWtwJgWrhcsFMMfFFhFp",
  //   "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  //   "PmmdzqPrVvPwwTWBwg",
  //   "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  //   "ttgJtRGJQctTZtZT",
  //   "CrZsJsPPZsGzwwsLwLmpwMDw",
  // ];
  const input = Deno.readTextFileSync("input.txt").split("\n");
  // console.log("The length", input1.length);
  console.log("The length", input.length);
  let sum = 0;
  for (let i = 0; i < input.length; i += 3) {
    const char = getCommonChar1(input[i], input[i + 1], input[i + 2]);
    sum += mapping[char];
  }
  console.log("The sum is ", sum);
};

const main = () => {
  const input = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ];
  // const input = Deno.readTextFileSync("input.txt").split("\n");
  const sum = input.reduce((sum, rack) => {
    const part1 = rack.slice(0, rack.length / 2);
    const part2 = rack.slice(rack.length / 2);
    // console.log(part1, part2);
    const char = getCommonChar(part1, part2);
    console.log("values are", char, mapping[char]);
    return sum + mapping[char];
  }, 0);

  console.log("The sum is", sum);
};
// main();

part2();

import { isSubStr } from "./findNiceStr.js";

const countOccurences = (string, substr) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    const word = string.slice(i, i + substr.length);
    if (word === substr) {
      count += 1;
    }
  }
  return count;
};

const hasNonOverlappingPair = (string) => {
  const pairIndexMap = new Map();

  for (let i = 0; i < string.length - 1; i++) {
    const pair = string[i] + string[i + 1];
    if (pairIndexMap.has(pair)) {
      if (i - pairIndexMap.get(pair) > 1) {
        return true;
      }
    } else {
      pairIndexMap.set(pair, i);
    }
  }
  return false;
};

const isItNiceStr = (string) => {
  let flag = false;
  let isHaveRepeatedStr = false;

  for (let i = 97; i < 123; i++) {
    for (let j = 97; j < 123; j++) {
      const substr = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(i);
      if (isSubStr(string, substr)) {
        flag = true;
      }
    }
  }

  isHaveRepeatedStr = hasNonOverlappingPair(string);

  return flag && isHaveRepeatedStr;
};

const main = () => {
  const strings = Deno.readTextFileSync('strings.txt').split('\n');
  let count = 0;
  for (let i = 0; i < strings.length; i++) {
    if (isItNiceStr(strings[i])) {
      count += 1;
    }
  }
  console.log('Number of nice strings are', count);
};

main();

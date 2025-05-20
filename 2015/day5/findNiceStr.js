export const isSubStr = (str, subStr) => {
  const subStrLength = subStr.length;

  for (let i = 0; i < str.length; i++) {
    const strToCheck = str.slice(i, i + subStrLength);
    if (strToCheck === subStr) {
      return true;
    }
  }

  return false;
};

const countVowels = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ('aeiou'.includes(str[i])) {
      count += 1;
    }
  }

  return count;
};

const isItHaveSetOfsubstr = (string) => {
  const substr = ['ab', 'cd', 'pq', 'xy'];
  for (const str of substr) {
    if (isSubStr(string, str)) {
      return true;
    }
  }

  return false;
};

const isItNiceStr = (string) => {
  if (countVowels(string) < 3) {
    return false;
  }

  if (isItHaveSetOfsubstr(string)) {
    return false;
  }

  let isItHaveSimilarAplhabets = false;
  for (let i = 97; i < 123; i++) {
    const similar = String.fromCharCode(i) + String.fromCharCode(i);

    if (isSubStr(string, similar)) {
      isItHaveSimilarAplhabets = true;
    }

  }

  return isItHaveSimilarAplhabets;
};

const main = () => {
  const strings = Deno.readTextFileSync('strings.txt').split('\n');
  let count = 0;
  // const strings = ['dvszwmarrgswjxmb', 'haegwjzuvuyypxyu', 'jchzalrnumimnmhp', 'aaa', 'ugknbfddgicrmopn'];
  for (let i = 0; i < strings.length; i++) {
    if (isItNiceStr(strings[i])) {
      count += 1;
    }
    else {
      console.log(strings[i]);
    }
  }

  console.log('number of nice strings are', count);
};

// main(); 
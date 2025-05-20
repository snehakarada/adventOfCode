import { convertToNumbers } from "../day1/sum.js";

const parseData = (content) => {
  const info = content.split(' ');
  const [start, end] = convertToNumbers(info[0].split('-'));
  const string = info[1][0];
  const password = info[2];
  return [start, end, string, password];
};

const countOccurences = (str, password) => {
  let count = 0;
  for (let i = 0; i < password.length; i++) {
    if (str === password[i]) {
      count += 1;
    }
  }

  return count;
};

const passwordValidation = (start, end, str, password) => {
  const count = countOccurences(str, password);

  return (count >= start && count <= end);
};



const revalidation = (data) => {
  console.log('data', data, data.size);
  let count = 0;
  for (const chunk of data) {
    const [start, end, str, password] = parseData(chunk);
    if ((password[start - 1] === str && password[end - 1] !== str)) {
      count += 1;
    }
    if ((password[start - 1] !== str && password[end - 1] === str)) {
      count += 1;
    }
  }

  return count;
};

const main = () => {
  const data = Deno.readTextFileSync('passwords.txt').split('\n');
  let count = 0;
  const unique = new Set(data);
  const recount = revalidation(unique);

  for (let i = 0; i < data.length; i++) {
    const [start, end, str, password] = parseData(data[i]);
    const isValid = passwordValidation(start, end, str, password);
    if (isValid) {
      count += 1;
    }
  }

  console.log('part1', count);
  console.log('part2', recount);

};

main();
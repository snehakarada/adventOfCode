const parseData = (data) => {
  const obj = {};

  data.forEach((element) => {
    const values = element.split(':');
    obj[values[0]] = values[1];
  });

  return obj;
};

const getMissedKeys = (value) => {
  const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
  const keys = Object.keys(value);

  return fields.filter((value) => !(keys.includes(value)));
};

const isAllKeysPresent = (keys) => {
  if (keys.length === 1 && keys[0] === 'cid') {
    return true;
  }

  return !(keys.length > 0);
};

const validateByr = (year) => year >= 1920 && year <= 2002;

const validateIyr = (year) => year >= 2010 && year <= 2020;

const validateEyr = (year) => year >= 2020 && year <= 2030;

const validateHeight = (height) => {
  const extension = height.slice(-2);
  const value = height.slice(0, height.length - 2);

  if (extension === 'cm') {
    return value >= 150 && value <= 193;
  }

  if (extension === 'in') {
    return value >= 59 && value <= 76;
  }
};

const validateHairColor = (value) => {
  const pattern = /^#[0-9a-f]{6}$/;

  return pattern.test(value);
};

const validateEyeColor = (color) => {
  const colours = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

  return colours.includes(color);
};

const validatePasswordId = (id) => id.length === 9;

const isvaluesValid = (data) => validateByr(Number(data.byr)) && validateIyr(Number(data.iyr)) && validateEyeColor(data.ecl) && validateEyr(Number(data.eyr)) && validateHairColor(data.hcl) && validatePasswordId(data.pid) && validateHeight(data.hgt);

const validation = (data) => {
  let count = 0;
  for (const passports of data) {
    const missedKeys = getMissedKeys(passports);
    if (isAllKeysPresent(missedKeys)) {
      count += isvaluesValid(passports) ? 1 : 0;
    }
  }

  return count;
};

const main = () => {
  const data = Deno.readTextFileSync('passports.txt').split('\n\n');
  const passports = [];

  for (let i = 0; i < data.length; i++) {
    const values = data[i].match(/[a-z]*:[a-z0-9#]+/g);
    passports.push(parseData(values));
  }

  const count = validation(passports);
  console.log('The number of valid password in my batch file are', count);
};
main();
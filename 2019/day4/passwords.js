function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

const isNumberHaveDuplicateDigits = (number) => {
  const array = String(number).split('');
  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[index + 1]) {
      return true;
    }
  }

  return false;
};

const atleastTwoAdjacentElements = (number) => {
  const array = String(number).split('');

};

const isItSorted = (number) => {
  const array = String(number).split('');

  return array.every((element, i, array) => i === 0 || array[i - 1] <= element);
};

const isItMatchCriteria = (number) => {
  return isNumberHaveDuplicateDigits(number) && isItSorted(number);
};

const main = () => {
  const values = [];
  for (let number = 147981; number < 691423; number++) {
    if (isItMatchCriteria(number)) {
      values.push(number);
    }
  }

  return values;
};

const values = main();
console.log('values\n', values);
console.log('count', values.length);

//691423
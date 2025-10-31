const isCharValid = (word1, word2) => {
  console.log("The words are", word1, word2);
  const chars = word1.split("");
  if (word1.length !== word2.length) {
    return false;
  }

  for (let i = 0; i < chars.length; i++) {
    console.log(
      "checking for chars",
      word2.includes(chars[i]),
      word2,
      chars[i]
    );
    if (!word2.includes(chars[i])) {
      return false;
    }
  }

  return true;
};

const isValid = (input) => {
  const values = input.split(" ");
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return false;
      }
    }
  }

  return true;
};

const checkForChars = (word1, word2) => {
  const values = word1.split("");
};

const isValid2 = (input) => {
  const values = input.split(" ");
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (
        isCharValid(values[i], values[j]) &&
        isCharValid(values[j], values[i]) &&
        checkForChars(values[i], values[j])
      ) {
        return false;
      }
    }
  }

  return true;
};
const main = () => {
  //   const input = Deno.readTextFileSync("input.txt").split("\n");
  //   let count = 0;
  //   for (let i = 0; i < input.length; i++) {
  //     if (isValid2(input[i])) {
  //       count += 1;
  //     }
  //   }
  //   console.log("The number of valid passpharase are", count);
  console.log("iiii oiii ooii oooi oooo");
  console.log("isValid2", isValid2("iiii oiii ooii oooi oooo"));
};
main();

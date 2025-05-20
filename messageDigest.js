const asciiValues = (text) => {
  return text.map((element) => element.charCodeAt());

};

const binaryRepresentation = (number) => {
  let value = number;
  const binary = [];

  while (value > 0) {
    binary.unshift(value % 2);
    value = Math.floor(value / 2);
  }

  if (binary.length < 8) {
    const countOfElements = 8 - binary.length;
    binary.unshift(...Array(countOfElements).fill(0));
  }

  return binary;
};

const convertingInputToBinaryFormat = (input) => {
  return input.flatMap((number) => binaryRepresentation(number));
};

const sixtyFourBitRegister = (size) => {
  let value = size;
  const register = [];
  while (value > 0) {
    register.unshift(value % 2);
    value = Math.floor(value / 2);
  }

  const remaingBitsCount = 64 - register.length;
  register.unshift(...Array(remaingBitsCount).fill(0));

  return register;
};

const padding = (data, orginalLength) => {
  const size = 512 - (orginalLength + 64);
  data.push(1, ...Array(size - 1).fill(0));
  data.push(...sixtyFourBitRegister(orginalLength));

  return data;
};

const partitions = (binaryData) => {
  const parts = [];
  for (let index = 0; index < binaryData.length; index += 32) {
    parts.push(binaryData.slice(index, index + 32));
  }

  return parts;
};

const process = (text) => {
  const binaryDataOfText = convertingInputToBinaryFormat(asciiValues(text));
  const orginalLength = text.length * 8;
  const data = padding(binaryDataOfText, orginalLength);

  console.log(data.length);

  return partitions(data);
};

const main = () => {
  const msg = 'Hi';
  const arr = msg.split('');
  console.log(process(arr).length);
  const A = [b01100111010001010010001100000001];
  const B = [b11101111110011011010101110001001];
  const c = [b10011000101110101101110011111110];
  const D = [b00010000001100100101010001110110];
};

main();
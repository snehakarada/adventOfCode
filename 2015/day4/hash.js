import md5 from "https://esm.sh/md5";

const counter = (i) => {
  return () => {
    return i++;
  };
};

const main = () => {
  const data = "bgvyzdsv";
  const func = counter(0);

  while (true) {
    const number = func();
    const input = data + number;
    const hash = md5(input);
    if (hash.startsWith('000000')) {
      console.log('hash is', hash, 'and the number is', number);
      break;
    }
  }

  console.log('out of the loop');
};

main();
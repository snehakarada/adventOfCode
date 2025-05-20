const sortElements = (elements) => {
  const [s1, s2, s3] = elements.map(Number).sort((a, b) => a - b);

  return [s1, s2, s3];
};

const countValidTriangles = (input) => {
  let count = 0;
  input.forEach(sides => {
    const values = sides.trim().split(/\s+/);
    const [s1, s2, s3] = sortElements(values);
    if (s1 + s2 > s3) {
      count += 1;
    }
  });

  return count;
};

const main = () => {

  const sides = Deno.readTextFileSync('./sides.txt')
    .split('\n')
    .filter(line => line.trim() !== '');
  console.log(sides);

  console.log(countValidTriangles(sides));
};

main();

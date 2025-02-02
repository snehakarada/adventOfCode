const surfaceAreaOfBox = (length, width, height) => {
  return 2 * ((length * width) + (width * height) + (height * length));

};

const areaOfSmallestSide = (length, width, height) => {
  const side1 = length * width;
  const side2 = width * height;
  const side3 = height * length;

  return Math.min(side1, side2, side3);
};

const wrappingPaper = (dimensions) => {
  let total = 0;
  for (let index = 0; index < dimensions.length; index++) {
    const [length, width, height] = dimensions[index].split('x');
    const surfaceArea = surfaceAreaOfBox(length, width, height);
    total += surfaceArea + areaOfSmallestSide(length, width, height);
  }

  return total;
};

const perimeterOfSmallestSides = (measurements) => {
  const side1 = Math.min(...measurements);
  measurements.splice(measurements.indexOf(String(side1)), 1);
  const side2 = Math.min(...measurements);

  return (side1 * 2) + (side2 * 2);
};

const rollingRibbon = (dimensions) => {
  const totalArea = dimensions.reduce((total, measurements) => {
    const [length, width, height] = measurements.split('x');
    const area = length * width * height;
    total += area + perimeterOfSmallestSides([length, width, height]);

    return total;
  }, 0);

  return totalArea;
};

const main = () => {
  const dimensions = Deno.readTextFileSync('day2/dimensions.txt').split('\n');
  const paperMeasurements = wrappingPaper(dimensions);
  const ribbonMeasrements = rollingRibbon(dimensions);
  console.log('paper', paperMeasurements);
  console.log('ribbon', ribbonMeasrements);
};

main();
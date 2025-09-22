const main = () => {
  const input = Deno.readTextFileSync("input.txt").split("\n");
  const calibrationValues = input.map((line) => {
    const values = line.split("");
    const numericStrings = values.filter((char) => Number(char) + "" !== "NaN");
    const numbers = numericStrings.map((numStr) => Number(numStr));
    console.log("values", numericStrings);
    return numbers[0] * 10 + numbers[numbers.length - 1];
  });

  const sumOfCalibrationValues = calibrationValues.reduce(
    (sum, value) => sum + value,
    0
  );
  console.log(
    "The calibration values are",
    calibrationValues,
    sumOfCalibrationValues
  );
};

main();

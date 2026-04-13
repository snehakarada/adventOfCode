const filterData = (rawData) => {
  const values = rawData.split(":");
  const number = Number(values[0].split(" ")[1]);
  const key = values[1].split(" ")[1];
  const value = Number(values[2].split(" ")[1]);

  return { number: number, [key]: value };
};
const processData = (rawData) => {
  const values = rawData.split(", ");
  let data = {};
  for (let i = 1; i < values.length; i++) {
    const [key, value] = values[i].split(": ");
    data = { ...data, [key]: Number(value) };
  }

  return { ...data, ...filterData(values[0]) };
};

const part1 = (rawData, rules) => {
    let number = 0;
    
    rawData.forEach(aunt => {
        let flag = true;
        const data = processData(aunt)
        const keys = Object.keys(data)

        for(let i = 0; i< keys.length; i++) {
            if (keys[i] === 'number') continue
            if(data[keys[i]] !== rules[keys[i]]) {
                flag = false
                break
            }
        }
        if(flag) {number = data.number}
    });

    console.log("The number is", number)
}


const main = () => {
  const rules = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1,
  };
  const rawData = Deno.readTextFileSync('input.txt').split('\n');
//   const rawData = ["Sue 1: children: 3, cars: 3, vizslas: 0", "Sue 5: children: 3, cars: 2, vizslas: 0"];
  part1(rawData, rules)
};
main();

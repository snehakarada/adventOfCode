const a = [20, 5, 5, 10, 15];
const target = 25;
let combinations = 0;
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] + a[j] === target) {
      combinations++;
    }
  }
}

console.log("combinations are", combinations);

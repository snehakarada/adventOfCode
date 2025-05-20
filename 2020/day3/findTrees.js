const findTreesCount = (map, pos, incrementBy, down) => {
  // let pos = 3;
  let treeCount = 0;
  const end = map[0].length;

  for (let i = 0; i < map.length; i += down) {
    if (map[i][pos % end] === '#') {
      treeCount += 1;
    }

    pos += incrementBy;
  }

  return treeCount;
};

const main = () => {
  const data = Deno.readTextFileSync('map.txt').split('\n');
  const map = data.map((row) => row.split(''));

  const t1 = findTreesCount(map, 0, 3, 1);
  const t2 = findTreesCount(map, 0, 1, 1);
  const t3 = findTreesCount(map, 0, 5, 1);
  const t4 = findTreesCount(map, 0, 7, 1);
  const t5 = findTreesCount(map, 0, 1, 2);
  console.log('Number of trees encounterd', t1, t2, t3, t4, t5);
  console.log('total', t1 * t2 * t3 * t4 * t5);
};

main();
const isInOrder = (report) => {
  const value = report[0] - report[1];
  if (value < 0) {
    for (let i = 0; i < report.length; i++) {
      if (report[i + 1] < report[i]) return false;
    }

    return true;
  }

  if (value > 0) {
    for (let i = 0; i < report.length; i++) {
      if (report[i + 1] > report[i]) return false;
    }

    return true;
  }

  return false;
};

const core = (levels) => {
  if (!isInOrder(levels)) {
    return false;
  }
  for (let i = 0; i < levels.length; i++) {
    const diff = Math.abs(levels[i] - levels[i + 1]);
    if (diff === 0 || diff > 3) return false;
  }

  return true;
};

const isSafe = (report) => {
  const levels = report.split(" ").map((level) => Number(level));

  return core(levels);
};

const isSplitWork = (level) => {
  for (let i = 0; i < level.length; i++) {
    if (core([...level.slice(0, i), ...level.slice(i + 1)])) {
      return true;
    }
  }

  return false;
};

const filterSafeReports = (unSafeReports) => {
  console.log("unsafe reports", unSafeReports);
  let count = 0;
  unSafeReports.forEach((report) => {
    const levels = report.split(" ").map((level) => Number(level));
    if (isSplitWork(levels)) count += 1;
  });

  return count;
};

const main = () => {
  const input = Deno.readTextFileSync("./input.txt");
  const reports = input.split("\n");
  let count = 0;
  const unSafeReports = [];
  reports.forEach((report) => {
    if (isSafe(report)) {
      count += 1;
    } else {
      unSafeReports.push(report);
    }
  });
  const filteredSafeReports = filterSafeReports(unSafeReports);
  console.log(
    "The number of safe reports are",
    count,
    filteredSafeReports,
    count + filteredSafeReports
  );
};

main();

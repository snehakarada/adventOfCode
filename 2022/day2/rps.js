const isIWon = (opponentTurn, myTurn) => {
  const opponentGuide = {
    A: "rock",
    B: "paper",
    C: "scissor",
  };
  const myGuide = {
    X: "rock",
    Y: "paper",
    Z: "scissor",
  };
  console.log("notations", opponentTurn, myTurn);
  console.log("The symbols are", opponentGuide[opponentTurn], myGuide[myTurn]);
  if (opponentGuide[opponentTurn] === "rock" && myGuide[myTurn] === "paper") {
    return { isIWon: true, symbol: "paper" };
  } else if (
    opponentGuide[opponentTurn] === "paper" &&
    myGuide[myTurn] === "rock"
  ) {
    return { isIWon: false, symbol: "rock" };
  } else if (
    opponentGuide[opponentTurn] === "scissor" &&
    myGuide[myTurn] === "rock"
  ) {
    return { isIWon: true, isDraw: false, symbol: "rock" };
  } else if (
    opponentGuide[opponentTurn] === "rock" &&
    myGuide[myTurn] === "scissor"
  ) {
    return { isIWon: false, symbol: "scissor" };
  } else if (
    opponentGuide[opponentTurn] === "paper" &&
    myGuide[myTurn] === "scissor"
  ) {
    return { isIWon: true, isDraw: false, symbol: "scissor" };
  } else if (
    opponentGuide[opponentTurn] === "scissor" &&
    myGuide[myTurn] === "paper"
  ) {
    return { isIWon: false, symbol: "paper" };
  } else if (opponentGuide[opponentTurn] === myGuide[myTurn]) {
    return { isIWon: true, isDraw: true, symbol: myGuide[myTurn] };
  }
};

const sumOutCome = (results) => {
  const marksGuide = {
    rock: 1,
    paper: 2,
    scissor: 3,
  };
  const outcome = {
    lost: 0,
    draw: 3,
    won: 6,
  };

  const symbolValue = marksGuide[results.symbol];
  console.log("symbol value", symbolValue);
  let outcomeSum = 0;
  if (results.isIWon && !results.isDraw) {
    console.log("hello inside won");
    outcomeSum += symbolValue + 6;
  } else if (results.isDraw) {
    outcomeSum += symbolValue + 3;
  } else if (!results.isIWon) {
    outcomeSum += symbolValue;
  }
  console.log("The outcome is", outcomeSum);
  return outcomeSum;
};

const main = () => {
  // const game = [
  //   ["A", "Y"],
  //   ["B", "X"],
  //   ["C", "Z"],
  // ];
  // const game = [["B", "Z"]];
  const game = Deno.readTextFileSync("input.txt").split("\n");

  // const totalSum = game.reduce((sum, turn) => {
  //   const round = turn.split(" ");
  //   const results = isIWon(...round);
  //   console.log("result", results);
  //   const value = sumOutCome(results);
  //   console.log("value and sum", value, sum);
  //   return sum + value;
  // }, 0);

  // console.log("sum is", totalSum);
  const values = {
    win: { A: "paper", B: "scissor", C: "rock" },
    draw: { A: "rock", B: "paper", C: "scissor" },
    lost: { A: "scissor", B: "rock", C: "paper" },
  };
  const guide = {
    X: { status: "lost", isIWon: false },
    Y: { status: "draw", isIWon: true, isDraw: true },
    Z: { status: "win", isIWon: true, isDraw: false },
  };
  const opponentGuide = {
    A: "rock",
    B: "paper",
    C: "scissor",
  };

  const sum = game.reduce((sum, turn) => {
    const round = turn.split(" ");
    const keys = guide[round[1]];
    // console.log("opponent", opponentGuide[round[0]], round[1], keys);
    const results = { ...keys, symbol: values[keys.status][round[0]] };
    console.log("result", results);
    const value = sumOutCome(results);
    // console.log("value and sum", value, sum);
    return sum + value;
  }, 0);
  console.log("The total sum is", sum);
};

main();

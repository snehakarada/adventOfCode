const getConsecutiveElements = function (instructions, programCounter) {
  return instructions.slice(programCounter + 1, programCounter + 4);
};

const add = function (instructions, programCounter) {
  const [number1Loc, number2Loc, resultLoc] = getConsecutiveElements(instructions, programCounter);

  instructions[resultLoc] = instructions[number1Loc] + instructions[number2Loc];

  return { isHalted: false, programCounter: programCounter + 4 };
};

const multiply = (instructions, programCounter) => {
  const [number1Loc, number2Loc, resultLoc] = getConsecutiveElements(instructions, programCounter);

  instructions[resultLoc] = instructions[number1Loc] * instructions[number2Loc];

  return { isHalted: false, programCounter: programCounter + 4 };
};

const halt = function (instructions, programCounter) {
  return { isHalted: true, programCounter: instructions.length + 1 };
};

const executeInstructions = ({ isHalted, programCounter }, instructions) => {
  const currentInst = instructions[programCounter];
  const opcodes = {
    1: add,
    2: multiply,
    99: halt
  };

  return opcodes[currentInst](instructions, programCounter);
};

const runCode = (programState, instructions) => {
  while (!programState.isHalted) {
    programState = executeInstructions(programState, instructions);
  };

  return instructions;
};

const main = () => {
  const data = Deno.readTextFileSync('./input.txt').split(',');
  const instructions = data.map((element) => Number(element));
  let programState = {
    isHalted: false, programCounter: 0
  };

  for (let pos1 = 0; pos1 <= 99; pos1++) {
    for (let pos2 = 0; pos2 <= 99; pos2++) {
      let opcodes = [...instructions];
      opcodes[1] = pos1;
      opcodes[2] = pos2;
      opcodes = runCode(programState, opcodes);
      console.log('inst', opcodes);
      if (opcodes[0] === 19690720) {
        console.log('hello program done');
        console.log('final one',);
        return (100 * opcodes[1]) + opcodes[2];
      }
    }
  }

  console.log('part1', instructions);
};

console.log(main());
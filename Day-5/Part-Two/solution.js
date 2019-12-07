const input = require("../input");

const inputArr = input.input.split(",").map(Number);

/**
ABCDE
 1002

DE - two-digit opCode,      02 == opCode 2
 C - mode of 1st parameter,  0 == position mode
 B - mode of 2nd parameter,  1 == immediate mode
 A - mode of 3rd parameter,  0 == position mode,
                                  omitted due to being a leading zero
*/
const parseCommands = instruction => {
  const parameterModes = [
    ...instruction.slice(0, instruction.length - 2)
  ].reverse();

  return {
    opCode: instruction[instruction.length - 1],
    C: parameterModes[0] ? parameterModes[0] : "0",
    B: parameterModes[1] ? parameterModes[1] : "0",
    A: parameterModes[2] ? parameterModes[2] : "0"
  };
};

const calculateIntCode = instructions => {
  let i = 0;
  let diagnosticCode = null;

  while (instructions[i] !== 99) {
    const instruction = instructions[i].toString();
    const { opCode, C, B, A } = parseCommands(instruction);

    const output = instructions[i + 3];

    const a =
      C === "0" ? instructions[instructions[i + 1]] : instructions[i + 1];
    const b =
      B === "0" ? instructions[instructions[i + 2]] : instructions[i + 2];

    if (opCode === "1") {
      instructions[output] = a + b;

      i += 4;
    } else if (opCode === "2") {
      instructions[output] = a * b;

      i += 4;
    } else if (opCode === "3") {
      instructions[instructions[i + 1]] = 5;

      i += 2;
    } else if (opCode === "4") {
      if (A === "0") {
        diagnosticCode = instructions[instructions[i + 1]];
      }

      i += 2;
    } else if (opCode === "5") {
      i += 3;

      if (a !== 0) {
        i = b;
      }
    } else if (opCode === "6") {
      i += 3;

      if (a === 0) {
        i = b;
      }
    } else if (opCode === "7") {
      instructions[output] = a < b ? 1 : 0;

      i += 4;
    } else if (opCode === "8") {
      instructions[output] = a === b ? 1 : 0;

      i += 4;
    }
  }
  return diagnosticCode;
};

console.log(calculateIntCode(inputArr));

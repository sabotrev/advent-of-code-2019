const fs = require("fs");
const tools = require("../Part-One/solution");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .split(",");

const calculateOpCode = arr => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const result = tools.calculateIntCode([
        arr[0],
        noun,
        verb,
        ...arr.slice(3)
      ]);
      if (result === 19690720) {
        console.log(`Noun ${noun} and verb ${verb} equals 19690720`);
        console.log(`100 * ${noun} + ${verb} = ${100 * noun + verb}`);
      }
    }
  }
};

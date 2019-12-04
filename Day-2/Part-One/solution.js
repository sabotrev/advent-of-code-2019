const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .split(",");

const calculateIntCode = arr => {
  for (let i = 0; i < arr.length; i += 4) {
    let pos1 = arr[arr[i + 1]];
    let pos2 = arr[arr[i + 2]];
    if (arr[i] === 1) {
      // Add
      arr[arr[i + 3]] = pos1 + pos2;
    } else if (arr[i] === 2) {
      // Multiply
      arr[arr[i + 3]] = pos1 * pos2;
    }
  }

  return arr[0];
};

module.exports = {
  calculateIntCode
};

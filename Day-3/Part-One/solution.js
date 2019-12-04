const input = require("../input");

const lineOne = input.lineOne.split(",");
const lineTwo = input.lineTwo.split(",");

const manhattanDistance = (arrOne, arrTwo) => {
  const hashOne = creatHash(arrOne);
  const hashTwo = creatHash(arrTwo);

  let overlaps = [];
  for (mark in hashOne) {
    if (hashTwo.hasOwnProperty(mark)) {
      const [a, b] = mark.split(",");
      overlaps.push(Math.abs(parseInt(a)) + Math.abs(parseInt(b)));
    }
  }

  return Math.min(...overlaps);
};

const creatHash = paths => {
  let hash = {};
  let x = 0;
  let y = 0;

  for (path of paths) {
    const value = parseInt(path.slice(1));
    const dir = path[0];
    if (dir === "L") {
      for (let i = value; i > 0; i--) {
        x--;
        hash[`${x},${y}`] = true;
      }
    }
    if (dir === "R") {
      for (let i = 0; i < value; i++) {
        x++;
        hash[`${x},${y}`] = true;
      }
    }
    if (dir === "D") {
      for (let i = value; i > 0; i--) {
        y--;
        hash[`${x},${y}`] = true;
      }
    }
    if (dir === "U") {
      for (let i = 0; i < value; i++) {
        y++;
        hash[`${x},${y}`] = true;
      }
    }
  }

  return hash;
};

console.log(manhattanDistance(lineOne, lineTwo));

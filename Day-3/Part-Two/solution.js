const input = require("../input");

const lineOne = input.lineOne.split(",");
const lineTwo = input.lineTwo.split(",");

const fewestIntersection = (arrOne, arrTwo) => {
  let hash = {};
  let cnt1 = 0;
  let cnt2 = 0;
  let x1 = 0;
  let y1 = 0;
  let x2 = 0;
  let y2 = 0;
  let overlapSums = [];

  for (let k = 0; k < arrOne.length; k++) {
    const value = parseInt(arrOne[k].slice(1));
    const dir = arrOne[k][0];
    if (dir === "L") {
      for (let i = value; i > 0; i--, x1--, cnt1++) {
        hash[`${x1},${y1}`] = cnt1;
      }
    }
    if (dir === "R") {
      for (let i = 0; i < value; i++, x1++, cnt1++) {
        hash[`${x1},${y1}`] = cnt1;
      }
    }
    if (dir === "D") {
      for (let i = value; i > 0; i--, y1--, cnt1++) {
        hash[`${x1},${y1}`] = cnt1;
      }
    }
    if (dir === "U") {
      for (let i = 0; i < value; i++, y1++, cnt1++) {
        hash[`${x1},${y1}`] = cnt1;
      }
    }
  }

  for (let k = 0; k < arrTwo.length; k++) {
    const value = parseInt(arrTwo[k].slice(1));
    const dir = arrTwo[k][0];
    if (dir === "L") {
      for (let i = value; i > 0; i--, x2--, cnt2++) {
        const sum = checkOverlap(hash, `${x2},${y2}`, cnt2);
        sum ? overlapSums.push(sum) : null;
      }
    }
    if (dir === "R") {
      for (let i = 0; i < value; i++, x2++, cnt2++) {
        const sum = checkOverlap(hash, `${x2},${y2}`, cnt2);
        sum ? overlapSums.push(sum) : null;
      }
    }
    if (dir === "D") {
      for (let i = value; i > 0; i--, y2--, cnt2++) {
        const sum = checkOverlap(hash, `${x2},${y2}`, cnt2);
        sum ? overlapSums.push(sum) : null;
      }
    }
    if (dir === "U") {
      for (let i = 0; i < value; i++, y2++, cnt2++) {
        const sum = checkOverlap(hash, `${x2},${y2}`, cnt2);
        sum ? overlapSums.push(sum) : null;
      }
    }
  }

  return Math.min(...overlapSums);
};

const checkOverlap = (hash, mark, cnt2) => {
  if (hash.hasOwnProperty(mark)) {
    return hash[mark] + cnt2;
  }
};

console.log(fewestIntersection(lineOne, lineTwo));

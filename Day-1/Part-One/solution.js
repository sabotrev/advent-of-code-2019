const fs = require("fs");

const counterUpper = () => {
  return fs.readFile("../input.txt", (_, data) => {
    const massArray = data.toString().split("\n");
    return massArray.reduce((total, mass) => {
      return total + requiredFuel(mass);
    }, 0);
  });
};

const requiredFuel = mass => {
  return Math.floor(mass / 3 - 2);
};

console.log(counterUpper());

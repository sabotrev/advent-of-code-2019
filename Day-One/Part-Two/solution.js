const fs = require("fs");

const doubleChecker = () => {
  fs.readFile("../input.txt", (_, data) => {
    const massArray = data.toString().split("\n");
    console.log(
      massArray.reduce((total, mass) => {
        return total + requiredFuel(0, mass);
      }, 0)
    );
  });
};

const requiredFuel = (total, mass) => {
  const required = Math.floor(mass / 3 - 2);
  while (required >= 0) {
    return requiredFuel(total + required, required);
  }

  return total;
};

doubleChecker();

const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .split("\n");

const inputTest = "COM)B,B)C,C)D,D)E,E)F,B)G,G)H,D)I,E)J,J)K,K)L".split(",");

const parse = orbitArr => {
  let hash = {};

  orbitArr.map(el => {
    const [parent, child] = el.split(")");

    if (!hash[parent]) {
      hash[parent] = {
        parent: null,
        children: []
      };
    }

    if (!hash[child]) {
      hash[child] = {
        parent: null,
        children: []
      };
    }

    hash[parent].children.push(child);
    hash[child].parent = parent;
  });

  return hash;
};

const ancestors = (hash, id) => {
  const nodes = [];

  while (id !== "COM") {
    id = hash[id].parent;
    nodes.push(id);
  }

  return nodes;
};

const getOrbitCount = hash => {
  let sum = 0;
  Object.keys(hash).map(node => {
    sum += ancestors(hash, node).length;
  });

  return sum;
};

const parsedInput = parse(inputTest);
console.log(getOrbitCount(parsedInput));

const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .split("\n");

const inputTest = "COM)B,B)C,C)D,D)E,E)F,B)G,G)H,D)I,E)J,J)K,K)L,K)YOU,I)SAN".split(
  ","
);

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

const minTransfers = hash => {
  const youAncestors = ancestors(hash, "YOU");
  const santaAncestors = ancestors(hash, "SAN");

  for (let i = 0; i < youAncestors.length; i++) {
    if (santaAncestors.includes(youAncestors[i])) {
      return i + santaAncestors.indexOf(youAncestors[i]);
    }
  }

  return null;
};

const parsedInput = parse(input);
console.log(minTransfers(parsedInput));

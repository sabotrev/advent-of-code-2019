const secureContainer = (lower, higher) => {
  let count = 0;
  for (let i = lower; i < higher; i++) {
    const numArr = i.toString().split("");
    const sortedArr = [...numArr].sort().join();

    if (numArr.join() === sortedArr) {
      const hash = {};
      numArr.forEach(el => {
        hash[el] = (hash[el] || 0) + 1;
      });

      if (checkCriteria(hash)) {
        count++;
      }
    }
  }

  return count;
};

const checkCriteria = hash => {
  let result = false;
  for (num in hash) {
    if (hash[num] > 1 && hash[num] === 2) {
      result = true;
    }
  }

  return result;
};

console.log(secureContainer(168630, 718098));

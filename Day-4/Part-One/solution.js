const secureContainer = (lower, higher) => {
  let count = 0;
  for (let i = lower; i < higher; i++) {
    const numArr = i.toString().split("");
    const numSet = new Set(numArr);
    if (numSet.size < 6) {
      const sortedArr = [...numArr].sort().join();
      if (numArr.join() === sortedArr) {
        count++;
      }
    }
  }

  return count;
};

console.log(secureContainer(168630, 718098));

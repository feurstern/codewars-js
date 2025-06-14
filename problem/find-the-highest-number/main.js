const numbers = [23, 121, 121, 43, 34, 999, 121];

const findTheLargestNumber = () => {
  let highest = 0;
  numbers.map((x) => {
    if (x >= highest) {
      highest = x;
    }
  });

  return highest;
};

console.log(findTheLargestNumber());

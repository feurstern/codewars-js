function largestOfFour(arr) {
  let sum = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = arr[i][i];

    arr[i].forEach((x, i) => {
      if (x > max) {
        max = x;
      }
    });

    sum.push(max);
  }
  return sum;
}

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

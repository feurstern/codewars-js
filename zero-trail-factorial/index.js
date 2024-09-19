const zeros = (n) => {
  let result = 1;
  let total = 0;

  for (let i = 1; i <= n; i++) {
    // console.log(i);
    result = i * result;
  }

  result
    .toString()
    .split("")
    .forEach((x) => (x === "0" ? total++ : 0));

  return result;
};

console.log(zeros(30));

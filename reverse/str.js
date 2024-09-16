const t1 = "Hatsune";
const reverse = (str) => {
  let arr = [];
  str.split("").forEach((x) => {
    arr.unshift(x);
  });
  return arr.join("");
};

console.log(reverse(t1));

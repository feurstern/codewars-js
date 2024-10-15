function confirmEnding(str, target) {
  return str.split("").splice(-target.length, target.length).join("") == target;
}
const t = confirmEnding("Abstraction", "action");

// console.log(t);

const findMaxValue = (arr) => {
  arr.sort((a, b) => {
    return b - a;
  });
};

const arr = [203, 100, 40, 3, 1031, 1998, 233, 111]
console.log(findMaxValue(arr));
console.log(arr[0])

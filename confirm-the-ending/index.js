function confirmEnding(str, target) {
  return str.split("").splice(-target.length, target.length).join("") == target;
}
const t = confirmEnding("Abstraction", "action");

console.log(t);

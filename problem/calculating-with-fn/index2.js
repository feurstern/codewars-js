const [zero, one, two, three, four, five, six, seven, eight, nine] = [
  ...Array(10),
].map((_, idx) => (fn) => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(
  (val) => new Function(`b`, `return a => a ${val} b ^ 0`)
);

const [miku, mikiu] = [...Array(2), ].map((x) => {
  console.log(x);
});

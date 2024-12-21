const t = "glory for the lich king!";

const toJadenCase = (str) => {
  return str
    .split(" ")
    .map((w) =>
      w
        .split("")
        .map((c, i) => (i == 0 ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    )
    .join(" ");
};

console.log(toJadenCase(t));

function truncateString(str, num) {
  // return num;
  return (
    str.split("").slice(0, num).join("") +
    `${num >= str.split("").length ? "" : "..."}`
  );
}

const t = truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);

console.log(t);

const t = "hatsune miku is so gorgeous xixixi";
const strConvert = (str) => {
  let result = [];
  str.split(" ").forEach((x) => {
    x.split("").forEach((z, i) => {
      const index = i + 1;
      index % 2 == 1
        ? result.push(z.toUpperCase())
        : result.push(z.toLowerCase());
    });
    result.push(" ");
  });

  return result.join("").toString();
};

console.log(strConvert("This is a test"));

const fnConvert = (r, g, b) => {
  const result = [];
  const mainData = [
    {
      decimalNumber: 0,
      hexaNumber: 0,
    },
    {
      decimalNumber: 1,
      hexaNumber: 1,
    },
    {
      decimalNumber: 2,
      hexaNumber: 2,
    },
    {
      decimalNumber: 3,
      hexaNumber: 3,
    },
    {
      decimalNumber: 4,
      hexaNumber: 4,
    },
    {
      decimalNumber: 5,
      hexaNumber: 5,
    },
    {
      decimalNumber: 6,
      hexaNumber: 6,
    },
    {
      decimalNumber: 7,
      hexaNumber: 7,
    },
    {
      decimalNumber: 8,
      hexaNumber: 8,
    },
    {
      decimalNumber: 9,
      hexaNumber: 9,
    },
    {
      decimalNumber: 10,
      hexaNumber: "A",
    },
    {
      decimalNumber: 11,
      hexaNumber: "B",
    },
    {
      decimalNumber: 12,
      hexaNumber: "C",
    },
    {
      decimalNumber: 13,
      hexaNumber: "D",
    },
    {
      decimalNumber: 14,
      hexaNumber: "E",
    },
    {
      decimalNumber: 15,
      hexaNumber: "F",
    },
  ];

  result.push(Math.floor(r > 255 ? 15 : r / 16), r / 16 > 16 ? 15 : r % 16);
  result.push(Math.floor(g / 16 > 16 ? 15 : g / 16), g / 16 > 16 ? 15 : g % 16);
  b > 0
    ? result.push(
        Math.floor(b / 16 > 16 ? 15 : b / 16),
        b / 16 > 16 ? 15 : b % 16
      )
    : result.push(0, 0);

  let hexDeximal = "";

  result.forEach((x) => {
    mainData.forEach((y) => {
      x == y.decimalNumber ? (hexDeximal += y.hexaNumber) : 0;
    });
  });

  return hexDeximal;
};

console.log(fnConvert(300, 255, 255));

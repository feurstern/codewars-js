const fnConvert = (num) => {
  const romanSymbols = [
    { num: 1000, romanLetter: "M" },
    { num: 900, romanLetter: "CM" },
    { num: 500, romanLetter: "D" },
    { num: 400, romanLetter: "CD" },
    { num: 100, romanLetter: "C" },
    { num: 90, romanLetter: "XC" },
    { num: 50, romanLetter: "L" },
    { num: 40, romanLetter: "XL" },
    { num: 10, romanLetter: "X" },
    { num: 9, romanLetter: "IX" },
    { num: 5, romanLetter: "V" },
    { num: 4, romanLetter: "IV" },
    { num: 1, romanLetter: "I" },
  ];
  result = "";

  for (const { num: value, romanLetter } of romanSymbols) {
    while (num >= value) {
      result += romanLetter;
      num -= value;
    }
  }

  return result;
};

console.log(fnConvert(121));

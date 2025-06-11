class RomanNumerals {
  constructor() {}
  static toRoman(num) {
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

    let result = "";
    for (const { num: value, romanLetter } of romanSymbols) {
      while (num >= value) {
        result += romanLetter;
        num -= value;
      }
    }
    return result;
  }

  static fromRoman(str) {
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

    let number = 0;
    str.split("").forEach((char, i) => {
      if (i + 1 < str.length && romanSymbols[i].num < romanSymbols[i + 1].num) {
        number += romanSymbols[i + 1].num - romanSymbols[i].num;
      } else {
        number += romanSymbols[[i]].num;
      }
    });

    return number;
    // romanSymbols.map((x) => {
    //   x.romanLetter == str.split("")[0] ? (number = x.num) : 0;
    // });

    // let result = "";
    // for (const { num: value, romanLetter } of romanSymbols) {
    //   while (number >= value) {
    //     result += romanLetter;
    //     number += value;
    //   }
    // }
    return number;
  }
}

console.log(RomanNumerals.toRoman(12));
console.log(RomanNumerals.fromRoman("XII"));

const a = 5;
const b = 35;
const c = 79;
const d = 124;
const e = 521;
const f = 1234;

const romanValueFirst = [
  {
    num: 1,
    romanLetter: "I",
  },
  {
    num: 2,
    romanLetter: "II",
  },
  {
    num: 3,
    romanLetter: "III",
  },
  {
    num: 4,
    romanLetter: "IV",
  },
  {
    num: 5,
    romanLetter: "V",
  },
  {
    num: 6,
    romanLetter: "VI",
  },
  {
    num: 7,
    romanLetter: "VII",
  },
  {
    num: 8,
    romanLetter: "VII",
  },
  {
    num: 9,
    romanLetter: "IX",
  },
  {
    num: 10,
    romanLetter: "X",
  },
  {
    num: 50,
    romanLetter: "L",
  },
  {
    num: 100,
    romanLetter: "C",
  },
  {
    num: 500,
    romanLetter: "D",
  },
  {
    num: 1000,
    romanLetter: "M",
  },
];

// console.log(
//   romanValueFirst.filter((x) => x.num === a).map((x) => x.romanLetter)[0]
// );

// return;

const convertFn = (num) => {
  const arrNum = num.toString().split("");
  const length = arrNum.length;

  let result = "";
  switch (length) {
    case 1:
      result = romanValueFirst
        .filter((x) => x.num === num)
        .map((x) => x.romanLetter)[0];
      break;
    case 2:
      if (num >= 50) {
         result+="L"
        
      } else {
        for (let index = 0; index < length; index++) {
          result += romanValueFirst
            .filter((x) => x.num === arrNum[index])
            .map((x) => x.romanLetter)[0];
        }
      }
    default:
      break;
  }

  return result;
};

console.log(convertFn(a));

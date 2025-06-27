// const caesarChipser = (shift: number) => {
//   if (shift < 1 && shift > 26) {
//     return "out of the number!";
//   }

// };

class caesarChipser {
  encode: () => string;
  decode: () => string;

  constructor(encode: () => string, decode: () => string) {
    this.encode = encode;
    this.decode = decode;
  }  
}

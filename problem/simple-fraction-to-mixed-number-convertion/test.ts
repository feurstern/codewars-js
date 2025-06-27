function convert(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return convert(b, a % b);
}

const mixedNumber = (value: number): string => {
  const numbers = value.toString().split("/");

  const x = Number(numbers[0]);
  const y = Number(numbers[1]);

  if (Number(y) == 0) {
    return "Error";
  }

  if (Number(x) == 0) {
    return x.toString();
  }

  const a = Math.floor(Math.abs(Number(x) / Math.abs(Number(y))));
  const r = Math.floor(Math.abs(Number(x) % Math.abs(Number(y))));

  const gdc = convert(a, r);

  if (a == 0) {
    return `${r / gdc}/${y / gdc}`;
  }

  return `${a} ${r / gdc}/${y / gdc}`;
};

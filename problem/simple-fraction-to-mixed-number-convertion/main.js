// greates common diivisor
function gcd(a, r) {
  if (r == 0) {
    return a;
  }
  return gcd(r, a % r);
}

var mixedFraction = function (x, y) {
  var a = Math.round(Math.abs(x) / Math.abs(y));
  var r = Math.round(Math.abs(x) % Math.abs(y));

  if (y == 0) {
    return "error";
  }

  if (r == 0) {
    return a;
  }

  const g = gcd(r, y);

  if (a == 0) {
    return `${r / g}/${y / g}`;
  }
  return `${a} ${r / g}/${y / g}`;
};

console.log(mixedFraction(-10, 7));
console.log(mixedFraction(6, 3));
console.log(mixedFraction(4, 6));
console.log(mixedFraction(3, 0));
console.log(mixedFraction(0, 7));
console.log(mixedFraction(10, -2));
console.log(mixedFraction(22, 7));

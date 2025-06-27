function convert(a, b) {
  if (b === 0) {
    return a;
  }
  return convert(b, a % b);
}
var mixedNumber = function (value) {
  var numbers = value.toString().split("/");

  var x = Number(numbers[0]);
  var y = Number(numbers[1]);
  if (Number(y) == 0) {
    return "Error";
  }
  if (Number(x) == 0) {
    return x.toString();
  }
  var a = Math.floor(Math.abs(Number(x) / Math.abs(Number(y))));
  var r = Math.floor(Math.abs(Number(x) % Math.abs(Number(y))));
  var gdc = convert(a, r);
  if (a == 0) {
    return "".concat(r / gdc, "/").concat(y / gdc);
  }
  return ""
    .concat(a, " ")
    .concat(r / gdc, "/")
    .concat(y / gdc);
};

console.log(mixedNumber("10/7"));

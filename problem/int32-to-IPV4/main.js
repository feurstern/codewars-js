var int32ToIp = function (int32) {
  var binary = int32.toString(2).padStart(32, "0");
  var octets = [
    binary.slice(0, 8),
    binary.slice(8, 16),
    binary.slice(16, 24),
    binary.slice(24, 32),
  ];
  return octets
    .map(function (x) {
      return parseInt(x, 2);
    })
    .join(".");
};

// console.log(int32ToIp(32));


const int32ToIp2 = int32 => [24, 16, 8, 0].map(e => int32 >> e & 255).join('.');


console.log(int32ToIp2(121212))
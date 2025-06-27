const int32ToIp = (int32: number): string => {
  const binary = int32.toString(2).padStart(32, "0");
  const octets = [
    binary.slice(0, 8),
    binary.slice(8, 16),
    binary.slice(16, 24),
    binary.slice(24, 32),
  ];
  return octets.map((x) => parseInt(x, 2)).join(".");
};

const int32ToIp2 = int32 => [24, 16, 8, 0].map(e => int32 >> e & 255).join('.');

function int32ToIp3(int32: number) {
  return (
    ((int32 >> 24) & 0xff) +
    "." +
    ((int32 >> 16) & 0xff) +
    "." +
    ((int32 >> 8) & 0xff) +
    "." +
    (int32 & 0xff)
  );
}

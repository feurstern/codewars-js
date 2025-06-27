const mixedFraction = (x: number, y: number): string => {
  const a = Math.floor(Math.abs(x) / Math.abs(y));
  const r = Math.floor(Math.abs(x) % Math.abs(y));

  return `${a} ${r}`;
};

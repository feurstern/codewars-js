const vowelValueSum = (text: string): number => {
  const aCode = "a".charCodeAt(0);

  return Math.max(
    ...text
      .toLocaleLowerCase()
      .split("")
      .filter((x) => x == "a" || x == "i" || x == "o" || x == "e" || x == "o")
      .map((x) => x.charCodeAt(0) - aCode + 1)
  );
};

console.log(vowelValueSum("codewars"));

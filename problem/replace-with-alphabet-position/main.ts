const alphbetPosition = (text: string): string => {
  const aCode = "a".charCodeAt(0);

  return text
    .toLocaleLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z")
    .map((x) => x.charCodeAt(0) - aCode + 1)
    .join("");
};

console.log(alphbetPosition("hatsune miku 123"));

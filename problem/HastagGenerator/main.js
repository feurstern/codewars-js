var hastagConverter = function (s) {
  if (s.length === 0 || s.length > 140 || s.trim().length === 0) {
    return false;
  }
  return (
    "#" +
    s
      .split(" ")
      .map(function (x) {
        if (x.length === 0) return "";
        return x.charAt(0).toLocaleUpperCase() + x.slice(1);
      })
      .join("")
  );
};
console.log(hastagConverter(" "));

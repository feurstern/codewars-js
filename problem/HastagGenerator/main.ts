const hastagConverter = (s: string): string | boolean => {
  if (s.length === 0 || s.length > 140 || s.trim().length === 0) {
    return false;
  }

  return (
    "#" +
    s
      .split(" ")
      .map((x) => {
        if (x.length === 0) return "";
        return x.charAt(0).toLocaleUpperCase() + x.slice(1);
      })
      .join("")
  );
};

console.log(hastagConverter("dnet is getting rusty"));

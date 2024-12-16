const str = `In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`;

const fn = (str) => {
  const res = str.split(" ").reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;

    return acc;
  }, {});

  const sortedEntries = Object.entries(res).sort(([, a], [, b]) => b - a);

  //return entire the array
  //   return sortedEntries;
  //   return the  top 3 frag
  return Object.fromEntries(
    sortedEntries.filter((x, i) => i == 0 || i == 1 || i == 2)
  );
  // Converting sorted entries back to an object
  return Object.fromEntries(sortedEntries);
};

console.log(fn(str));

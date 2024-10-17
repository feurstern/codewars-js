function mutation(arr) {
  let count = 0;

  arr[1]
    .toLowerCase()
    .split("")
    .forEach((xixi) => {
      if (arr[0].toLowerCase().split("").includes(xixi)) {
        count++;
      }
    });

  return count == arr[1].length;
}

console.log(mutation(["Marry", "Army"]));

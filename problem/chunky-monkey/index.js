function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let index = 0;
  for (let i = 0; i < arr.length / size; i++) {
    newArr.push(arr.slice(index, index + size));
    index += size;
  }
  return newArr;
}

const t = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4);
console.log(t);
const convertTest = (str) => {
  return str.split("").toString();
};

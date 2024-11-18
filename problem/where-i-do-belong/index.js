function getIndexToIns(arr, num) {
    return arr.filter(x => x < num).length
  }
  
  console.log(getIndexToIns([40, 60], 50));
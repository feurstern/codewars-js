function repeatStringNumTimes(str, num) {
    if (num > 0) {
      let arr = [];
      for (let i = 0; i < num; i++){
         arr.push(str)
      }
      return arr.join('');
    }
    else {
      return '';
    }
  }
  
  const t = repeatStringNumTimes("abc", 3);
  
  console.log(t)
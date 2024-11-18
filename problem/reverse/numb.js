const num = 1998;

const reverse = (num) => {
    let arr = [];
    num.toString().split('').forEach(x=> arr.unshift(x));
    return arr.join('');
};

console.log(reverse(num));

const zero = (fn) => {
  return fn ? fn(0) : 0;
};
const one = (fn) => {
  return fn ? fn(1) : 1;
};
const two = (fn) => {
  return fn ? fn(2) : 2;
};
const three = (fn) => {
  return fn ? fn(3) : 3;
};

const four = (fn) => {
  return fn ? fn(4) : 4;
};
const five = (fn) => {
  return fn ? fn(5) : 5;
};
const six = (fn) => {
  return fn ? fn(6) : 6;
};

const seven = (fn) => {
  return fn ? fn(7) : 7;
};

const eight = (fn) => {
  return fn ? fn(8) : 8;
};

const nine = (fn) => {
  return fn ? fn(9) : 9;
};
const plus = (x) => {
  return (y) => {
    return y + x;
  };
};
const minus = (x) => {
  return (y) => {
    return y - x;
  };
};

const times = (x) => {
  return (y) => {
    return y * x;
  };
};

const divideBy = (x) => {
  return (y) => {
    ~~(y / x);
  };
};

console.log(seven(plus(five())));

const curry = function (callback) {
  let argsValue = [];
  return function curried(...args) {
    argsValue.push(...args);
    if (argsValue.length >= 4) {
      const res = callback(...argsValue);
      argsValue = [];
      return res;
    }
    return curried;
  };
};

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1)(2)(3)(4));

const add = function (...a) {
  let sum = a.reduce((a, b) => a + b, 0);
  function myCurry(...args) {
    sum = args.reduce((a, b) => a + b, sum);
    return myCurry;
  }
  myCurry.value = () => sum;
  myCurry.valueOf = () => sum;
  return myCurry;
};

console.log(add(1)(2).value() == 3);
console.log(add(1, 2)(3).value() == 6);
console.log(add(1)(2)(3).value() == 6);
console.log(add(1)(2) + 3);

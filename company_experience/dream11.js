// 1. Implement a function onlyTwice which stores two instances a function invocation and returns first on odd calls and second on even calls.

// It was based on singleton design pattern.
const addTwoNumbers = (a, b) => a + b;
function onlyTwice(cb) {
  let first = null,
    second = null;
  let isOdd = true;
  return function (...args) {
    if (isOdd) {
      if (first === null) {
        first = cb(...args);
      }
      isOdd = false;
      return first;
    } else {
      if (second === null) {
        second = cb(...args);
      }
      isOdd = true;
      return second;
    }
  };
}
const myFancyAdd = onlyTwice(addTwoNumbers);

console.log(myFancyAdd(2, 3)); // 5
console.log(myFancyAdd(1, 2)); // 3
console.log(myFancyAdd(3, 4)); // 5
console.log(myFancyAdd(3, 7)); // 3
console.log(myFancyAdd(3, 7)); // 5

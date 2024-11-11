//  question 1  creates currying function that accepts 5 arguments ?

const ARGS_LEN = 5;
const sum = (...args) => {
  if (args.length === ARGS_LEN) {
    return args.reduce(
      (intialValue, currentValue) => intialValue + currentValue
    );
  } else {
    let recursive = (...args2) => {
      args = args.concat(args2);
      if (args.length === ARGS_LEN) {
        return args.reduce(
          (intialValue, currentValue) => intialValue + currentValue
        );
      } else {
        return recursive;
      }
    };
    return recursive;
  }
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3)(4, 5));

// Question 2 creates currying function that return sum of previous value ?

const currying = () => {
  let prev = 0;
  return (newValue = 0) => {
    prev += newValue;
    return prev;
  };
};

const sum1 = currying();
console.log(sum1(1));
console.log(sum1(3));
console.log(sum1(4));

// Question 3 creates a curring function console.log(add(3)(4)(6)(8)());
function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
console.log(add(3)(4)(6)(8)());

console.log("Hello, World!");

const curry = (cb) => {
  let arg = [];
  function add(...args) {
    arg = [...arg, ...args];
    console.log("arr", args, arg);
    if (arg.length >= cb.length) {
      return cb(...arg);
    } else {
      return add;
    }
  }
  return add;
};

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3, 4, 5));
console.log(".....");
console.log(curriedSum(1)(2, 3)(4));
// console.log(curriedSum(1)(2)(3)(4));

// const sum = (...args1) => {
//   if(!args1.length) return 0;
// return (...args2)=>{
//     if(args2.length){
//         return sum(...args1, ...args2);
//     }else{
//         return args1.reduce((a,b)=> a+b,0);
//     }
// }
// }

// const res = sum(1, 2, 3, 4)();
// const res2 = sum(1)(2)(3)(4)();
// const res3 = sum(1, 2)(3, 4)();
// const res4 = sum(1, 2, 3)(4)();
// const res5 = sum(1)(2, 3, 4)();
// const res6 = sum();
// console.log(res, res2, res3, res4, res5, res6);

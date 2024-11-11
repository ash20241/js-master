// Please write a JavaScript function that demonstrates currying.
// Start by creating a function called curriedSum that takes three arguments (a, b, and c) and returns their sum. Then, transform this function into a curried version that returns a sequence of functions, each taking one argument at a time.

// function curriedSum(a){
//     let prev = a;
//      return (b) =>{
//          if(b){
//              prev = prev + b
//          }
//          return prev;
//      }
// }
// console.log(curriedSum(1)(2)(3));

// Write a JavaScript function called fetchData that returns a promise. The promise should resolve with the string "Data fetched successfully!" after a delay of 2 seconds. Then, use this function to log the resolved value to the console.
// a) Write the fetchData function.
// b) Demonstrate how you would use the fetchData function to log the result to the console.

// function fetchData(){
//     let p = new Promise((res , rej) =>{
//         setTimeout(()=>{
//             res("Data fetched successfully!");
//         },5000)

//     }).then((data) => console.log(data));

// }

// function promiseCalled () {
//     fetchData();
// }
// promiseCalled();

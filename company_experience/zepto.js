// function GroupBy(arr, callback) {
//     let res = {};
//     for (let i = 0; i < arr.length; i++) {
//         const currRes = callback(arr[i]);
//         if (res[currRes]) {
//             res[currRes].push(arr[i]);  // Push to the existing array
//         } else {
//             res[currRes] = [arr[i]];    // Create a new array for the group
//         }
//     }
//     return res;
// }

// Group By
// const arr = [ { name:"sahib" , age: 23} , {name: 'mohit', age: 25} , {name: 'vivek' , age: 26}];

// console.log(GroupBy(arr, ({age})=> age));

// Question 2:

// function ReturnPro() {
//     return new Promise((res, rej) => rej("cancelled"));
// }

// function retry(fn, n) {
//     return () => {
//         return new Promise((res, rej) => {
//             fn()
//                 .then(res)
//                 .catch((err) => {
//                     if (n === 1) {
//                         rej(err);
//                     } else {
//                         console.log("called");
//                         retry(fn, n - 1)()
//                             .then(res)
//                             .catch(rej);
//                     }
//                 });
//         });
//     };
// }

// const fun = retry(ReturnPro, 3);
// fun().then(console.log).catch(console.log);

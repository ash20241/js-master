/* Output based Coercion Question for Interview Purpose */

console.log(2 + "2" - 1); //  '22' - 1  - '21'
console.log("5" + 3);
console.log(3 == "3"); // 3 === 3
console.log(1 < 2 < 3); //  1 < 2  true  < 3  - > 1 < 3 - > true
console.log(3 < 2 < 1); // 3< 2 -> false -> 0 < 1 true
console.log(1 + "1" - 1); // 11 -1  - 10

console.log([] == 0); // [] => string "" -> 0  == 0  true
console.log([] == ![]); //  ![]  true ->    0  -> false  == false  => true
console.log(!![]);

console.log("1" - -"1"); //  '1' -  (- '1')  =>      1 -  (-1) => 1+1 = 2
console.log(typeof NaN); // number

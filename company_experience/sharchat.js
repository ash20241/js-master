//1. 
const temp = 1 + '1'  - '5' * 4 - '9';
console.log(temp); 

//-18

// 2. 
setTimeout(() => console.log(1),0);
console.log(2);
setTimeout(() => console.log(3), 2);
Promise.resolve(true).then(() => console.log(4));
console.log(5);

//3. custom swap function 
Array.prototype.swap = function(){
    let arr = this;
    let n = arr.length;
    let temp = arr[0];
    arr[0] = arr[n-1];
    arr[n-1] = temp;
   }
   
   let myArray = [1,2,3,4,5];
   myArray.swap();
   console.log(myArray); // [5,2,3,4,1]

// 4. 
const obj = {
    name: "Sahib Bajaj",
    fun1: () => { console.log(this.name); },
    fun2: function(){
     console.log(this.name);
    }
   }
   obj.fun1();  
   obj.fun2(); 
   // undefined
   // Sahib Bajaj


// 5. use of useCallback vs useMemo hook and CodePush in RN

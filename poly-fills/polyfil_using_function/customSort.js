function customSort (arr, compareFunction){
    if( !compareFunction || typeof compareFunction !== 'function'){
        compareFunction =  (a,b) => a-b ; 
    }
    for( let i = 0; i < arr.length; i++) {
            for( let j = i+1; j < arr.length; j++){
                    if(compareFunction(arr[j] , arr[i] < 0)){
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j]=  temp;   
                    }
            }
        }
     return arr;
}

let arr = [5, 4, 3, 2, 1];
console.log(customSort(arr)); 
// Output: [1, 2, 3, 4, 5]

// Custom comparison function for descending order
let descendingOrder = (a, b) => b - a;
console.log(customSort(arr, descendingOrder));
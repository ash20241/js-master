// Shallow copy
let obj = {
  name: "sahib",
  age: 25,
};
let obj2 = Object.assign(obj, { name: "ash" });
console.log(obj, obj2);

// Deep Copy
let objj = {
  a: 10,
  b: {
    c: 20,
  },
};
let newObj = JSON.parse(JSON.stringify(obj2));
obj2.b.c = 30;

console.log(obj2); // { a: 10, b: { c: 20 } }
console.log(newObj); // { a: 10, b: { c: 20 } }

/*
What is deepcopy and shallow copy and how we can do it ?

Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy
 of the values in the original object. If any of the fields of the object are references to other objects,
  just the reference addresses are copied i.e., only the memory address is copied.

A Shallow copy of the object can be done using object.assign()

A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields.
A deep copy occurs when an object is copied along with the objects to which it refers.
A Deep copy of the object can be done using JSON.parse(JSON.stringify(object)).



 Diagrammatically Understanding of :- 
 Shallow Clone 
  original object              Cloned object
            |                      |
               Reference object
             
  Deep Copy 
  original object             cloned object
      |                            |
 Reference object             cloned reference
*/

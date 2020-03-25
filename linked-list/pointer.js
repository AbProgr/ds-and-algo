// a code snippet to demonstrate the concept of pointer or pass by ref in JS
// this is heavily used in linked list implementation as all insert/delete alter this pointers only

// create two variables that point to same object
const obj1 = { a: true };
const obj2 = obj1;

// modify one of the objects
// this action updates the actual value which both variables point/refer to
obj1.a = 15;

// delete one of the objects
delete obj1;

// log the other object
// JS just garbage collects the deleted object and has no impact on the other object
console.log(obj2);

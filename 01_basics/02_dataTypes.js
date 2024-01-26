"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3
    +
     3) // code readability should be high

console.log("Hitesh") // this is More Readable


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique


// object

console.log(typeof undefined); // undefined  ***********
console.log(typeof null); // object     ******


let example1 = null;
let example2; // Implicitly undefined

console.log(typeof example1); // "object"
console.log(typeof example2); // "undefined"

console.log(example1 === null); // true
console.log(example2 === undefined); // true

/*

Difference between Null and undefined

1. Definition:
null: It is a value that represents the intentional absence of any object value. It is a primitive value.
undefined: It represents the uninitialized or undefined value, usually the default value assigned to variables that have been declared but not initialized.
2. Type:
null: It is of type object.
undefined: It is of type undefined.
3. Assignment:
null: You can explicitly set a variable to null to indicate that it has no value or is empty.
undefined: It often indicates that a variable has been declared but not yet assigned a value.
4. Object Property:
null: It can be explicitly assigned to an object property to indicate the absence of a value.
undefined: If you try to access an object property that doesn't exist, the result is undefined.
5. Function Return:
null: A function can explicitly return null to indicate a lack of a meaningful result.
undefined: If a function does not explicitly return a value, it implicitly returns undefined.
6. Variable Initialization:
null: You can assign null to a variable to explicitly indicate that it has no value.
undefined: Variables that are declared but not initialized are automatically assigned the value undefined.
7. Equality Check:
null: It is a specific value that can be checked for using strict equality (===).
undefined: It is a global variable that represents the primitive value undefined.
8. Use Cases:
null: Often used to represent the absence of an object or as a placeholder for an object.
undefined: Typically indicates that a variable has been declared but not assigned a value.
9. Default Value:
null: You can explicitly set a variable to null as a default value.
undefined: Variables that are declared without an initial value are automatically assigned undefined.
10. Checking Existence:
null: You can check for null using strict equality (===) or loose equality (==).
undefined: You can check for undefined using strict equality (===) or loose equality (==).

*/

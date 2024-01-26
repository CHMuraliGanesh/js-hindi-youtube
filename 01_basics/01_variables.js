const accountId = 144553  // its constant type
let accountEmail = "hitesh@google.com" // *varaible can declare using let,var --> but its better use let type
var accountPassword = "12345" //! not recommended to use var type in JavaScript

accountCity = "Jaipur" //?  even if we dont provide type in JavaScript by default it will provide memory in JavaScript
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

//  !Prefer not to use var
// !because of issue in block scope and functional scope



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  /*
 ^ using console.table we can log multiple values at once
 */


/*
In JavaScript, var, let, and const are used to declare variables,
but they differ in terms of scope, hoisting, and mutability.
Here's a comprehensive guide on the differences between var, let, and const:

&1. Scope:
^var: Function-scoped. Variables declared with var are hoisted to the top of their scope.
^let: Block-scoped. Variables declared with let are hoisted but are not initialized until
    ^ the actual declaration statement is encountered.
^const: Block-scoped. Like let, but the value of a const variable cannot be reassigned.

&2. Hoisting:
^var: Hoisted to the top of the function or global scope and can be used before the declaration.
^let: Hoisted to the top of the block scope, but not initialized until the declaration statement is encountered.
^const: Similar to let, hoisted to the top of the block scope, but not initialized until the declaration statement is encountered.

&3. Reassignment:
^var: Can be redeclared and reassigned. ****
^let: Can be reassigned but not redeclared in the same scope.
^const: Cannot be redeclared or reassigned after initialization.

&4. Initialization:
^var: Variables are automatically initialized with undefined during hoisting.
^let: Variables are hoisted but not initialized until the declaration statement is reached. Accessing them before initialization results in a ReferenceError.
^const: Variables must be initialized during declaration, and trying to access them before initialization results in a ReferenceError.

&5. Global Object Property:
^var: Variables declared with var become properties of the global object (window in browsers).
^let and const: Do not become properties of the global object.

&6. Use Cases:
^var: Legacy, rarely used due to its lack of block scope and hoisting quirks. Avoid using var in modern JavaScript.
^let: Used when variable reassignment is needed within a block scope.
^const: Used for values that should not be redefined, providing a form of immutability.

*/

var x = 10;
if (true) {
  var x = 20; // Same variable x is used
}
console.log(x); // Outputs 20


let y = 10;
if (true) {
  let y = 20; // Separate variable y is used within the block
}
console.log(y); // Outputs 10

const z = 10;
// z = 20; // Error: Assignment to a constant variable
console.log(z); // Outputs 10


//In modern JavaScript, it's generally recommended to use let and const over var due to their block-scoping behavior
//and more predictable behavior. Use let when variable reassignment is needed, and use const when the variable should not be reassigned.
// A function expression is created when a function is defined inside an expression.
// Function expressions can be named or anonymous.

// syntax:
// const functionName = function(parameters) {
//   // function body
// };

// key features of function expressions
// 1. Function expressions can be stored in variables, arrays, or objects.
// 2. They can be passed as arguments to other functions (callbacks).
// 3. They are not hoisted, meaning they cannot be called before they are defined.
// iife (immediately invoked function expression)is a function expression that is executed immediately
//  after it is defined.
// anonymous function expression:
const sayHello = function(name) {
    console.log("Hello, " + name + "!");
}
sayHello("Afdel");

// named function expression:
const sayHello2 = function greet(name) {
    console.log("Hello, " + name + "!");
}   
sayHello2("Afdeleee");

// stroring function expression in an object:
const math = {
    add: function(a, b) { //(a,b) are parameters
        return a + b;
    }
}
console.log(math.add(2, 3)); // (2,3) are arguments


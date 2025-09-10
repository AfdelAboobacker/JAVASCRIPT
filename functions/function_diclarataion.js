// function declaration is one of the ways to define a function in JavaScript.
// syntax: 
// function functionName(parameters) {
//   // function body
// }       
// closure: A closure is a function that has access to its own scope,
//  the outer function's scope, and the global scope.
// key features of function declaration
// arrow functions do not have their own 'this' context, 
// they inherit 'this' from the parent scope. 
function graet(name) {
    console.log("Hello, " + name + "!");
    
}       
greet("Afdel");


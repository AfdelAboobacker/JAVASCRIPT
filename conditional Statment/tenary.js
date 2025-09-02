//  tenary is a short hand of if else statement
const prompt = require("prompt-sync")();

let age = prompt("enter your age:");   
let result = (age >= 18) ? "you are adult" : "you are not adult";
console.log(result);    

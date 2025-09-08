// function which are passed as an argument to another function.
// handle asynchronous operations.
// avoid blocking code execution.

function greet(name) {
  console.log(`hello ${name}`);
}

// this function takes another function (callback)as a parameter.
function getUserInput(callback) {
    const name = "del";
    callback(name); 
}
getUserInput(greet); 

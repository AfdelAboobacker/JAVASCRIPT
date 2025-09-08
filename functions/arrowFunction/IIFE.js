// IIFE(immediately invoked function expression)

// key features of IIFE
// 1.data privacy: variables inside IIFE are not accessible from outside
// 2.closure: IIFE creates a new scope, useful for avoiding variable conflicts
// 3.immediate execution: IIFE runs as soon as it is defined

(function() {
    console.log("hello world!"); // Output: Hello, World!
})();
// tolocalstring is used to return a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and are separated by a locale-specific string (such as a comma ",")
// different from toString method is that it takes into account the locale of the environment.
let arr=[1,2,3,4,5];    
let str=arr.toLocaleString("usd ");                           
console.log(str);
console.log(typeof str);           
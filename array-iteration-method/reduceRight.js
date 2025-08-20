// same as as reduce but start from end of the array
let number = [10, 20];
let result = number.reduceRight((acc, curr) => acc - curr, 10);
console.log(result);


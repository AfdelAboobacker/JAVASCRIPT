// flattens nested array
const nested = [1, [2, 3, [4, 5]]];
let flat1 = nested.flat(1);
let flat2 = nested.flat(2);
console.log(nested);
console.log(flat1);
console.log(flat2);

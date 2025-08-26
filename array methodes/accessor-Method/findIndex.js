// finINdex is used to return the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
let arr=[1,2,3,6,8,11,45,60];
let found=arr.findIndex(x=>x>10);
console.log(found);

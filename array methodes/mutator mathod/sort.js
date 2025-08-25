// sort()-sort elements of an array in acending or disending order
let num = [10, 1, 21, 2];
num.sort();
console.log(num);

// numeric sort ascending order

let number = [4, 2, 5, 3, 1];
console.log(number);

number.sort((a, b) => a - b);
console.log("ascending order:", number);

// numeric sort discending order
let numbers = [4, 2, 5, 3, 1];
console.log(numbers);

numbers.sort((a, b) => b- a);
console.log("discending order:", numbers);

// by defualt string sort ascending order(alphabetic(a,b,c))
 let fruits=['banana','apple','dates','cherry'];
 console.log('original:',fruits);
 fruits.sort();
 console.log('ascending:',fruits);
 
// string sort discending order(alphabetic(c,b,a))
 let fruits1=['banana','apple','dates','cherry'];
 console.log('original:',fruits1);
 fruits1.sort((a,b)=>b.localeCompare(a));
 console.log('discending:',fruits1);
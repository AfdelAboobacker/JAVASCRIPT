const person = { name : `Saran`, age : 20, country : `India`};

// basic structuring.

const {name,age} = person;
console.log(name);
console.log(age);

// rename variables.

const {country : nation} = person; // renaming country as nation taking from `person` object.
console.log(nation);

// default value.

const {gender = `male`} = person;
console.log(`gender is :`, gender);


console.log(`person..`, person);

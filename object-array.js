// object array is an array of objects.
const students = [
{name: "afdel", age:23},
{name: "lisan", age:24},
{name: "Salman", age:25}
];

// looping through the array of objects

students.forEach(student => {
    console.log(`${student.name} is ${student.age} years old`);});
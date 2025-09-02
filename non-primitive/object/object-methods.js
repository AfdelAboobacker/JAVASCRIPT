//you can store function inside an object-these are called methods
const car={
    brand: 'Toyota',
    start: function() {
        console.log('Car started');
    }
}
car.start(); // Output: Car started
// this keyword 
const person = {
    name: 'lisan',
age:20,greet: function() {
    console.log(`hello, my name is ${this.name} and my age is ${this.age}`);
}
}
person.greet(); 
// one class cn inherit properties and methods from another class

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
  
}
let dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Rex barks.
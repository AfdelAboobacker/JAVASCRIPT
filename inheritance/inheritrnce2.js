class vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  Buy() {
    console.log(
      `${this.name} by ${this.maker} with engine ${this.engine} is bought`
    );
  }
}
class car extends vehicle {
  constructor(name, maker, engine, topSpeed) {
    super(name, maker, engine);
    this.topSpeed = topSpeed;
  }
  Buy() {
    console.log(
      `${this.name} by ${this.maker} with engine ${this.engine} and top speed of ${this.topSpeed} is bought`
    );
  }
}
let car1 = new car("zonda lha", "pagani", "6.0L V12", "563km/h");
car1.Buy();

class pickup extends vehicle {
  constructor(name, maker, engine, loadCapacity) {
    super(name, maker, engine);
    this.loadCapacity = loadCapacity;
  }
  Buy() {
    console.log(
      `${this.name} by ${this.maker} with engine ${this.engine} and load Capacity of ${this.loadCapacity} is bought`
    );
  }
}
let pickup1 = new pickup(
  "2024 RAM 3500",
  "RAM",
  "6.7L I6 Turbo Diesel",
  "3484kg"
);
pickup1.Buy();

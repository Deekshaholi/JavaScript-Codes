function Car() {
    this.color = "Red";
};

// add property that already exists
Car.prototype.color = "Blue";

// add a new property
Car.prototype.wheels = 4;

const c1 = new Car();

console.log(`The car's color is ${c1.color}.`); 
console.log(`The car has ${c1.wheels} wheels.`);
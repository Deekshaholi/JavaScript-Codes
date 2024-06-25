// person object
const person = {
    name: "John",
    age: 30,

    // method
    introduce: function () {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
};

// access the introduce() method
person.introduce();


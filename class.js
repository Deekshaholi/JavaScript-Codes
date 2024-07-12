
class Employee {
    // class constructor to initialize the 'name' and 'salary' properties
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    // method to display a message
    call() {
        console.log(`Hello, my name is ${this.name} and I am ${this.salary} years old.`);
    }
}

// create two instances 
let emp1 = new Employee("Harsh", 30000);
let emp2 = new Employee("Jay", 43000);


emp1.call();
emp2.call();
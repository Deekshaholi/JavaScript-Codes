// parent class
class Employee { 
    constructor(name) {
        this.name = name;
    }

    call() {
        console.log(`Hey ${this.name}`);
    }
}

// inheriting parent class
class Manager extends Employee {
    constructor(name){
    console.log("Glad to meet");
    super(name);

    }
}

let Manager1 = new Manager('Sachin');
Manager1.call();
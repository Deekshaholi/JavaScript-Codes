class Employee { 
    constructor(name) {
        this.name = name;
        this.age = 45;
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
    this.age = 60;
    }
    call(){
    console.log(`Hey Manager ${this.name}.`)
        console.log("age:" +this.age);

    }
}

let M = new Manager('Sachin');
M.call();
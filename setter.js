const student = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); 

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); 
// outer object student
const student = {
    name: "John",
    age: 20,

    // contains another object marks
    marks: {
        science: 70,
        math: 75
    }
};

// display student
console.log(student);
console.log(typeof(student));
console.log(typeof(student.marks));
console.log(student.marks.science);



const student = {
    "name":"Rohit",
    "age":20,
    "grade":9.25
};

console.log(`info before updating grades : `);
console.log(student);
// method to update student grade
let newGrade = 9.1

function updateGrade(student,newGrade){
    student.grade = newGrade;
}

updateGrade(student,newGrade);
console.log(`info after updating grades : `);
console.log(student);
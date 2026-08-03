console.log("Hello World")
let student_name = "mokshitha"
console.log("student name is : " +student_name)
let student_age = 20
let course_name = "python Full Stack"
console.log("student age is: " +student_age, "course name is : " +course_name)
let fee = 10000
let discount = 10
let discounted_fee = fee - (fee *discount / 100)
console.log("Discounted fee is: " +discounted_fee)
let age = 18
age=20
if(age>=18){
    console.log("Eligible for admission ")
}
else{
    console.log("Not eligible for admission")
}
for(let i=1; i<=5; i++){
    console.log("Iteration number: " + i)
}
const pi = 3.14
console.log("value of pi is: " + pi)
let student = {
    name: "Mokshitha",
    age: 20,
    course: "python Full Stack",
    fee: 10000,
}
console.log("student details: " , student)

function greetstudent(name){
    console.log("Hello " + name + ",Welcome to NRIIT Learning Management System")
}
greetstudent(student_name)
function squareNumber(num) {
    return num * num;
}
x=squareNumber(5);
console.log("square of 5 is: ",x)
//write a function to odd or even number 
function checkOddEven(num) {
    if (num % 2 == 0){
        return "Even";
    } else{
        return "Odd";
    }
}
console.log("check if 7 is odd or even: ", checkOddEven(7));

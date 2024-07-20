//! Task 1

let personName = "Aryan"
let age = 21

console.log(`Hey, I'm ${personName} my age is ${age}`);

//! Task 2 

let str = `lorem 
ipsum`;

console.log(str);

//! Task 3 

let arr = [1,2,3,4,5,6]
let [first, second] = arr
console.log(first);
console.log(second);

//!Task 4 

let obj = {
    Title: "xtz",
    Author: "Afw"
}
let {Title, Author} = obj
console.log(Title);
console.log(Author);

//! Task 5 

let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];
console.log(newArray);

//! Task 6 

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7));

//! Task 7 

function func(num1,num2 = 1){
    return num1*num2
}
console.log(func(6,5));
console.log(func(2));

//! Task 8 

let name = "Aryan";
let age1 = 22;

let person = {
    name,
    age1,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age1} years old.`);
    }
};
console.log(person);
person.greet();

//! Task 9 

let propName1 = "firstName";
let propName2 = "lastName";

let personInfo = {
    [propName1]: "John",
    [propName2]: "Doe"
};
console.log(personInfo);
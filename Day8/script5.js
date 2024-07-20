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

let propName1 = "firstName";
let propName2 = "lastName";

let personInfo = {
    [propName1]: "John",
    [propName2]: "Doe"
};
console.log(personInfo);
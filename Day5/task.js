//! Task 1 

function number(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

number(2)

//! Task 2

function square(x) {
    return x * x
}
console.log(square(5));

//! Task 3 

function maximum(num1, num2) {
    if (num1 > num2) {
        console.log("Num1 is greater than num2");
    } else {
        console.log("Num2 is gretaer than num1");
    }
}
maximum(5, 9)

//! Task 4 

function concat1(str1) {
    return str1
}

function concat2(str2) {
    return str2
}

console.log(concat1("Hello ") + concat2("World"));

//! Task 5 

let sum = (x, y) => {
    return x + y
}
console.log(sum(4, 6))

//! Task 6

const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter("hello", "e")); 
console.log(containsCharacter("world", "a"));
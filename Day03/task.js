//! Task 1 

let a = 5;

if (a > 0) {
    console.log("Number is positive");
} else if (a < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is Zero");
}

//! Task 2

let ageOfPerson = 19;

if (ageOfPerson > 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//! Task 3

let num1 = 6;
let num2 = 5;
let num3 = 4;

if (num1 > num2) {
    console.log("Num1 is greater");
    if (num2 > num3) {
        console.log("Num2 is greater");
    } else {
        console.log("Num3 is greater");
    }
} else {
    if (num2 > num3) {
        console.log("Num2 is greater");
    } else {
        console.log("Num3 is greater");
    }
}

//! Task 4 

let day = 6;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Wednesday");
        break;
    case 7:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}


//! Task 5

let grade = 'F';

switch (grade) {
    case 'A':
        console.log("Grade is A");
        break;
    case 'B':
        console.log("Grade is B");
        break;
    case 'C':
        console.log("Grade is C");
        break;
    case 'D':
        console.log("Grade is D");
        break;
    case 'F':
        console.log("Grade is F");
        break;
    default:
        break;
}

//! Task 6 

let g = 5;
let number = (g%2==0) ?"Even" : "Odd"
console.log(number);

//! Task 7 

let year = 2004;

if ((year % 4 == 0 && year % 100 !=0) || year % 400 == 0){
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
// //! Task 1

// let arr = Array(1, 2, 3, 4, 5)
// console.log(arr); //* output: [1,2,3,4,5]

// //! Task 2 

// console.log(arr[0]); //* Output: 1
// console.log(arr[4]); //* Output: 5

// //! Task 3 

// arr.push(6);
// console.log(arr); //* Output: [1,2,3,4,5,6]

// //! Task 4
 
// arr.pop();
// console.log(arr); //* Output: [1,2,3,4,5]

// //! Task 5 

// arr.shift(7);
// console.log(arr); //* Output: [2,3,4,5]

// //! Task 6 

// arr.unshift(6);
// console.log(arr); //* Output: [6,2,3,4,5]

//! Task 7

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);  //* Output: [2,4,6,8,10]

//! Task 8
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); //* Output: [2,4]

//! Task 9
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfNumbers); //* Output: 15
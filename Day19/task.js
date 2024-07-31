//! Task 1

const text = "I love JavaScript. JavaScript is amazing!";
const matches = text.match(/JavaScript/g);
console.log(matches);

//! Task 2 

const text1 = "My phone number is 123-456-7890 and my zip code is 98765.";
const matches1 = text1.match(/\d+/g);
console.log(matches1);

//! Task 3 

const text2 = "Here are some Capital Words like Apple and Banana.";
const matches2 = text2.match(/\b[A-Z][a-z]*\b/g);
console.log(matches2);

//! Task 4 

const text4 = "The numbers are 42, 123, and 56789.";
const matches4 = text4.match(/\d+/g);
console.log(matches4);

//! Task 5 

const text5 = "Call me at (123) 456-7890 or (987) 654-3210.";
const matches5 = text5.match(/\((\d{3})\) (\d{3})-(\d{4})/g);
console.log(matches5);

//! Task 6 

const text6 = "Contact me at user@example.com or admin@domain.org.";
const matches6 = text6.match(/(\w+)@([\w\.]+)/g);
console.log(matches6);

//! Task 7 

const text7 = "Hello world! Welcome to regex.";
const match = text7.match(/^\b\w+\b/);
console.log(match ? match[0] : "No match");

//! Task 8 

const text8 = "This is the end word.";
const match1 = text8.match(/\b\w+\b$/);
console.log(match1 ? match1[0] : "No match"); 

//! Task 9 

const password = "Password1!";
const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
console.log(valid ? "Valid" : "Invalid"); 

//! Task 10 

const url = "https://www.example.com";
const valid1 = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(url);
console.log(valid1 ? "Valid" : "Invalid");

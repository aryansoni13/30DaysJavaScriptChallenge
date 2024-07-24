const num = [1, 2, 3, 4, 5, 6]

console.log("Using For loop");
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

console.log("Using forEach method");
num.forEach(num => console.log(num));
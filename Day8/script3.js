
let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];
console.log(newArray);

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7));
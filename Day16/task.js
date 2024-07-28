//! Task 1

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); //* Output: 120
console.log(factorial(3)); //* Output: 6
console.log(factorial(0)); //* Output: 1

//! Task 2

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); //* Output: 5
console.log(fibonacci(7)); //* Output: 13
console.log(fibonacci(10)); //* Output: 55

//! Task 3

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); //* Output: 15
console.log(sumArray([10, 20, 30])); //* Output: 60
console.log(sumArray([])); //* Output: 0

//! Task 4

function findMax(arr) {
    if (arr.length === 1) return arr[0];
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(findMax([1, 2, 3, 4, 5])); //* Output: 5
console.log(findMax([-1, -2, -3, -4, -5])); //* Output: -1
console.log(findMax([10, 20, 30, 40])); //* Output: 40

//! Task 5

function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); //* Output: "olleh"
console.log(reverseString("world")); //* Output: "dlrow"
console.log(reverseString("recursion")); //* Output: "noisrucer"

//! Task 6

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); //* Output: true
console.log(isPalindrome("hello")); //* Output: false
console.log(isPalindrome("madam")); //* Output: true

//! Task 7

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1; 

    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); //* Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); //* Output: -1
console.log(binarySearch([10, 20, 30, 40, 50], 30)); //* Output: 2

//! Task 8

function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2)); //* Output: 3
console.log(countOccurrences([5, 5, 5, 5, 5], 5)); //* Output: 5
console.log(countOccurrences([1, 2, 3, 4], 0)); //* Output: 0

//! Task 9 

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
inOrderTraversal(root); //* Output: 4 2 5 1 3

//! Task 10

function calculateDepth(node) {
    if (node === null) return 0;
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

const root1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
console.log(calculateDepth(root)); //* Output: 3

//! Task 1 

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

//TODO: Test Cases
console.log(twoSum([2, 7, 11, 15], 9)); //* OUTPUT: [0, 1]
console.log(twoSum([3, 2, 4], 6)); //* OUTPUT: [1, 2]
console.log(twoSum([3, 3], 6)); //*OUTPUT: [0, 1]


//! Task 2 

function reverseInteger(x) {
    const isNegative = x < 0;
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (isNegative) reversed *= -1;
    return (reversed > Math.pow(2, 31) - 1 || reversed < Math.pow(-2, 31)) ? 0 : reversed;
}

//TODO: Test cases
console.log(reverseInteger(123)); //* OUTPUT: 321
console.log(reverseInteger(-123)); //* OUTPUT: -321
console.log(reverseInteger(120)); //* OUTPUT: 21
console.log(reverseInteger(0)); //* OUTPUT:  0

//! Task 3 

function isPalindromeNumber(x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split('').reverse().join('');
}

//TODO:  Test cases
console.log(isPalindromeNumber(121)); //* OUTPUT: true
console.log(isPalindromeNumber(-121)); //* OUTPUT: false
console.log(isPalindromeNumber(10)); //* OUTPUT: false
console.log(isPalindromeNumber(1221)); //* OUTPUT: true

//! Task 4

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoSortedLists(l1, l2) {
    let dummy = new ListNode();
    let tail = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    tail.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function printLinkedList(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    console.log(result);
}

//TODO: Test cases
let l1 = createLinkedList([1, 2, 4]);
let l2 = createLinkedList([1, 3, 4]);
printLinkedList(mergeTwoSortedLists(l1, l2)); //* OUTPUT: [1, 1, 2, 3, 4, 4]

//! Task 5 

function isValidParentheses(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in map) {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

//TODO: Test cases
console.log(isValidParentheses("()")); //* OUTPUT: true
console.log(isValidParentheses("()[]{}")); //* OUTPUT: true
console.log(isValidParentheses("(]")); //* OUTPUT: false
console.log(isValidParentheses("([)]")); //* OUTPUT: false
console.log(isValidParentheses("{[]}")); //* OUTPUT: true

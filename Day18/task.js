//! Task 1

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log('Sorted array (Bubble Sort):', arr);
}

bubbleSort([64, 34, 25, 12, 22, 11, 90]);

//! Task 2 

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    console.log('Sorted array (Selection Sort):', arr);
}

selectionSort([64, 34, 25, 12, 22, 11, 90]);

//! Task 3 

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

const sortedArray = quickSort([64, 34, 25, 12, 22, 11, 90]);
console.log('Sorted array (Quick Sort):', sortedArray);

//! Task 4 

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log('Index of target (Linear Search):', i);
            return i;
        }
    }
    console.log('Target not found (Linear Search)');
    return -1;
}

linearSearch([64, 34, 25, 12, 22, 11, 90], 22);

//! Task 5 

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log('Index of target (Binary Search):', mid);
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log('Target not found (Binary Search)');
    return -1;
}

binarySearch([11, 12, 22, 25, 34, 64, 90], 22);

//! Task 6 

function countCharacterOccurrences(str) {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    console.log('Character counts:', charCount);
}

countCharacterOccurrences('hello world');

//! Task 7 

function longestUniqueSubstring(str) {
    let longest = 0;
    let start = 0;
    const seen = new Map();

    for (let end = 0; end < str.length; end++) {
        if (seen.has(str[end])) {
            start = Math.max(seen.get(str[end]) + 1, start);
        }
        seen.set(str[end], end);
        longest = Math.max(longest, end - start + 1);
    }

    console.log('Length of longest substring without repeating characters:', longest);
}

longestUniqueSubstring('abcabcbb');

//! Task 8 

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    console.log('Rotated array:', rotatedArray);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);

//! Task 9 

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i++]);
        } else {
            mergedArray.push(arr2[j++]);
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i++]);
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j++]);
    }

    console.log('Merged array:', mergedArray);
}

mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);

//! Task 10

function fibonacci(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log('Fibonacci sequence:', dp);
}

fibonacci(10);

//! Task 11

function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(capacity + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }

    console.log('Maximum value that can be obtained:', dp[capacity]);
}

knapsack([1, 2, 3], [60, 100, 120], 5);

//! Task 1

function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = merged.length;
  if (n % 2 === 0) {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  } else {
    return merged[Math.floor(n / 2)];
  }
}

//TODO: Test cases
console.log(findMedianSortedArrays([1, 3], [2])); //* Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); //* Output: 2.5

//! Task 2

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  const minHeap = [];
  const compare = (a, b) => a.val - b.val;

  for (const list of lists) {
    if (list) minHeap.push(list);
  }

  minHeap.sort(compare);

  const dummy = new ListNode(0);
  let tail = dummy;

  while (minHeap.length > 0) {
    minHeap.sort(compare);
    const node = minHeap.shift();
    tail.next = node;
    tail = tail.next;
    if (node.next) {
      minHeap.push(node.next);
    }
  }

  return dummy.next;
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

//TODO: Test cases
const lists = [
  arrayToList([1, 4, 5]),
  arrayToList([1, 3, 4]),
  arrayToList([2, 6]),
];
console.log(mergeKLists(lists));

//! Task 3

function trap(height) {
  if (height.length === 0) return 0;

  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let water = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}

//TODO: Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //* Output: 6

//! Task 4

function solveNQueens(n) {
  const results = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q")
        return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q")
        return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      results.push(board.map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack(0);
  return results;
}

//TODO: Test cases
console.log(solveNQueens(4)); //* Output: Array of solutions

//! Task 5

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];

  while (queue.length > 0) {
    const [word, level] = queue.shift();

    if (word === endWord) return level;

    for (let i = 0; i < word.length; i++) {
      const originalChar = word[i];
      for (let c = 97; c <= 122; c++) {
        const newChar = String.fromCharCode(c);
        if (newChar === originalChar) continue;
        const newWord = word.slice(0, i) + newChar + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}

//TODO: Test cases
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); //* Output: 5

//! Task 1

function groupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
}

//TODO: Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); //* OUTPUT: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])); //* OUTPUT: [[""]]
console.log(groupAnagrams(["a"])); //* OUTPUT: [["a"]]


//! Task 2

function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

//TODO: Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); //* OUTPUT: 3
console.log(lengthOfLongestSubstring("bbbbb")); //* OUTPUT: 1
console.log(lengthOfLongestSubstring("")); //* OUTPUT: 0

//! Task 3

function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * minHeight);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

//TODO: Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); //* OUTPUT: 49
console.log(maxArea([1,1])); //* OUTPUT: 1
console.log(maxArea([4,3,2,1,4])); //* OUTPUT: 16


//! Task 4

function threeSum(nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

//TODO: Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); //* OUTPUT: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,0,0,0])); //* OUTPUT: [[0,0,0]]
console.log(threeSum([1,2,-2,-1])); //* OUTPUT: []

//! Task 5

function groupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
}

//TODO: Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); //* OUTPUT: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])); //* OUTPUT: [[""]]
console.log(groupAnagrams(["a"])); //* OUTPUT: [["a"]]


console.log("practice 2");

// problems based on multiple pointers
// | Type               | Key Idea                 | Common Problems      |
// | ------------------ | ------------------------ | -------------------- |
// | Opposite Direction | Start & end              | Palindrome, pair sum |
// | Sliding Window     | Expand & shrink window   | Subarray, max sum    |
// | Fast & Slow        | Different speeds         | Cycle detection      |
// | Multiple (>2)      | Combine multiple indices | 3Sum, 4Sum           |
// | Partitioning       | Divide into sections     | Dutch flag problem   |
// | Merging            | Combine sorted arrays    | Merge sort           |

// opposite direction

// 1) valid palindrome

function checkPallindrome(str = "helleh") {
  if (typeof str !== "string" || str.length === 0) return null;
  // console.log(typeof str);

  // use the while to check the pallindrome
  let s = 0;
  let e = str.length - 1;

  while (s < e) {
    if (str[s] !== str[e]) return false;
    s++;
    e--;
  }

  return true;
}
// console.log(checkPallindrome());
// 2) 2sum in sorted array Input: arr = [1, 2, 3, 4, 6], target = 6

function twosum(arr = [1, 2, 3, 4, 6], target = 10) {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  // sorted array so we can compare the end and start check if no is greater than ,equal to or less than
  let s = 0;
  let e = arr.length - 1;

  while (s < e) {
    let sum = arr[s] + arr[e];
    if (sum === target) {
      return [arr[s], arr[e]];
    } else if (sum > target) {
      e--;
    } else {
      s++;
    }
  }

  // if it has complete the loop and not found the target return -1
  return -1;
}

// console.log(twosum());
// Given a character array, reverse it in-place using opposite pointers.
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseArr(arr = []) {
  // valid input check
  if (!Array.isArray(arr) || arr.length === 0) return null;
  // edge case only 1 character
  if (arr.length <= 1) return arr;

  // now opposite direction pointer approach ,swap the elements in place
  let s = 0;
  let e = arr.length - 1;
  while (s < e) {
    // swap
    [arr[s], arr[e]] = [arr[e], arr[s]];
    s++;
    e--;
  }

  return arr;
}

// console.log(reverseArr(["h", "e", "l", "l", "o"]));

// Given a sorted array (can have negative numbers), return a new array of squares in sorted order.
// Input: [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]

function squaresSorted(arr = [-4, -1, 0, 3, 10]) {
  if (!Array.isArray(arr)) return null;

  // opposite pointer
  let s = 0;
  let e = arr.length - 1;
  let k = arr.length - 1;
  let result = [];
  while (s <= e) {
    let num1 = Math.abs(arr[s]) ** 2;
    let num2 = Math.abs(arr[e]) ** 2;

    if (num1 > num2) {
      result[k] = num1;
      s++;
    } else {
      result[k] = num2;
      e--;
    }

    k--;
  }

  return result;
}

// console.log(squaresSorted());
//Container With Most Water
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

function containerwithmostwater(arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]) {
  if (!Array.isArray(arr)) return null;

  // most water means area based on low height and space

  let s = 0;
  let e = arr.length - 1;
  let maxArea = 0;
  while (s < e) {
    let area = Math.min(arr[s], arr[e]) * (e - s);
    if (area > maxArea) {
      maxArea = area;
    }
    if (arr[s] > arr[e]) {
      e--;
    } else {
      s++;
    }
  }

  // return area
  return maxArea;
}

console.log(containerwithmostwater());

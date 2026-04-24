console.log("linear search ,o(n) ,data can be sorted or unsorted both");
/*
Idea: Check each element one by one.

How it works:
Start from index 0
Compare each element with target
Stop when found or end reached

Time Complexity:
Best: O(1)
Worst: O(n)

Use case:
Small or unsorted data
*/

//1)find element index
let arr = [4, 2, 7, 1, 9];
let target = 11;
// Output: 2

function findElement(arr, target) {
  //o(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  // not found
  return -1;
}

// console.log(findElement(arr, target));
// 2. Count Occurrences
// Problem:
// Count how many times a number appears in the array.
// Example:
// Output: 3
let arr1 = [1, 2, 3, 2, 2, 5];
let target1 = 2;

function countOccurence(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}
// console.log(countOccurence(arr1, target1));

// 3. Find Minimum Element
// Problem:
// Find the smallest element in an array using linear search.

function minElement(arr) {
  let min = Infinity;
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// console.log(minElement([]));

// 4. First and Last Occurrence
// Problem:
// Return first and last index of a target.
// Example:
// Output: [1, 4]
let arr2 = [2, 4, 5, 4, 4, 7];
let target2 = 4;

function firstAndLastOcc(arr, target) {
  let firstIndex = -1;
  let lastIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      firstIndex !== -1 ? (lastIndex = i) : (firstIndex = i);
    }
  }

  return [firstIndex, lastIndex];
}
// console.log(firstAndLastOcc(arr2, target2));

// 5. Find Missing Number
// Problem
// Array contains numbers from 1 to n, one number is missing. Find it using linear search logic
// Example:
// Output: 3
let arr3 = [1, 2, 4, 5];

function findMissingNum(arr) {
  // arr contains 1 to n
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i + 1);
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
}

console.log(findMissingNum(arr3));

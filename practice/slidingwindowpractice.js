"use strict";
console.log("sliding window practice");
/*
🔹 1. Fixed Size Sliding Window
Window size is constant (k)
✅ When to use:
Subarray/substring of size k
Maximum / minimum sum of size k
🧠 Idea:
Add next element
Remove previous element
📌 Example problems:
Maximum sum subarray of size k
First negative number in every window
Count distinct elements in every window

🔹 2. Variable Size Sliding Window (Dynamic Window)

Window size expands and shrinks

✅ When to use:
Condition based (sum, length, unique chars)
Longest / smallest subarray problems
🧠 Idea:
Expand window (right++)
Shrink window (left++) when condition breaks
📌 Example problems:
Longest substring without repeating characters
Smallest subarray with sum ≥ k
Longest substring with k unique characters

🔹 3. Sliding Window with HashMap / Frequency Counter
Uses map/object to track counts
✅ When to use:
Character frequency
Anagrams
Distinct elements
🧠 Idea:
Maintain frequency map
Update while sliding
📌 Example problems:
Count occurrences of anagrams
Longest substring with at most k distinct characters
Minimum window substring

🔹 4. Sliding Window with Two Pointers
Uses left and right pointers explicitly
✅ When to use:
Sorted arrays (sometimes)
Subarray conditions
🧠 Idea:
Move pointers based on condition
📌 Example problems:
Pair with given sum (variation)
Remove duplicates
Container with most water (hybrid case)
*/

// type 1
// Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.
// 📥 Input:
// arr = [2, 1, 5, 1, 3, 2]
// k = 3

function maxSumSubarray(arr = [2, 1, 5, 1, 3, 2], size = 3) {
  if (!Array.isArray(arr)) return null;

  if (arr.length < size) return -1;

  // create a window of fixed size
  let max = 0;

  for (let i = 0; i < size; i++) {
    // console.log(arr[i], "fixedwindow");
    max = max + arr[i];
  }
  let initalsub = max;
  // console.log(max);

  for (let j = size; j < arr.length; j++) {
    // console.log(arr[j]);
    initalsub = initalsub - arr[j - size] + arr[j];
    if (initalsub > max) {
      max = initalsub;
    }
  }

  return max;
}
// console.log(maxSumSubarray());

/*

📝 Problem Statement:
Given an array of integers and a number k, find the first negative number in every contiguous subarray (window) of size k.
If a window does not contain a negative number, return 0 for that window.
📥 Input:
arr = [12, -1, -7, 8, -15, 30, 16, 28]
k = 3
📤 Output:
[-1, -1, -7, -15, -15, 0]
*/

function firstnegativeInEverysubarray(
  arr = [12, -1, -7, 8, -15, 30, 16, 28],
  size = 3,
) {
  if (!Array.isArray(arr)) return null;
  if (arr.length < size) return -1;
  // we have to return a [-1,-1,-7,-15,-15,0] of all first negative number in continous subarry
  let result = [];
  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      queue.push(i);
    }

    // remove element which are not inside the window
    // Step 2: Remove elements out of current window
    if (queue.length && queue[0] < i - size + 1) {
      queue.shift();
    }

    // Step 3: Window is formed
    if (i >= size - 1) {
      if (queue.length) {
        result.push(arr[queue[0]]);
      } else {
        result.push(0);
      }
    }
  }

  return result;
}

// console.log(firstnegativeInEverysubarray());
// type 2 ,variable slding window , expand and shrink
// generic pattern
// function slidingWindow(arr) {
//   let left = 0;
//   let result = 0; // or min/max/length
//   let temp = 0;   // sum / count / map

//   for (let right = 0; right < arr.length; right++) {
//     // Step 1: Expand window
//     temp += arr[right]; // depends on problem

//     // Step 2: Shrink window (IMPORTANT)
//     while (condition_breaks) {
//       temp -= arr[left];
//       left++;
//     }

//     // Step 3: Update result
//     result = Math.max(result, right - left + 1);
//   }

//   return result;
// }

/*
Given an array of positive integers and a number k, find the length of the longest contiguous subarray whose sum is less than or equal to k.
Input:
arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
k = 8
Output:
3
*/

//
function longestcontigousSum(arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0], k = 8) {
  // check if its array
  if (!Array.isArray(arr)) return null;

  //expand and shrink concept
  let start = 0;
  let result = 0;
  let sum = 0;
  for (let right = 0; right < arr.length; right++) {
    // expand
    sum += arr[right];
    // shrink
    while (sum > k) {
      sum -= arr[start];
      start++;
    }

    result = Math.max(result, right - start + 1);
  }

  return result;
}
// console.log(longestcontigousSum());

// arr = [1, 2, 3, 4, 5]
// k = 7
// // Output: 3  → [1,2,3] or [2,3,2]

function longestSubarray(arr = [1, 2, 3, 4, 5], k = 7) {
  if (!Array.isArray(arr)) return null;
  // subarray , sliding window with variable size
  let left = 0;
  let sum = 0;
  let maxlen = 0;
  let startindex = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    // shrink
    while (sum > k) {
      sum -= arr[left];
      left++;
    }

    // length
    if (right - left + 1 > maxlen) {
      maxlen = right - left + 1;
      startindex = left;
    }
  }

  return arr.slice(startindex, startindex + maxlen);
}
console.log(longestSubarray());

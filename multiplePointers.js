"use strict";

/*
countUniqueValues
Implement a function called countUniqueValues,
which accepts a sorted array, and counts the
unique values in the array. There can be negative
numbers in the array, but it will always be sorted.
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/
// solve using the two pointer approach
//get all the unique elements in the start of the array
function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  // counter
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues2([-1, -1, 1, 1, 2, 3, 3, 4, 5]));

/*
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, key) {
  //using muliple pointer
  if (arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;
  let ans = [];
  // [1,3,3,5,6,7,10,12,19],8

  // logic
  while (left < right) {
    console.log(left, right);

    let avg = (arr[left] + arr[right]) / 2;
    console.log(avg);

    if (avg === key) {
      return true;
    } else if (avg > key) {
      right--;
    } else {
      left++;
    }
  }
  // return the boolean
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5));

// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false

// console.log(averagePair([], 4)); // false

/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

function isSubsequence(str1, str2) {
  // check the lenght of string 1
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    console.log("i", i, str1[i]);
    console.log("j", i, str2[j]);

    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  // return boolean
  return false;
}

// console.log(isSubsequence("sing", "sting"));
/*
Frequency Counter / Multiple Pointer - findPair
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.
findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true
findPair([1,2,3], 0) // false
Part 1 - solve this with the following requirements:
Time Complexity Requirement - O(n)
Space Complexity Requirement - O(n)
Part 2 - solve this with the following requirements:
Time Complexity Requirement - O(n log n)
Space Complexity Requirement - O(1)
*/

function pairDifference(arr, target) {
  // unsorted array
  // n can be 0 or a positive number or negative
  // for n ==0
  if (target === 0) {
    let seen = new Set();
    for (let num of arr) {
      if (seen.has(num)) {
        return true;
      } else {
        seen.add(num);
      }
    }
  }

  // for n > 0 orles than 0
  let setvals = new Set(arr);
  for (let val of arr) {
    if (setvals.has(val + target) || setvals.has(val - target)) {
      return true;
    }
  }

  // return true or false based on difference
  return false;
}

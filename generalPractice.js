"use strict";
/*
2️⃣ Count Character Frequency
Problem: Return frequency of each character in a string.
Input:
"aabccc"

Output:
{ a: 2, b: 1, c: 3 }
 */

function characterCountFreq(str) {
  let freqencycount = {};
  // note frequncy has a o(n)
  for (let i = 0; i < str.length; i++) {
    freqencycount[str[i]]
      ? freqencycount[str[i]]++
      : (freqencycount[str[i]] = 1);
  }
  return freqencycount;
}

// console.log(characterCountFreq("aabccc"));

/*
3️⃣ First Non-Repeating Character

Input:
"aabbcdde"

Output:
"c"
*/

function nonRepeatinCharacter(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] ? freq[str[i]]++ : (freq[str[i]] = 1);
  }

  // loop over the freq
  for (let key in freq) {
    if (freq[key] === 1) {
      return key;
    }
  }
}
// better approach
function nonRepeatingCharacter(str) {
  const freq = {};

  // Step 1: Count frequency
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Step 2: Check in original order
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null; // if no non-repeating character
}
// console.log(nonRepeatinCharacter("aabbcdde"));

/*
8️⃣ Majority Element (> n/2 times)

Input:
[3,3,4,2,3,3,3]

Output:
3
*/

function majorityElement(arr) {
  // freq count
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
      if (freq[arr[i]] > (arr.length - 1) / 2) return arr[i];
    } else {
      freq[arr[i]] = 1;
    }
  }
  return null;
}

// console.log(majorityElement([3, 3, 4, 2, 3, 3, 3]));
/*
🔹 Medium Level
1️⃣1️⃣ Group Anagrams

Input:
["eat","tea","tan","ate","nat","bat"]

Output:
[
  ["eat","tea","ate"],
  ["tan","nat"],
  ["bat"]
]

*/

function bubblesortString(str) {
  // let arr = str.split("");
  // Manually convert string to array
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }

  // return arr.join("");
  // Manually convert array back to string ,we concat
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

function groupAnagrams(arr) {
  // for anagaram we use freq counter
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    // sort the str and compary with with the object key

    // let sorted = arr[i].split("").sort().join("");
    let sorted = bubblesortString(arr[i]);
    console.log(sorted);

    if (freq[sorted]) {
      freq[sorted].push(arr[i]);
    } else {
      freq[sorted] = [arr[i]];
    }
    //
  }
  console.log(freq);
  // let result = [];
  // for (let key in freq) {
  //   result.push(freq[key]);
  // }

  // return Object.values(freq);

  // Manually extract values
  let result = [];
  for (let key in freq) {
    result[result.length] = freq[key];
  }
  return result;

  // return the arr of anagram
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/*
1️⃣2️⃣ Find All Anagrams in a String

Input:
s = "cbaebabacd"
p = "abc"

Output:
[0, 6]

1️⃣3️⃣ Longest Substring Without Repeating Characters
Input:
"abcabcbb"

Output:
3 // "abc"

1️⃣4️⃣ Ransom Note

Input:
ransomNote = "aa"
magazine = "aab"

Output:
true

1️⃣5️⃣ Intersection of Two Arrays (with frequency)

Input:
nums1 = [1,2,2,1]
nums2 = [2,2]

Output:
[2,2]

1️⃣6️⃣ Top K Frequent Elements

Input:
nums = [1,1,1,2,2,3]
k = 2

Output:
[1,2]

1️⃣7️⃣ Sort Characters By Frequency

Input:
"tree"

Output:
"eetr"
(or "eert")

1️⃣8️⃣ Subarray Sum Equals K
Input:
nums = [1,1,1]
k = 2
Output:
2
*/

/*
1️⃣6️⃣ Top K Frequent Elements

Input:
nums = [1,1,1,2,2,3]
k = 2

Output:
[1,2]

*/

function kfrequenctElements(arr, k) {
  // create a freq counter
  let freq = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
      if (freq[arr[i]] >= k) {
        result.push(arr[i]);
      }
    } else {
      freq[arr[i]] = 1;
    }
  }

  console.log(freq, result);

  // o/p should return the arr of k times repeated elements
  return result;
}

// console.log(kfrequenctElements([1, 1, 1, 2, 2, 3], 2));

/*
Sum Zero (Sorted Array)
Given a sorted array, find first pair whose sum is 0.
Example: [-4,-3,-2,-1,0,1,2,5]
*/

function sumZero(arr) {
  if (arr.length <= 1) return arr;
  // use multiple pointer approach
  let s = 0;
  let e = arr.length - 1;
  let target = 0;

  // -4+5 =-1
  // -4 +2 = -2

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

  return [];
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
/*
. Count Unique Values

Problem:
Count unique values in a sorted array.

Input:

[1,1,1,2,2,3]
*/

function countUniqueValues(arr) {
  if (arr.lenght === 0) return arr;
  // count means comparision , mulitple pointers as it is a sorted array
  // slow and fast pointers 0(n)
  let i = 0; //slow pointer
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 2, 2, 3]));
/*
Valid Palindrome

Problem:
Check if a string is palindrome.

Input:

"madam"

Output:

true
*/

function validPalindrome(str) {
  // mulitple pointer s and e
  // if s and e are equal increase both and return false if not equal at the end of the loop if not false then return the true

  let s = 0;
  let e = str.length - 1;
  while (s < e) {
    console.log(str[s], str[e]);

    if (str[s] !== str[e]) {
      return false;
    } else {
      s++;
      e--;
    }
  }
  return true;
}

// console.log(validPalindrome("madam"));
/*
🟡 4. Two Sum II (Sorted Array)
Problem:
Return 1-based indices of two numbers that sum to target.
Input:
numbers = [2,7,11,15]
target = 9
Output:
[1,2]
*/

function twoSum(arr, target) {
  // muliple pointers
  let s = 0;
  let e = arr.length - 1;
  // note return 1 based pointer

  while (s < e) {
    let sum = arr[s] + arr[e];
    if (sum === target) {
      return [s + 1, e + 1];
    } else if (sum > target) {
      e--;
    } else {
      s++;
    }
  }

  return [];
}

// console.log(twoSum([2, 7, 11, 15], 9));
/*
🟡 Move Zeroes

Input:

[0,1,0,3,12]

Output:

[1,3,12,0,0]
*/

function moveZero(arr) {
  // slow and fast pointer 0(n)
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    console.log((arr[i], arr[j]));

    if (arr[i] < arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  return arr;
}

// console.log(moveZero([0, 1, 0, 3, 12]));
/*
🟡 5. Remove Duplicates from Sorted Array

Problem:
Remove duplicates in-place and return new length.

Input:

[0,0,1,1,1,2,2,3,3,4]

Output:
5
(Array becomes [0,1,2,3,4,...])
*/

function removeDublicates(arr) {
  //use a slow and fast pointer approach with slow pointing the index of unique element
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // return the lenght of unquie items in same array
  return i + 1;
}
// console.log(removeDublicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
/*
10. Squares of Sorted Array

Input
[-4,-1,0,3,10]
o/p
[0,1,9,16,100]

*/
function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        swap = true;
      }
    }
    if (!swap) return arr;
  }
  console.log(arr);

  return arr;
}

function squaresOfSortedArrray(arr) {
  // loop get a absoulte value and square and store in a new array and return a sorted version of it
  let result = [];
  // step 1 get the squares
  for (let value of arr) {
    let newValue = Math.abs(value);
    let square = newValue * newValue;
    result.push(square);
  }

  // step 2 get the sorted version of squares
  let sortedresult = bubblesort(result);

  return sortedresult;
}

// console.log(squaresOfSortedArrray([-4, -1, 0, 3, 10]));

// sliding window problems
/*
problems like subarray.consq
solve the problem in 0(n)
tyes fixed , variable 
*/

/*
🟢 Practice Questions (Fixed)

1)Maximum sum subarray of size k
Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.

✅ Example 1

Input:

arr = [2, 1, 5, 1, 3, 2]
k = 3

Output:
9

Find average of every subarray of size k
First negative number in every window of size k
Count distinct elements in every window of size k
Maximum number of vowels in substring of size k  
*/

function maxsubarray(arr, k) {
  // edge condtion if the size of array is less than k
  if (arr.length < k) return null;

  // k is the size of the subarray

  // variable to hold max sum
  let maxSum = 0;
  let slidngsum = 0;

  //1) create a fixed subarray
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
    slidngsum += arr[i];
  }

  if (arr.length === k) return maxSum;

  // console.log(maxSum);

  //2 loop the arr from the end of the fixed subaary
  for (let j = k; j < arr.length; j++) {
    console.log(arr[j - k], arr[j]);

    slidngsum = slidngsum - arr[j - k] + arr[j];
    console.log(slidngsum);
    if (slidngsum > maxSum) {
      maxSum = slidngsum;
    }
  }

  //return the max sum
  return maxSum;
}

// console.log(maxsubarray([2, 1, 5, 1, 3, 2], 3));
/*
🟡 Question 2: Maximum Number of Vowels in Substring of Size K
📝 Problem

Given a string s and integer k, return the maximum number of vowels in any substring of size k.

✅ Example

Input:

s = "abciiidef"
k = 3

Output:

3
*/

function maxNoVowels(str, k) {
  // fixed slding window problem
  let initalvowels = 0;
  let maxVowels = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < k; i++) {
    // fixedwindow += str[i];
    if (vowels.includes(str[i])) {
      initalvowels++;
      maxVowels++;
    }
  }
  console.log(initalvowels, maxVowels);

  for (let j = k; j < str.length; j++) {
    if (vowels.includes(str[j])) {
      initalvowels++;
    }
    if (vowels.includes(str[j - k])) {
      initalvowels--;
    }

    if (initalvowels > maxVowels) {
      maxVowels = initalvowels;
    }
  }

  return maxVowels;
}

// console.log(maxNoVowels("abciiidef", 3));
/*
✅ Type 2: Variable Size Window (Dynamic)
Window size changes based on condition.
*/

/*
Given an array of positive integers and a target, return the length of the smallest subarray whose sum ≥ target.

✅ Example

Input:

arr = [2,3,1,2,4,3]
target = 7

Output:

2
*/

function minSumLength(arr, target) {
  // inc the size of array till total is equal or greater than target
  // if the

  let minlength = Infinity;
  let currentsum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    currentsum += arr[i];

    while (currentsum >= target) {
      currentsum -= arr[start];
      minlength = Math.min(minlength, i - start + 1);
      start++;
    }
  }

  return minlength;
}

// function minSubArrayLen(arr, target) {
//   let start = 0;
//   let currentSum = 0;
//   let minLength = Infinity;

//   for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end];

//     // Shrink window while condition is satisfied
//     while (currentSum >= target) {
//       minLength = Math.min(minLength, end - start + 1);
//       currentSum -= arr[start];
//       start++;
//     }
//   }

//   return minLength === Infinity ? 0 : minLength;
// }
// console.log(minSumLength([2, 3, 1, 2, 4, 3], 7));

/*
binary searcj problems 
conditions 
1)array should be sorted or rotated 
*/

function binarySearch(arr, target) {
  // binary o(logn) , so we need start end and mid
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    console.log(mid, arr[mid]);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return -1;
}
function firstOccurence(arr, target) {
  // binary o(logn) , so we need start end and mid
  let s = 0;
  let e = arr.length - 1;
  let firstoccurence = -1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    console.log(mid, arr[mid]);

    if (arr[mid] === target) {
      firstoccurence = mid;
      e = mid - 1;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return firstoccurence;
}
function lastOccurence(arr, target) {
  // binary o(logn) , so we need start end and mid
  let s = 0;
  let e = arr.length - 1;
  let lastoccurence = -1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    console.log(mid, arr[mid]);

    if (arr[mid] === target) {
      lastoccurence = mid;
      s = mid + 1;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return lastoccurence;
}

// console.log(lastOccurence([1, 3, 5, 6, 6, 8], 6));

/*
Multiple pointer questions 
1. Opposite Direction Pointers
Pointers start from both ends and move toward each other.
Used for
Pair sum problems
Palindrome
Container problems
Sorted arrays

2. Fast & Slow Pointers
One pointer moves faster than the other.
Used for
Removing duplicates
Partitioning arrays
Detecting cycles



*/

// reverse a string
let arr = ["h", "e", "l", "l", "o"];

function reverseArray(arr) {
  let s = 0;
  let e = arr.length - 1;

  while (s < e) {
    [arr[s], arr[e]] = [arr[e], arr[s]];
    s++;
    e--;
  }

  return arr;
}

// console.log(reverseArray(arr));
// sum zero
let arrOfSumZero = [-4, -3, -2, -1, 0, 1, 2, 5];

function sumZero(arr) {
  let s = 0;
  let e = arr.length - 1;

  while (s < e) {
    let sum = arr[s] + arr[e];
    if (sum === 0) {
      return [s, e];
    } else if (sum > 0) {
      // -4 + 5 = 1
      //-4 +2 = -2
      e--;
    } else {
      s++;
    }
  }
}
// console.log(sumZero(arrOfSumZero));
// Move Zeroes
// Input

let input = [0, 1, 0, 3, 12];

function moveZeros(arr) {
  // slow and fast pointers
  // let i be slow pointer and j be travese the loop
  //
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    console.log(arr[j]);
    if (arr[i] < arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  return arr;
}

// console.log(moveZeros(input));
// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(digit1, digit2) {
  let str1 = String(digit1);
  let str2 = String(digit2);

  // frequency count for 1st str
  let freq = {};
  for (let value of str1) {
    freq[value] ? freq[value]++ : (freq[value] = 1);
  }

  // traverse the second string and check if it exisit
  for (let value of str2) {
    if (freq[value]) {
      freq[value]--;
    } else {
      return false;
    }
  }

  return true;
}

// console.log(sameFrequency(182, 281));
/*
Write a function called maxSubarraySum which accepts
an array of integers and a number called n. The function
should calculate the maximum sum of n consecutive
elements in the array.
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
*/

function maxSubarray(arr, subarraylength) {
  // fixed window problem
  if (arr.length < subarraylength) return null;

  // create a subaary
  let subarray = [];
  let maxsum = 0;
  let initalcal = 0;
  for (let i = 0; i < subarraylength; i++) {
    maxsum = maxsum + arr[i];
    subarray.push(arr[i]);
  }

  // console.log(maxsum);
  initalcal = maxsum;
  // console.log(initalcal);

  // traverse the other part of the arr ,store the sum and compare it previous sum
  for (let j = subarraylength; j < arr.length; j++) {
    console.log(initalcal, arr[j - subarraylength], arr[j]);
    initalcal = initalcal - arr[j - subarraylength] + arr[j];
    console.log(initalcal);
    if (initalcal > maxsum) {
      maxsum = initalcal;
    }
  }

  return maxsum;
}
let getmaxsum = [1, 2, 5, 2, 8, 1, 5];
// console.log(maxSubarray(getmaxsum, 2));

/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/

function minsubarrlen(arr, target) {
  // subaary -> sliding window with varaible size
  let start = 0;
  let end = 0;
  let sum = 0;
  let minlenght = Infinity;

  while (start < arr.length) {
    if (sum < target && end < arr.length) {
      sum = sum + arr[end];
      end++;
    } else if (sum >= target) {
      minlenght = Math.min(minlenght, end - start);
      sum = sum - arr[start];
      start++;
    } else {
      break;
    }
  }

  return minlenght;
}

console.log(minsubarrlen([2, 3, 1, 2, 4, 3], 7));

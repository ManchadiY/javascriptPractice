"use strict";
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

function maxSubarraySum(arr, num) {
  // check array lenght with number
  if (arr.length < num) return null;

  // create a subarray or window
  let maxsum = 0;
  let tempsum = 0;
  for (let i = 0; i < num; i++) {
    maxsum = maxsum + arr[i];
    tempsum = maxsum;
  }
  console.log("tempsum", tempsum);
  console.log("maxsum", maxsum);

  // create a sliding in the arr from the start of n to end of the arr length
  for (let i = num; i < arr.length; i++) {
    tempsum = tempsum - arr[i - num] + arr[i];
    if (tempsum > maxsum) {
      maxsum = tempsum;
    }
  }

  // return sum
  return maxsum;
}

// console.log(maxSubarraySum([], 4));
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
// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }

function minSubArrayLen(arr, sum) {
  // [2,3,1,2,4,3], 7
  if (arr.length === 0) return 0;
  let start = 0;
  let end = 0;
  let total = 0;
  let minLength = Infinity;
  // create a sliding window
  // keep increasing the end and store in currentsum till the sum >= value ,if it matches store the length of subarray and increase the start keep repeating the process till the start reaches the arr.length
  while (start < arr.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      // if current window adds up to at least the sum given then
      // we can shrink the window
      minLen = Math.min(minLen, end - start);

      total -= arr[start];
      start++;
    } else {
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
      break;
    }
  }

  // return the length of the subarray that target the value or greater than it
  return minLen === Infinity ? 0 : minLen;
}

/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

//
function findLongestSubstring(str) {
  // if the string is empty return 0
  if (str.length === 0) return 0;
  // initalize the start ,end ,substring and length
  let start = 0;
  let seen = {};
  let maxsubstringlength = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    maxsubstringlength = Math.max(maxsubstringlength, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }

  // return the length of longest substring with all distinct character
  return maxsubstringlength;
}

console.log(findLongestSubstring("rithmschool"));

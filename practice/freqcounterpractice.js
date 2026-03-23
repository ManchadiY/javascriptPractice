console.log("frequency counter practice ");
/*
🔹 1. Using Object / HashMap (Most Common)
👉 Best for: general problems, strings, arrays
Idea:
Store element → count

🔹 2. Using Array (When Range is Known)
👉 Best for: numbers in small range (like 0–100)
Idea:
Use index as value

🔹 3. Using Map (Better than Object in JS)
👉 Best for: advanced cases, non-string keys

🔹 4. Frequency Counter with Two Arrays (Comparison)
👉 Used in problems like:
Same frequency check
Anagram check

5 Sliding Window + Frequency Counter
👉 Used in:
Substring problems
Pattern matching
*/

// 2. First Non-Repeating Character
// Input:
// s = "aabbcdd"
// Output:
// c

function nonrepeatingcharacter(str = "aabbcdd") {
  if (str.length <= 1) return str;

  // freq map of each character
  let freq = {};
  for (let val of str) {
    // console.log(val);
    freq[val] ? freq[val]++ : (freq[val] = 1);
  }

  // console.log(freq);
  // for (let [key, val] of Object.entries(freq)) {
  //   // console.log(key, val);
  //   if (val === 1) {
  //     return key;
  //   }
  // }
  // for order of traversal
  for (let val of str) {
    if (freq[val] === 1) {
      return val;
    }
  }
}
// console.log(nonrepeatingcharacter());
//Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
// Input: nums = [1, 2, 3, 3]
// Output: true

function containdublicate(nums = [1, 2, 3, 4]) {
  if (nums.length <= 1) return nums;
  // solve using the freq count
  let freq = {};

  for (let val of nums) {
    if (!freq[val]) {
      freq[val] = freq[val] = 1;
    } else {
      return true;
    }
  }

  return false;
}
// console.log(containdublicate());

// Top K Frequent Elements
// nums = [1,1,1,2,2,3], k = 2
// Output:[1,2]
// function topfreqelement(nums = [1, 1, 1, 2, 2, 3], k = 2) {
//   // check if nums is array
//   if (!Array.isArray(nums)) return null;

//   // create frequency map
//   let freq = {};
//   for (let val of nums) {
//     // console.log(val);
//     freq[val] ? freq[val]++ : (freq[val] = 1);
//   }
//   // check freq for k
//   let result = [];
//   for (let [key, val] of Object.entries(freq)) {
//     if (val >= k) {
//       result.push(+key);
//     }
//   }

//   return result;
// }
console.log(topfreqelement());

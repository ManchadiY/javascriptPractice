console.log("variable size window");
/*
🧠 When to identify Dynamic Sliding Window
Look for keywords like:
“smallest / minimum subarray”
“longest substring”
“at most / at least”
“sum ≥ target”
“no repeating characters”
“longest valid window”
👉 Window size is NOT fixed
*/

//template
// function template(arr) {
//   let i = 0; //tracks the start point
//   for (let j = 0; j < arr.length; j++) {
//     // expand window

//     while (condition_breaks) {
//       // shrink window
//       i++;
//     }

//     // update answer
//   }
// }

//question
// 🟢 1. Minimum Size Subarray Sum
// 🧾 Problem:
// Find the smallest subarray length whose sum ≥ target.
// 🔹 Input:
let arr1 = [2, 3, 1, 2, 4, 3];
let target = 7;

//for example o/p [4,3] -> 2

function minSizeSubarray(arr, target) {
  let i = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let j = 0; j < arr.length; j++) {
    // [2, 3, 1, 2, 4, 3]
    sum += arr[j];

    while (sum >= target) {
      minLen = Math.min(minLen, j - i + 1);
      sum -= arr[i];
      i++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSizeSubarray(arr1, target));

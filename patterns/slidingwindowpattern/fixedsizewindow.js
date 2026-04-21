console.log("fixed size sliding window question");
//mostly questions based on subarray ,substring
/*
🟢 1. Maximum Sum Subarray of Size K
🧾 Problem:
Find the maximum sum of any subarray of size k.
🔹 Input:

 */

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

function maxSubarrayfixedSize(arr, k) {
  //create a window
  let tempsum = 0;

  for (let i = 0; i < k; i++) {
    tempsum += arr[i];
  }
  let maxsum = tempsum;

  //loop through the remaining size
  for (let j = k; j < arr.length; j++) {
    tempsum += arr[j] - arr[j - k];
    if (tempsum > maxsum) {
      maxsum = tempsum;
    }
  }

  return maxsum;
}

console.log(maxSubarrayfixedSize(arr, k));

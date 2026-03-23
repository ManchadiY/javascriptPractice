"use strict";

// [2,1,4,5,6,3]

function insertionsort(arr) {
  // if the arr is empty return []
  if (arr.length === 0) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      console.log(arr[j], arr[j - 1]);

      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(insertionsort([2, 1, 4, 5, 6, 3]));

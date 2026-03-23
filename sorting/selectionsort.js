"use strict";

// [64, 25, 12, 22, 11]

function selectionsort(arr) {
  // if array is empty return arr
  if (arr.length === 0) return arr;

  for (let i = 0; i < arr.length; i++) {
    let temp = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[temp], arr[j]);

      if (arr[j] < arr[temp]) {
        temp = j;
      }
    }

    if (arr[temp] !== arr[i]) {
      console.log("swap", arr[temp], arr[i]);
      // sorting use the es6 way of destruct
      [arr[i], arr[temp]] = [arr[temp], arr[i]];
    }
  }

  // return the sorted array
  return arr;
}

console.log(selectionsort([64, 25, 12, 22, 11]));

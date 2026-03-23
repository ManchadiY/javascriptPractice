"use strict";

// bubble sort
//  [ 5, 3, 4, 1, 2 ]

// version 1 with last element also getting check for swap
function bubbblesort(arr) {
  // if array is empty return []
  if (arr.length === 0) return [];
  // bubble sort 0(n2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i, j);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
// version 2 last element should not get checked
function bubbblesort2(arr) {
  // if array is empty return []
  if (arr.length === 0) return [];
  // bubble sort 0(n2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      console.log(i, j);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// version 3 break if there is no swap in the iteragtion
function bubbblesort3(arr) {
  // if array is empty return []
  if (arr.length === 0) return [];
  // bubble sort 0(n2)
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - i; j++) {
      console.log(i, j);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) {
      console.log("break the loop for saving the time ");
      break;
    }
  }

  return arr;
}
// console.log(bubbblesort2([5, 3, 4, 1, 2]));
console.log(bubbblesort3([1, 3, 5, 6, 4]));

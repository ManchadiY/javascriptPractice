console.log("2 pointer practice");
// Q1. Two Sum (Sorted Array)
// 👉 Given a sorted array, find two numbers that add up to target.
let arr = [1, 2, 3, 4, 6];
target = 6;
function twosum(arr, target) {
  //use two pointer approach
  let s = 0;
  let e = arr.length - 1;

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

// console.log(twosum(arr, target));

//Q2. Valid Palindrome
// 👉 Check if a string is a palindrome (ignore non-alphanumeric, case-insensitive)

let str1 = "javascript";
let str2 = "anaana";

function checkpallindrone(str) {
  let s = 0;
  let e = str.length - 1;
  while (s < e) {
    if (str[s] !== str[e]) {
      return false;
    }
    s++;
    e--;
  }

  return true;
}

// console.log(checkpallindrone(str1));
// console.log(checkpallindrone(str2));

// Q3. Remove Duplicates from Sorted Array note this is slow and fast pattern
// 👉 Modify array in-place and return new length
// Input:
let arr1 = [1, 1, 2, 2, 3];

function removeDublicates(arr) {
  let res = new Set(arr);
  console.log(res); // {1,2,3}

  return [...new Set(arr)]; //convert set into arr
}
console.log(removeDublicates(arr1));

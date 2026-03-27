console.log("hello divide and conquer");
/*
🔹 1. Binary Search Type (Decision-Based D&C)
Idea:
Divide the search space in half and decide which side to continue.
Used When:
Array is sorted
You need to search / find boundary / condition
Examples:
Binary Search
First/Last occurrence
Peak element
Search in rotated sorted array

🔹 2. Merge-Based Divide & Conquer
Idea:
Divide array → solve both halves → merge results
Used When:
Need sorted output
Combine two results efficiently
Examples:
Merge Sort
Count inversions
Merge k sorted arrays

🔹 3. Partition-Based Divide & Conquer
Idea:
Pick a pivot
Partition elements around pivot
Solve subproblems
Used When:
Rearranging elements around a condition
Examples:
Quick Sort
Quick Select (kth smallest/largest)


*/
//binary search O(logn)
// Input: nums = [-1,0,2,4,6,8], target = 4
// Output: 3

function binarysearch(num = [-1, 0, 2, 4, 6, 8], target = 4) {
  // not a array ,inavlid input
  if (!Array.isArray(num)) return null;

  // empty input
  if (num.length === 0) return -1;

  // binary search -> s,e,mid
  // move s and e based on mid and recalcualte the mid each time
  //stop when s>e

  let s = 0;
  let e = num.length - 1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    // console.log(mid, num[mid]);
    if (target === num[mid]) {
      // return the index
      return mid;
    } else if (target > num[mid]) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  // element doesnt exisit
  return -1;
}

// console.log(binarysearch());

/*
🧩 Problem: Find First and Last Position of Target
📌 Problem Statement:
Given a sorted array nums and a target target,
return an array containing:
first occurrence index
last occurrence index
If the target is not found, return [-1, -1].
📥 Input:
nums = [1, 2, 2, 2, 3, 4]
target = 2
📤 Output:
[1, 3]
*/

function occ(num, target, occurence = "first") {
  let s = 0;
  let e = num.length - 1;
  let occurenceindex = -1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (target === num[mid]) {
      occurenceindex = mid;
      if (occurence === "first") {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    } else if (target > num[mid]) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return occurenceindex;
}

function firstandlastocc(num = [1, 2, 2, 2, 3, 4], target = 2) {
  //check if it is array
  if (!Array.isArray(num)) return null;

  // check if length is >=1
  if (num.length < 1) return [-1, -1];

  // approach
  // 1)find fisrt occurence index
  let firtindex = occ(num, target);
  console.log(firtindex);

  //2) find second occ index
  let second = occ(num, target, "last");

  // return o/p -> [firstindex ,lastindex]
  return [firtindex, second];
}

// console.log(firstandlastocc());

/*
Problem: Search in Rotated Sorted Array
📌 Problem Statement:
You are given a sorted array that has been rotated at some pivot.
Your task is to find the index of the target element.
If not found, return -1.
📥 Input:
nums = [4, 5, 6, 7, 0, 1, 2]
target = 0
📤 Output:
4
*/

function searchElementInRotatedArray(num = [4, 5, 6, 7, 0, 1, 2], target = 0) {
  let s = 0;
  let e = num.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
  }
}

console.log(searchElementInRotatedArray());

/*
Divide and Conquer - countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
Time Complexity - O(log n)
*/

function countZeroes(arr) {
  // we have to count the no of zero in the arr sorted by descreasing order 1 and 0
  // logic
  // 1)find the first zero
  // 2)if first zero not found return -1  ,else  subtract the first zero index with total length
  // initalize the start and end index
  function findZero(arr) {
    let start = 0;
    let end = arr.length - 1;
    let zeroIndex = -1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === 0) {
        // store result
        zeroIndex = mid;
        // move left to check if another exisit
        end = mid - 1;
      } else if (arr[mid] > 0) {
        start = mid + 1;
      } else {
        start = mid - 1;
      }
    }

    return zeroIndex;
  }

  let firstindexofzero = findZero(arr);
  console.log(firstindexofzero);
  // if the arr doesnt include the 0 return the 0 ,else return the difference
  if (firstindexofzero === -1) {
    return 0;
  } else {
    return arr.length - firstindexofzero;
  }
}

// console.log(countZeroes([1, 1, 1, 1, 1, 1, 0, 0, 0, 0]));
/*
Divide and Conquer - sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

sortedFrequency([1,1,2,2,2,2,3],2) // 4 
sortedFrequency([1,1,2,2,2,2,3],3) // 1 
sortedFrequency([1,1,2,2,2,2,3],1) // 2 
sortedFrequency([1,1,2,2,2,2,3],4) // -1
Time Complexity - O(log n)

*/
function firstoccurence(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let index = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      // store the index
      index = mid;
      end = mid - 1;
    } else if (arr[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return index;
}
function lastoccurence(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let index = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      // store the index
      index = mid;
      start = mid + 1;
    } else if (arr[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return index;
}
function sortedFrequency(arr, value) {
  //find the first occurence
  let occurence = -1;
  let firstindex = firstoccurence(arr, value);
  let secondindex = lastoccurence(arr, value);

  if (firstindex === -1 || secondindex === -1) {
    return -1;
  } else if (firstindex === secondindex) {
    return 1;
  } else {
    return secondindex - firstindex + 1;
  }

  // find the last occurence of value

  // return the difference
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3], 3));
/*
Divide and Conquer - findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.

Constraints:

Time Complexity - O(log n)

Space Complexity - O(1)

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
*/

function findRotatedIndex(array, num) {
  var pivot = findPivot(array);
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    return binarySearch(array, num, 0, pivot - 1);
  } else {
    return binarySearch(array, num, pivot, array.length - 1);
  }
}

function binarySearch(array, num, start = 0, end = array.length - 1) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    else if (arr[start] <= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

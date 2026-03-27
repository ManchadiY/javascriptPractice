console.log("practice 1 ");

// reverse a array

function reverseArr(arr = [3, 4, 5, 6, 3, 2, 1]) {
  if (!Array.isArray(arr)) return []; // edge case invalid input
  // use mulitpler pointer method ,make changes in same array

  // edege case , empty or 1 element in arr
  if (arr.length <= 1) return arr;
  let s = 0;
  let e = arr.length - 1;

  while (s < e) {
    [arr[s], arr[e]] = [arr[e], arr[s]];
    s++;
    e--;
  }

  return arr;
}

// console.log(reverseArr());

//get max no in the array
function maxInArr(arr = [1, 4, 5, 3, 8, 4]) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  // let max = -Infinity;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(maxInArr());
function minInArr(arr = [1, 4, 5, 3, 8, 4]) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  // let min = Infinity;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
// console.log(minInArr());

// linear search

function linearSearch(arr = [2, 4, 5, 6, 8, 3], target = 12) {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  // traverse through the array
  for (let i = 0; i < arr.length; i++) {
    // compare each element with the target ,return the index if it matches if not found return -1
    if (arr[i] === target) {
      return i;
    }
  }

  // not found
  return -1;
}

// console.log(linearSearch());

function removedublicates(arr = [1, 2, 2, 3, 4, 4]) {
  // check if its a arr || empty arr return null
  if (!Array.isArray(arr) || arr.length === 0) return null;
  // remove dublicate from unsorted array
  // 1)create a freq map , add the element and its count , if its trying to add second time
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(removedublicates());
function removedublicatesUsingFreq(arr = [1, 2, 2, 3, 4, 4]) {
  // check if its a arr || empty arr return null
  if (!Array.isArray(arr) || arr.length === 0) return null;
  // remove dublicate from unsorted array
  // 1)create a freq map , add the element and its count , if its trying to add second time
  let seen = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}
function removedublicatesUsingset(arr = [1, 2, 2, 3, 4, 4]) {
  // check if its a arr || empty arr return null
  if (!Array.isArray(arr) || arr.length === 0) return null;
  // remove dublicate from unsorted array
  // 1)create a freq map , add the element and its count , if its trying to add second time
  let result = [...new Set(arr)];
  return result;
}
// console.log(removedublicatesUsingset());

// find unique element

function findunique(arr = [2, 2, 3, 3, 4]) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  // using xor
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result ^ arr[i];
  }

  return result;
}
// console.log(findunique());

function findAllUniqueElements(arr = [1, 2, 2, 3, 4, 4]) {
  // invalid input
  if (!Array.isArray(arr) || arr.length === 0) return null;

  // return arr of all unique elements non repeating
  // 1)create a freq map
  let freq = {};
  let result = [];
  // create freq map
  for (let val of arr) {
    freq[val] ? freq[val]++ : (freq[val] = 1);
  }
  console.log(freq);
  // iterate over the loop and check the count is 1
  // for (let val of arr) {
  //   if (freq[val] === 1) {
  //     result.push(val);
  //   }
  // }
  // using object.entries
  for (let [key, val] of Object.entries(freq)) {
    // console.log(key, val);
    if (val === 1) {
      result.push(+key);
    }
  }

  return result;
}

// console.log(findAllUniqueElements());

function secondlargestnum(arr) {
  if (!Array.isArray(arr)) return null;

  // check the length
  if (arr.length <= 1) return arr;

  // second largest in array
  let first = -Infinity;
  let second = -Infinity;

  for (let val of arr) {
    if (val > first) {
      second = first;
      first = val;
    } else if (val > second && val !== first) {
      second = val;
    }
  }

  return second;
}
// Input: [10, 20, 4, 45, 99]
// Output: 45
// console.log(secondlargestnum([10, 20, 4, 45, 99]));

function kLargestelement(arr = [10, 20, 4, 45, 99], k = 2) {
  // based on sorting
  let result = arr.sort((a, b) => b - a)[k - 1];
  return result;
}
function kLargestelementheap(arr = [10, 20, 4, 45, 99], k = 2) {
  if (!Array.isArray(arr) || k > arr.length) return -1;

  let heap = [];

  for (let num of arr) {
    heap.push(num);
    heap.sort((a, b) => a - b); // simulate min heap
    console.log(heap);

    if (heap.length > k) {
      heap.shift(); // remove smallest
    }
  }

  return heap[0];
}
// console.log(kLargestelementheap());

console.log("practice1 for divide and conquer pattern");

//simple search a element in a asc  array

let arr1 = [1, 2, 3, 4, 5, 10, 15];

function binarySearch(arr, target) {
  // find the index of the target element 0 baased
  //for binary we need start,end,mid
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return -1;
}

// console.log(binarySearch(arr1, 10));
let arr2 = [1, 2, 2, 2, 3, 4];
target = 2;

function occurence(arr, target, occ) {
  let s = 0;
  let e = arr.length - 1;
  let occIndex = -1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (arr[mid] === target) {
      occIndex = mid;
      if (occ === "first") {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return occIndex;
}

function firstAndLastOcc(arr, target) {
  let firstocc = occurence(arr, target, "first");
  let secondocc = occurence(arr, target, "second");

  return [firstocc, secondocc];
}
console.log(firstAndLastOcc(arr2, 2));

// occurence use case total

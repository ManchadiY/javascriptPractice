// console.log("freq pattern questions");
/*
🔹 What is Frequency Pattern?
It means counting how many times something appears (characters, numbers, elements).
Usually solved using:
Object {}
or Map()
*/
// 👉 What is the frequency object?
const arr = [1, 2, 2, 3, 1, 4, 2];

function freqObj(arr) {
  //freq obj
  let freq = {};
  //for loop
  // for (let i = 0; i < arr.length; i++) {
  //   freq[arr[i]] ? freq[arr[i]]++ : (freq[arr[i]] = 1);
  // }

  //for of ,gets the el of array ,it is more readable
  for (let el of arr) {
    freq[el] ? freq[el]++ : (freq[el] = 1);
  }

  return freq;
}

// console.log(freqObj(arr));

const str = "banana";
//2) 👉 Count character frequency.

function charFreq(str) {
  let freq = {};

  for (let el of str) {
    console.log(el);
    freq[el] ? freq[el]++ : (freq[el] = 1);
  }

  return freq;
}

// console.log(charFreq(str));

const str2 = "aabbccd";
//3) 👉 First non-repeating character?

function firstNonRepeating(str) {
  // 1)freq obj
  let freq = {};

  //2)create a freq obj
  for (let el of str) {
    freq[el] ? freq[el]++ : (freq[el] = 1);
  }

  //3)loop over the str and check the first char with 1 count
  for (let el of str) {
    if (freq[el] === 1) {
      return el;
    }
  }

  return -1;
}

// console.log(firstNonRepeating(str2));

const arr2 = [4, 5, 6, 4, 5, 4];
//5 Which element appears maximum times?

function maxRepeatingEl(arr) {
  //freq
  // let freq = {};

  // for (let el of arr) {
  //   freq[el] ? freq[el]++ : (freq[el] = 1);
  // }

  // //track max
  // let max = -Infinity;
  // let maxCount = 0;
  // for (let el of arr) {
  //   // console.log(freq[el], max);
  //   if (freq[el] > maxCount) {
  //     max = el;
  //     maxCount = freq[el];
  //   }
  // }
  // return max;
  //optimized approach in one loop
  let freq = {};
  //track max
  let max = -Infinity;
  let maxCount = 0;
  for (let el of arr) {
    freq[el] ? freq[el]++ : (freq[el] = 1);
    // console.log(freq[el], max);
    if (freq[el] > maxCount) {
      max = el;
      maxCount = freq[el];
    }
  }
  return max;
}
console.log(maxRepeatingEl(arr2));

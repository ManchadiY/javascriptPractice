"use strict";

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// input example
// [1,2,3] [1,9,4]
// [1,3] [9]

function checkSquareofTwoArrays(arr1, arr2) {
  // length of both the array should be same
  if (arr1.length !== arr2.length) return false;

  // create frequency object of both A and B input
  let frequencyA = {};
  let frequencyB = {};

  for (let i = 0; i < arr1.length; i++) {
    if (frequencyA[arr1[i]]) {
      frequencyA[arr1[i]]++;
    } else {
      frequencyA[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (frequencyB[arr2[i]]) {
      frequencyB[arr2[i]]++;
    } else {
      frequencyB[arr2[i]] = 1;
    }
  }

  for (let key in frequencyA) {
    console.log("key", key);
    // check if key exisit
    if (!(key ** 2 in frequencyB)) {
      return false;
    }

    // check the frequency of key if it matches
    if (frequencyB[key ** 2] !== frequencyA[key]) {
      return false;
    }
  }
  console.log("freqa", frequencyA);
  console.log("freqb", frequencyB);

  // return the o/p as true or false
  return true;
}

// console.log(checkSquareofTwoArrays([1, 3], [9, 1]));

// question 2
// ANAGRAMS
// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the
// letters of another, such as cinema, formed from iceman.
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

function checkAnagram(str1, str2) {
  // check the length of both
  if (str1.length !== str2.length) {
    return false;
  }

  // logic
  let frequencyA = {};
  let frequencyB = {};

  for (let value of str1) {
    frequencyA[value] = (frequencyA[value] || 0) + 1;
  }
  for (let value of str2) {
    frequencyB[value] = (frequencyB[value] || 0) + 1;
  }
  // loop over frequencyA
  for (let key in frequencyA) {
    // check if key of frequency A exist in frequency b
    // check if value of key is equal to freqb
    if (!(key in frequencyB) && !(frequencyA[key] === frequencyB[key])) {
      return false;
    }
  }

  // return the final o/p
  return true;
}

// console.log(checkAnagram("aaz", "zza"));

// step 5 lookup and refactor
function checkAnagram2(str1, str2) {
  // check the length of both
  if (str1.length !== str2.length) {
    return false;
  }

  // logic
  let frequency = {};
  // frequency of string 1
  // for (let value of str1) {
  //   frequency[value] = (frequency[value] || 0) + 1;
  // }
  // using for loop
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // check if it exits , if yes inc else assign it 1
    frequency[letter] ? frequency[letter]++ : (frequency[letter] = 1);
  }
  console.log("freq", frequency);

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!frequency[letter]) {
      return false;
    } else {
      frequency[letter] -= 1;
    }
  }

  // return the final o/p
  return true;
}

// console.log(checkAnagram2("aaz", "zaa"));

/*
countUniqueValues
Implement a function called countUniqueValues,
which accepts a sorted array, and counts the
unique values in the array. There can be negative
numbers in the array, but it will always be sorted.
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/
// solved using frequency couter

function countUniqueValues(arr) {
  // check the length of arr
  if (arr.length === 0) {
    return 0;
  }

  // logic
  let frequency = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]] += 1;
    } else {
      frequency[arr[i]] = 1;
      count++;
    }
  }
  console.log("freq", frequency);

  return count;
}

// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(digit1, digit2) {
  // check the length of both the digit so conver the integer into string
  let stringofdigit1 = String(digit1);
  let stringofdigit2 = String(digit2);

  if (stringofdigit1.length !== stringofdigit2.length) {
    return false;
  }

  console.log(stringofdigit1, stringofdigit2);
  // logic
  // create a frequency holder
  let frequency = {};
  for (let value of stringofdigit1) {
    frequency[value] ? frequency[value]++ : (frequency[value] = 1);
  }

  console.log("frequency", frequency);

  // check the frequncy exisit in second
  for (let value of stringofdigit2) {
    if (!frequency[value]) {
      return false;
    } else {
      frequency[value]--;
    }
  }

  // return true or false
  return true;
}

// console.log(sameFrequency(121, 212));
/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:
Time - O(n)
Space - O(n)
Bonus:
Time - O(n log n)
Space - O(1)
*/

function areThereDuplicates() {
  // create a frequency object
  let frequency = {};
  for (let value of arguments) {
    frequency[value] ? frequency[value]++ : (frequency[value] = 1);
  }

  console.log("freq", frequency);

  for (let key in frequency) {
    console.log("key", key);

    if (frequency[key] > 1) {
      return true;
    }
  }

  //return the boolean
  return false;
}

// console.log(areThereDuplicates(1, 2, 2));

/*
Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.
Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
Bonus Constraints:
If M is the length of message and N is the length of letters:
Time Complexity: O(M+N)
Space Complexity: O(N)
Examples:
constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/

function constructNote(message, letters) {
  // create a freq counter for the message
  let frequencyMessage = {};
  let frequencyLetter = {};
  for (let value of message) {
    frequencyMessage[value]
      ? frequencyMessage[value]++
      : (frequencyMessage[value] = 1);
  }
  for (let value of letters) {
    frequencyLetter[value]
      ? frequencyLetter[value]++
      : (frequencyLetter[value] = 1);
  }
  console.log("frequncymessage", frequencyMessage);
  console.log("frequncyletters", frequencyLetter);
  for (let key in frequencyMessage) {
    if (!frequencyLetter[key]) {
      return false;
    }

    if (frequencyLetter[key] !== frequencyMessage[key]) return false;
  }

  return true;
}

// console.log(constructNote("abc", "dcba"));
/*
Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
Time Complexity - O(n)
*/

function findAllDuplicates(arr) {
  // [4,3,2,7,8,2,3,1]
  if (arr.length === 0) return [];
  let frequency = {};
  let newArr = [];
  // create a frequency counter object
  for (let value of arr) {
    if (frequency[value]) {
      frequency[value]++;
    } else {
      frequency[value] = 1;
    }
  }

  // loop over the frequencys
  for (let key in frequency) {
    if (frequency[key] === 2) {
      newArr.push(key);
    }
  }

  // return an array or return empty array
  return newArr;
}

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
// // array with 2 and 3
// console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
// console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1

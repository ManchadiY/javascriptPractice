console.log("slow and fast pointer");
// 🧠 Two Pointers Idea
// We use:
// 🔵 slow pointer → position of last unique element
// 🟢 fast pointer → scans the array

//mostly question slow and fast with swapping/overwrite
//removedublicates,movezeros,removeAlloccurence

/*
Here’s a practical way to identify slow & fast pointer problems instantly 👇

🧠 1. Core Idea of Slow & Fast Pointers

You use it when:

One pointer explores (fast), and the other tracks a valid position (slow)

So ask yourself:
👉 “Am I separating valid vs invalid elements while scanning?”

🚨 2. Strong Signals (MOST IMPORTANT)

If you see ANY of these, think slow/fast:

✅ A. “Remove / Filter / Keep condition”
Keywords:
remove duplicates
remove element
move zeros
filter array in-place
delete occurrences
Pattern:

👉 fast scans
👉 slow builds result

✅ B. “In-place modification”

If problem says:

without extra space / modify array

👉 Very strong hint for slow/fast

✅ C. “Partitioning problem”

Examples:

move negatives left, positives right
even before odd
0s,1s,2s sorting

👉 slow = boundary of valid region

✅ D. “Cycle / loop detection” (advanced)

If you see:

linked list cycle
circular array
repeating pattern

👉 slow = 1 step
👉 fast = 2 steps

✅ E. “Find duplicates / repeated pattern”

Examples:

find duplicate number
repeated elements in cycle-like array

👉 Floyd’s cycle detection = slow/fast

🧠 3. Mental Checklist (INTERVIEW TRICK)
When reading a question, ask:
🔍 Step 1:
Is this about array traversal?
✔ Yes → continue

🔍 Step 2:
Am I:
skipping elements?
filtering elements?
moving valid items forward?
✔ Yes → slow/fast likely

🔍 Step 3:
Can I solve with:
one pointer scanning
one pointer tracking result
✔ Yes → slow/fast pattern

⚡ 4. Quick Pattern Map
Problem Type	Pattern
Remove elements	slow/fast overwrite
Move zeros	slow placement
Partition array	swap + slow boundary
Sorted dedup	slow tracks unique
Cycle detection	fast = 2x speed
Find duplicate (Floyd)	cycle detection

🔥 5. Real Interview Shortcut
If interviewer says:
👉 “in-place”
👉 “O(1) space”
👉 “no extra array”
💡 Immediately think:
slow & fast pointer OR two pointers
🧠 6. Difference from Other Patterns (VERY IMPORTANT)
❌ Not slow/fast:
Binary search → left/right shrinking
Sliding window → fixed/variable window
Two sum → opposite ends
✅ Slow/fast:
One pointer builds result
One pointer scans input

🚀 7. One-line rule (MEMORIZE THIS)
“If one pointer is scanning and another is building/filtering → it’s slow & fast.”
*/

let arr1 = [1, 1, 2, 2, 3];

function removeDublicates(arr) {
  let slow = 0;
  for (let fast = 1; fast < arr.length; fast++) {
    // console.log(arr[slow], arr[fast]);
    if (arr[slow] !== arr[fast]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }

  return slow + 1;
}

// console.log(removeDublicates(arr1));

// Q2. Move All Zeros to End
// 👉 Keep order of non-zero elements
let arr2 = [0, 1, 0, 3, 12];

function moveZerosToEnd(arr) {
  //move all unique element to start
  let s = 0; //tracks the unique element
  for (let f = 0; f < arr.length; f++) {
    if (arr[f] !== 0) {
      [arr[s], arr[f]] = [arr[f], arr[s]];
      s++;
    }
  }

  return arr;
}

// console.log(moveZerosToEnd(arr2));s

// Q3. Remove Element (LeetCode classic)
// 👉 Remove all occurrences of a value
let nums = [3, 2, 2, 3];
let val = 3;

function removeOccurence(arr, val) {
  //slow and fast pointer
  //slow tracks , fast loops the array
  let s = 0;
  //with swapping
  // for (let f = 0; f < arr.length; f++) {
  //   if (arr[f] !== val) {
  //     [arr[s], arr[f]] = [arr[f], arr[s]];
  //     s++;
  //   }
  // }
  // with overwrite
  for (let f = 0; f < arr.length; f++) {
    if (arr[f] !== val) {
      arr[s] = arr[f];
      s++;
    }
  }

  return s;
}
// console.log(removeOccurence(nums, 3));

//level2
/*
Q4. Sort 0s, 1s, 2s (Dutch Flag Problem)
Rearrange array in-place
[2,0,2,1,1,0]
Pattern:
3 pointers (low, mid, high)
classic fast/slow variation
*/
let test = [2, 0, 2, 1, 1, 0];

function sortDutchflag(arr) {
  //3 pointer because we have to solve in 0(n) timecomplexity
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid < high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      mid++;
      low++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}
console.log(sortDutchflag(test));
/*
⚡ 🟡 Level 2 (Core Interview Questions)
Q4. Sort 0s, 1s, 2s (Dutch Flag Problem)

👉 Rearrange array in-place

[2,0,2,1,1,0]

💡 Pattern:

3 pointers (low, mid, high)
classic fast/slow variation
Q5. Squaring a Sorted Array

👉 Return squares in sorted order

[-4, -1, 0, 3, 10]

💡 Hint:

two pointers from ends
fill result from back
Q6. Partition Array by Even/Odd

👉 Even first, odd later (order not required)

[3,1,2,4,7,6]
🚀 🔴 Level 3 (Interview Heavy + Tricky)
Q7. Remove Duplicates Allowing At Most 2 Occurrences
👉 Keep at most 2 duplicates
[1,1,1,2,2,3]
👉 Output:
[1,1,2,2,3]
💡 Very important FAANG question
Q8. Find Duplicate Number (Cycle Detection in Array)
👉 Array contains numbers 1 to n with one duplicate
[1,3,4,2,2]
💡 Trick:
Treat array like linked list
slow & fast pointers
Q9. Find Missing Number (Variation)
[3,0,1]
Q10. Circular Array Loop Detection
👉 Detect cycle in circular movement array
[2,-1,1,2,2]
💡 Advanced slow/fast pointer usage
*/

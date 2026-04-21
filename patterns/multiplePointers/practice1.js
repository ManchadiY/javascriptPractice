// 1. What is Multiple Pointers Pattern?
// Using 2 or more pointers (indexes) to iterate through data instead of nested loops.
// Common setups:
// left & right
// slow & fast
// start & end

/*
✅ 1. Two Pointers (Opposite Direction)
👉 Start from both ends and move inward
📌 Use Cases:
Sorted arrays
Pair sum problems
Palindrome check

✅ 2. Same Direction (Slow & Fast Pointer)
👉 Both pointers move forward, but at different speeds
📌 Use Cases:
Remove duplicates
Cycle detection
Subarray problems


✅ 4. Fast & Slow Pointer (Cycle Detection)
👉 Used mainly in linked lists
📌 Use Cases:
Detect loop
Find middle element


⚡ 3. Most Asked Interview Problems
👉 Practice these (VERY IMPORTANT):
Two Sum (sorted version)
Container With Most Water
Trapping Rain Water
3Sum
Remove Duplicates
Move Zeroes
Valid Palindrome
Longest Substring Without Repeating Characters
Minimum Window Substring
🚀 4. When to Use Multiple Pointers?
👉 Use it when:
Array is sorted
You need to compare pairs
You want to avoid nested loops
Problem involves subarrays / substrings
*/

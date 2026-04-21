console.log("practice object method and concepts");

//lets create a user object with name ,age, city

let user = { age: 22, name: "yuvraj", city: "mumbai" };

console.log(user);

//add new fileds email
user.email = "yuvrajmanchadi321@gmail.com";

//update age to 25
user.age = 25;
console.log(user);

//delete a particular key and value
//3 different ways
// 1)using the delete Keyword
// delete user.city;
// console.log(user);

//2)spread operator
let { city, ...updatedu } = user;
console.log("using spread", updatedu);

//3)filter -> convert into arr Object.entries() and then filter the key ,convert output to again object using Object.fromEntries()
// console.log(Object.entries(user));
const updatedUser = Object.fromEntries(
  Object.entries(user).filter(([key]) => key != "city"),
);

console.log(updatedUser);

//looping through objects
let obj = { a: 1, b: 2, c: 3 };
// for...in	Quick loops (basic use)
// Object.entries()	Cleaner + modern + safer ✅
// Object.keys()	Only keys needed
// Object.values()	Only values needed

// 1)Object.entires method using for..of
for (let [key, val] of Object.entries(obj)) {
  console.log(key, ":", val);
}

//for..of without Object.entires()
//error obj is not iterable
// for (let el of obj) {
//   console.log(el);
// }

//2) for..in
for (let el in obj) {
  console.log(el, obj[el]);
}

let obj2 = { a: 10, b: 20, c: 30 };
// ➤ Return sum of all values
let sum = 0;
for (let val of Object.values(obj2)) {
  sum += val;
}
console.log(sum);
let sum2 = Object.values(obj2).reduce((acc, val) => acc + val, 0);
console.log(sum2);

//ref,shallow copy and deep copy concepts

//ref
let refObj = user;
console.log(refObj);

//shallow copy -> first level copy of properties
let shallowUser = user;

//deep copy
let newUser = structuredClone(user);

console.log("inbuild array method practice");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// add a new element at end
// arr.push(4);
// // console.log(arr.push(5)); //returns the new element -> 5

// // remove the element from end
// arr.pop();
// arr.shift(); //remove from the start
// // console.log(arr.pop()); //returns the last element

// //
// arr.unshift(10); //at element at the start
// console.log(arr);

// arr.splice(2, 4, 10, 11, 12, 13); //input argument  (start,deleteCount,newElements)

//perform operation
//sorting
//sorting for numbers for strings directly just call
// arr.sort((a, b) => a - b); //Asc
// arr.sort((a, b) => b - a); //desc

//reverse a array
// arr.reverse();

//fill
// arr.fill(45, 0, 3);

//Return a new Array
//data transformation
//Map
// let newmodifiedmap = arr.map((el) => el * 2);
// console.log(arr);
// console.log(newmodifiedmap);

//filter
// let newmodifiedFilter = arr.filter((el) => el % 2 === 0); //filter get only even numbers
// console.log(arr);
// console.log(newmodifiedFilter);

//reduce
// let singlevalue = arr.reduce((acc, val) => acc + val, 0);
// console.log(arr);
// console.log(singlevalue);

//portion of original
// let portion = arr.slice(2, 5); //includes the start and end
// console.log(arr, portion);

//merge array
// let newArr1 = [1, 2, 3, 4];
// let newArr2 = [11, 12, 13, 14];
// let mergeArr = newArr1.concat(newArr2);

// console.log(mergeArr);

//Flattening the original
let example = [1, [2, 3]];
let example2 = [1, [2, 3, [12, 13, [14, 15]]], [4, 5]];
// let newArr = example2.flat(); //by default 1 level
// let newArr = example2.flat(2); //can mention level
let newArr = example2.flat(Infinity); //define infinty for all level
// console.log(example2, newArr);

//flattening and maping only works for 1 level of dept
// let arr = [1, 2, 3];
// let result = arr.flatMap(x => [x, x * 2]);
// console.log(result);

//to get a array Index or methods that returns a array index
// let checkarr = [1, 2, 3, 10, 20, 40, 7];
// 1) indexOf() //takes the value and returns the index ,-1 if not present
// console.log(checkarr.indexOf(100)); //-1
// console.log(checkarr.indexOf(10)); //3

//2)findIndex() //based on the test condition
// console.log(checkarr.findIndex((el) => el >= 10));
// console.log(checkarr.findIndex((el) => el >= 100));
// console.log(checkarr.findIndex((el) => el >= 1));

//get a array element based on condition
// let checkarr = [1, 2, 3, 10, 20, 40, 7];
// 1)find
// console.log(checkarr.find((el) => el % 2 === 0));

//to check wheter something exiist or not which returns true or false
// let checkarr = [1, 2, 3, 10, 20, 40, 7];
// let checkarr2 = [-1, -2, 1, 2, 3, 10, 20, 40, 7];
// 1)includes
// console.log(checkarr.includes(10)); //t
// console.log(checkarr.includes(100)); //f

// //2)every
// console.log(checkarr.every((el) => el > 0)); //t
// console.log(checkarr.every((el) => el < 0)); //false
// //3)some
// console.log(checkarr2.some((el) => el > 0)); //t
// console.log(checkarr2.some((el) => el < 0)); //false

//to covert a array into a string with a seprator
// 1)join()
// console.log(checkarr2.join()); //by default comma seperated
// console.log(checkarr2.join("-"));
//to transform into a single value
// 1)reduce()
let sum = checkarr2.reduce((acc, cur) => (acc += cur), 0);
// console.log(sum);

//to loop over the arr
// 1)forEach()
let checkfor = checkarr2.forEach((el) => console.log(el));
// console.log(checkfor);

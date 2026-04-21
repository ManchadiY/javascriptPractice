"use strict";
console.log("build in methods of strings");

/*
Notes
1)strings are immutable 
2)str is indexable ,zero based 
3)sort is not aviable on str
4)empty string is false value
*/

let str1 = "yuvrajmanchadi";

//check the length or size of str
console.log(str1.length);

//get char based on index
console.log(str1.at(2)); // return v
console.log(str1.charAt(2)); // return v

//check wheter something exists
console.log(str1.includes("yuvraj")); //true
console.log(str1.indexOf("a"));
console.log(str1.lastIndexOf("a"));

//check starts and endwith
console.log(str1.startsWith("yuv")); //true
console.log(str1.endsWith("yuv")); //false

//transform the string
let str2 = " my name is yuvraj ";
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());
console.log(str2.trim()); //remove whitespaces from start and end
console.log(str2.trimStart());
console.log(str2.trimEnd());

//create a array from str based on split
console.log(str2.split(" "));

//extraction
console.log(str2.slice(2, 7));
console.log(str2.substring(2, 7));

//sort
// No, JavaScript strings do NOT have a sort() method
//we can conver the str in array and then apply sort and again convert into str
let sorted = str2.split(" ").sort().join(" ");
console.log(sorted);

//search ,can based on regex
// str2.search()

//replace
console.log(str2.replace("yuvraj", "yuvrajManchadi"));
console.log(str2.replaceAll(" ", ""));

//char from number
console.log(String.fromCharCode(65));

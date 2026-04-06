console.log("practice hoisting");

// 💡 Tip while solving:
// var → hoisted as undefined
// let & const → hoisted but in TDZ (Temporal Dead Zone)
// Function declarations → fully hoisted
// Function expressions → behave like variables
//basic
/*
console.log(a); //undefined
// console.log(b); //ReferenceError
// console.log(n); //ReferenceError
let b = "yuvraj";
const n = "yuv";
var a = 1;
function test() {
  console.log(a);
  var c = 2;
}
console.log(c); //ReferenceError
test();
console.log(e); //undefined
{
  var e = "yuvraj";
}
console.log(e); //yuvraj

*/
// var a = 1;
// function outer() {
//   console.log(a);

//   function inner() {
//     console.log(a);
//     var a = 3;
//   }

//   inner();
//   var a = 2;
// }
// outer();

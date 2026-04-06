// console.log("str practice");
// reverse a string
function revStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);

    result += str[i];
  }
  return result;
}
// console.log(revStr("javascript"));

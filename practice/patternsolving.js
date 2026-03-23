// console.log("hello welcome back");
//pattern1
/*
1234
1234
1234
1234
*/

function pattern1(n = 4) {
  // row
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

// pattern1();

/*
4321
4321
4321
4321
 */

// function pattern2(n = 4) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = n; j > 0; j--) {
//       row = row + j;
//     }
//     console.log(row);
//   }
// }

function pattern2BetterApproach(n = 4) {
  let row = "";

  // Build once
  for (let j = n; j > 0; j--) {
    row += j;
  }

  // Print n times
  for (let i = 1; i <= n; i++) {
    console.log(row);
  }
}

/*
123
456
789
*/

function pattern3(n = 3) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      count++;
      row += count;
    }
    console.log(row);
  }
}
// pattern3();

/* 
987
654
321
*/

function pattern4(n = 3) {
  let count = n * n;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += count;
      count--;
    }
    console.log(row);
  }
}

// pattern4();

/*

 *
 **
 ***
 ****

 */

function pattern5(n = 4) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*" + " ";
    }
    console.log(row);
  }
}

// pattern5();

/* 
1
22
333
4444
*/

function pattern6(n = 4) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}

// pattern6();
/*

1
23
456
78910

*/

function pattern7(n = 4) {
  // iteration
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += count + " ";
      count++;
    }
    console.log(row);
  }
}
// pattern7(4);

/*
1
23
345
4567 
*/

function pattern8(n = 4) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + j - 1;
    }
    console.log(row);
  }
}

// pattern8();

/*
1
21
321
4321
*/

function pattern9(n = 4) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i - j + 1;
    }
    console.log(row);
  }
}

// pattern9();

/*
AAA
BBB
BBB
*/

function pattern10(n = 3) {
  // let char = String.fromCharCode(65);
  for (let i = 1; i <= n; i++) {
    let row = "";
    let charno = 64 + i;
    for (let j = 1; j <= n; j++) {
      row += String.fromCharCode(charno);
    }
    console.log(row);
  }
  // console.log(char);
}
// pattern10();

// skipping all the char based pattern

/*
   *
  **
 ***
****

*/

function pattern11(n = 4) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (j > n - i) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

// pattern11();

/*
 ****
 ***
 **
 *
 */

function pattern12(n = 4) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern12();

/*

****
 ***
  **
   *

*/

function pattern13(n = 4) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    // spaces
    for (let j = 0; j < i - 1; j++) {
      row += " ";
    }

    // stars
    for (let k = 1; k <= n - i + 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern13();

/*
1111
 222
  33
   4
*/

function pattern14(n = 4) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i - 1; j++) {
      row += " ";
    }
    for (let k = 1; k <= n - i + 1; k++) {
      row += i;
    }
    console.log(row);
  }
}
// pattern14();

/*
   1
  22
 333
4444
*/

function pattern15(n = 4) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    // spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    // values of row
    for (let k = 1; k <= i; k++) {
      row += i;
    }
    console.log(row);
  }
}
// pattern15();

function pattern16(n = 4) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    // spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    // values of row
    for (let k = 1; k <= i; k++) {
      row += count;
      count++;
    }
    console.log(row);
  }
}
// pattern16();

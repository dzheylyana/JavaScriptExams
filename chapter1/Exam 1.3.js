//Exam 1.3

// Pattern1

let triangleH = 5;
function printPattern(n) {
  let dataContainer = "";
  // External loop
  for (let row = 1; row <= n; row++) {
    // Internal loop
    for (let col = 1; col <= row - 1; col++) {
      dataContainer += col; //add data to container
    }
    dataContainer += "\n"; //add new line
  }
  console.log(dataContainer);
}
printPattern(triangleH);

// //Patern 2

let triangleHeight = 6; //height of the triangle
function printPatternDoubleTriangle(n) {
  let dataContainer = "";
  // External loop takes care of columns
  for (let row1 = 1; row1 <= n; row1++) {
    // Internal loop takes care of rows
    for (let col1 = 1; col1 <= row1; col1++) {
      dataContainer += col1; //add data to container
    }
    dataContainer += "\n"; //add new line
  }
  for (let row2 = 1; row2 <= n - 1; row2++) {
    for (let col2 = 1; col2 <= n - row2; col2++) {
      dataContainer += col2;
    }
    dataContainer += "\n";
  }
  console.log(dataContainer);
}
printPatternDoubleTriangle(triangleHeight);

// Pattern 3
let trHeight = 5;
function printPatternReduction(n) {
  let string = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      string += col + " ";
    }
    for (let reductionCol = row - 1; reductionCol >= 1; reductionCol--) {
      string += reductionCol + " ";
    }
    string += "\n";
  }

  console.log(string);
}
printPatternReduction(trHeight);

//Pattern 4

function printPatern4(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += `${k} `;
    }
    str += "\n";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j <= i; j++) {
      str += " ";
    }
    for (let k = 1; k <= n - i; k++) {
      str += `${k} `;
    }
    str += "\n";
  }
  console.log(str);
}
printPatern4(4);

// Pattern 5


let n = 5; // height of pattern
let string = "";
let count = 1;
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += count;
    count++;
  }
  string += "\n";
}
console.log(string);
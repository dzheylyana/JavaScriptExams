// Exam 2.8
// Create a JavaScript function that accepts two arguments - an array with elements and a numeric value –
//  the weight.
// Part 1
// The function must return true or false if there is an element in the array that has the same weight
// (See Exam 1.5) as passed in the argument

const arr = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  { name: "john.doe", role: "admim" },
];
const weight = 10;

const weightCounter = (arr, weight) => {
  let stringWeight = 0;
  let numWeight = 0;
  let objWeight = 0;
  let funcWeight = 0;
  let undefWeight = 0;
  let booleanWeight = 0;
  // const arrElements = [];
  const arrCounter = [];
  arr.forEach((element) => {
    switch (typeof element) {
      case "object":
        if (element === null) {
          objCount = 2;
          arrCounter.push(objWeight);
          // arrElements.push(element);
        } else {
          objCount = 10;
          arrCounter.push(objWeight);
          // arrElements.push(element);
        }
        break;
      case "string":
        stringCount = 8;
        arrCounter.push(stringWeight);
        // arrElements.push(element);
        break;
      case "number":
        numCount = 4;
        arrCounter.push(numWeight);
        // arrElements.push(element);
        break;
      case "function":
        funcCount = 10;
        arrCounter.push(funcWeight);
        // arrElements.push(element);
        break;
      case "undefined":
        undefCount = 2;
        arrCounter.push(undefWeight);
        // arrElements.push(element);
        break;
      case "boolean":
        booleanCount = 4;
        arrCounter.push(booleanWeight);
        // arrElements.push(element);
        break;
    }
  });
  // console.log(arrCounter);
  // console.log(arrElements);
  for (let index = 0; index < arrCounter.length; index++) {
    if (arrCounter[index] === weight) {
      return true;
    }
  }
  return false;
};

console.log(weightCounter(arr, weight));

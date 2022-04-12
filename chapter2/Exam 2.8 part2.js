// Part 2
// Another function with similar parameters must return true or false if all elements in the array have a
//  higher weight than passed argument

const arr = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  { name: "john.doe", role: "admim" },
];
const weight = 1;
let sum = 0;
const weightCounter = (arr, weight) => {
  let stringCount = 0;
  let numCount = 0;
  let objCount = 0;
  let funcCount = 0;
  let undefCount = 0;
  let booleanCount = 0;
  const arrCounter = [];
  arr.forEach((element) => {
    switch (typeof element) {
      case "object":
        if (element === null) {
          objCount = 2;
          arrCounter.push(objCount);
        } else {
          objCount = 10;
          arrCounter.push(objCount);
        }
        break;
      case "string":
        stringCount = 8;
        arrCounter.push(stringCount);
        break;
      case "number":
        numCount = 4;
        arrCounter.push(numCount);
        break;
      case "function":
        funcCount = 10;
        arrCounter.push(funcCount);
        break;
      case "undefined":
        undefCount = 2;
        arrCounter.push(undefCount);
        break;
      case "boolean":
        booleanCount = 4;
        arrCounter.push(booleanCount);
        break;
    }
  });

  const isBelowThreshold = (currentValue) => currentValue > weight;
  console.log(arrCounter.every(isBelowThreshold));
};
weightCounter(arr, weight);
// console.log(sum);

// Exam 2.4
// Create a JavaScript function that accepts two arguments - an array with numbers and a number and:
// Part 1
// Returns the sum of the elements in the array that have value higher than the number passed as argument

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const higherThan = 4;
let sum = 0;
function calculate(arr1, higherThan) {
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] > higherThan) {
      sum += arr1[index];
    }
  }
}
calculate(arr1, higherThan);
console.log(`The sum is ${sum}`);

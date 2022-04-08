const arr1 = [1, 2, 3, 4, 5, 6, 7];
const divisible = 2;
let newArr = [];

function calculate(arr1, divisible) {
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] % divisible === 0) {
      newArr.push(arr1[index]);
    }
  }
  return newArr;
}
calculate(arr1, divisible);
console.log(
  `The new array which numbers are divisible by ${divisible} is ${newArr}`
);

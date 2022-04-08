//Exam 1.1
// Write a JavaScript app that accepts an array of numbers and returns an integer indicating the count of odd elements in the array.
let arr = [6, 4, 3, 1, 9, 44, 33, 2];

function OddCount(arr) {

  let numberOdd = 0;

  arr.forEach(function (item, index, arr) {
    if (item % 2 !== 0) {
      numberOdd++;
    }
  });
  console.log(numberOdd);
}
OddCount(arr);

//вариант 2
let array1 = [6, 4, 3, 1, 9, 44, 33, 2];

function OddCount(array1){
  numberOdd=0;
for(let step=0; step<array1.length+1;step++){
if(step%2!==0){
    numberOdd++
}
}
console.log(numberOdd)
}
OddCount(array1);

//вариант 3
let array2 = [6, 4, 3, 1, 9, 44, 33, 2];

function OddCount(array2){
    numberOdd=0;
const count=array2.filter(num=>num%2!==0).length
console.log(count);}
OddCount(array2);
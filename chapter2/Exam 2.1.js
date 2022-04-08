// Exam 2.1
// Expand the Array method and implement the native array.sort method.
// The method accepts a function handler as a single parameter
//  that defines how a and b are compared and the method extension returns the sorted array.
//  The sorting must work with any data types in the array. Result should be the same array but sorted!

const sortArray = (arr, fn) => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len-1; j++) {
      if (!fn(arr[j], arr[j + 1])) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const array = [6, 4, 3, 1, 9, 44, 33, 2];
const fn = (left, right) => {
  return left < right;
};
console.log(sortArray(array, fn));

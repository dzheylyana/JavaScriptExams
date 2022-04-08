//Exam 1.2
// Write a JavaScript app that performs a bubble sort on an array of numbers that is passed as an argument and the result is a new instance that is sorted. Do not use the native array.sort method!
array = [6, 4, 3, 1, 9, 44, 33, 2];

function bblSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
}

bblSort(array);



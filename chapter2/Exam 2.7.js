// Exam 2.7
// Create a random JavaScript function that takes an array of numbers, randomizes their position and
//  returns an array with the longest sequence of elements that ascend in numeric order.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const randomize = (arr) => {
  arr.sort((a, b) => 0.5 - Math.random());
  console.log(arr);
  let result = [];
  let tempArray = [];
  let getTheLongestNumSequence = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      tempArray.push(arr[i]);
    } else if (arr[i] > arr[i + 1]) {
      tempArray.push(arr[i]);
      result.push(tempArray);
      tempArray = [];
    } else {
      tempArray.push(arr[i]);
      result.push(tempArray);
      tempArray = [];
    }
  }
  for (let num = 0; num < result.length; num++) {
    if (getTheLongestNumSequence.length < result[num].length) {
      getTheLongestNumSequence = result[num];
    }
  }

  return getTheLongestNumSequence;
};

console.log(randomize(arr));

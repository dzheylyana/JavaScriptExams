// Exam 2.3
// Create a JavaScript function that accepts two parameters – array and an array
// Part 1
// The function should append to every member of the array type of the first array only the elements in
//  the second array that are “truthy”.

const arr1 = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];

const arr2 = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  undefined,
  6,
];

function appender(arr1, arr2) {
  const firstArrEl = arr1.find((element) => Array.isArray(element));
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i]) {
      firstArrEl.push(arr2[i]);
    }
  }
  return arr1;
}
console.log(appender(arr1, arr2));

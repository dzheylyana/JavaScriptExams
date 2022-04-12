// Exam 2.2
// Create a JavaScript function that accepts two parameters - an array and an object and:
// Part 1
// Returns true or false if this object is added in the array or not (compare reference).

function containsObject(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === obj) {
      return true;
    }
  }

  return false;
}

const person = { name: "John Doe" };
const arr = [
  6,
  "Test",
  "value",
  person,
  1,
  undefined,
  null,
  () => {
    console.log("Hello,  world!");
  },
  { count: 5 },
  { name: "John Doe" },
];
console.log(containsObject(arr, person));

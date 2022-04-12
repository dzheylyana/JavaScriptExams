// Part 2
// Expand the function to perform a deep search as well (find the object in every property of each
//  object recursively)

const isObj = (obj) => typeof obj === "object" && obj !== null;

const containsObj = (arr, obj) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === obj) {
      return true;
    }
    if (isObj(arr[i]) && containsObj(Object.values(arr[i], obj))) {
      return true;
    }
  }
  return false;
};

const person = { name: "John Doe" };
const array = [
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
  { name: "John Doe", person: person },
];
console.log(containsObj(array, person));

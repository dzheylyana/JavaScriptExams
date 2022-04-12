// Exam 2.5
// Create a JavaScript function that accepts an array as the argument and
// returns the same array with every arr in the array flattened. This means, each array and arr
// property of the members of the array is replaced by its elements.
const arr = [
  {
    person: {
      firstName: "John",
      lastName: "Doe",
      role: "Admin",
    },
    permissions: ["read", "write", "special"],
    age: 42,
    competencies: [
      { skill: "JavaScript", level: "junior" },
      { skill: "css", level: "junior" },
    ],
  },
  "sunny day",
  5,
];

function flattenObj(arr) {
  let result = {};
  function func() {
    for (const item in arr) {
      const temp = flattenObj(arr[item]);
      for (const j in temp) {
        result[item + "_" + j] = temp[j];
      }
      result[item] = arr[item];
    }
  }
  if (typeof arr === "object") {
    func();
  }
  return result;
}
function func1() {
  return arr.map((element) => flattenObj(element));
}

console.log(func1(arr));

// Part 2
// The function should append to the array elements of the first array the following elements from the
//  second array – if the index of the array child in the first array is even, append only the values of
//   the second array that are of Array type (unpacking them and appending their content), if the index is
//    uneven – append the object elements from the second array.

const arr1 = [
  [1, 2, 3, 4],
  ["one", "two"],
  [5, 6],
];

const arr2 = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  { role: "admin" },
  { name: "John" },
  [1000, 1001],
];
function appender(arr1, arr2) {
  const objects = [];
  const arrays = [];
  for (let index = 0; index < arr2.length; index++) {
    if (Array.isArray(arr2[index])) {
      arrays.push(arr2[index]);
    } else if (
      typeof arr2[index] === "object" &&
      arr2[index] !== "function" &&
      arr2[index] !== null
    )
      objects.push(arr2[index]);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      arr1[i] = arr1[i].concat(arrays);
    } else {
      arr1[i] = arr1[i].concat(objects);
    }
  }
  return arr1;
}

console.log(appender(arr1, arr2));

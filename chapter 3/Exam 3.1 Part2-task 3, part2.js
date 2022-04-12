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
Array.prototype.appender = function (arr1) {
  const objects = [];
  const arrays = [];
  for (let index = 0; index < this.length; index++) {
    if (Array.isArray(this[index])) {
      arrays.push(this[index]);
    } else if (
      typeof this[index] === "object" &&
      this[index] !== "function" &&
      this[index] !== null
    )
      objects.push(this[index]);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      arr1[i] = arr1[i].concat(arrays);
    } else {
      arr1[i] = arr1[i].concat(objects);
    }
  }
  return arr1;
};

console.log(arr2.appender(arr1));

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

Array.prototype.appender = function (arr1) {
  const firstArrEl = arr1.find((element) => Array.isArray(element));
  for (let i = 0; i < this.length; i++) {
    if (this[i]) {
      firstArrEl.push(this[i]);
    }
  }
  return arr1;
};
console.log(arr2.appender(arr1));

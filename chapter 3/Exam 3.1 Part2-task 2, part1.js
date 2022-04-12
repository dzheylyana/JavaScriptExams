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

Array.prototype.containsObject = function (obj) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === obj) {
      return true;
    }
  }

  return false;
};

console.log(arr.containsObject(person));

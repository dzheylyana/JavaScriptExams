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
const isObj = (obj) => typeof obj === "object" && obj !== null;
Array.prototype.containsObj = function (obj) {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    if (this[i] === obj) {
      return true;
    }
    if (isObj(this[i]) && containsObj(Object.values(this[i]), obj)) {
      return true;
    }
  }
  return false;
};

console.log(array.containsObj(person));

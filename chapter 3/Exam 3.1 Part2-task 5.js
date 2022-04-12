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

Array.prototype.flattenObj = function () {
  let result = {};

  for (const i in this) {
    if (typeof this[i] === "object") {
      const temp = flattenObj(this[i]);
      for (const j in temp) {
        result[i + "_" + j] = temp[j];
      }
    } else {
      result[i] = this[i];
    }
  }
  return result;
};

console.log(arr.flattenObj());

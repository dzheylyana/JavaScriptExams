// Exam 2.5
// Create a JavaScript function that accepts an array as the argument and
// returns the same array with every arr in the array flattened. This means, each array and arr
// property of the members of the array is replaced by its elements.

const flatIterable = (item, objKey) => {
  return Object.entries(item).reduce((acc, [key, value]) => {
    if (typeof value === "object") {
      const deepKey = objKey ? `${objKey}_${key}` : key;
      return { ...acc, ...flatIterable(value, deepKey) };
    }
    const formattedKey = objKey ? `${objKey}_${key}` : key;
    return { ...acc, [formattedKey]: value };
  }, {});
};

const flattened = (arr) => {
  return arr.map((item) => {
    if (typeof item === "object") {
      return flatIterable(item);
    }
    return item;
  });
};

const input = [
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
flattened(input);

// Exam 1.5
// Create a JavaScript function that calculates which of two objects passed as parameters is “heavier”.
// Part 1
// Iterate over each of the first-level properties of the objects and calculate the heaviness of the object by the following formula:

const obj = {
  cards: 6,

  label: "Test",

  description: "value",

  type: 1,

  role: undefined,

  person: { name: "John Doe" },

  skills: null,

  report: () => {
    console.log("Hello,  world!");
  },

  experience: { count: 5 },
};

const weightCounter = (obj) => {
  let counter = 0;

  Object.values(obj).forEach((item) => {
    if (typeof item === "string") {
      counter += 8;
    } else if (typeof item === "number") {
      counter += 4;
    } else if (!item && typeof item === "object") {
      counter += 2;
    } else if (
      typeof item === "object" ||
      typeof item === "function" ||
      Array.isArray(item)
    ) {
      counter += 10;
    } else if (typeof item === undefined) {
      counter += 2;
    } else if (typeof item === null) {
      counter += 2;
    } else if (typeof item === "boolean") {
      counter += 4;
    }
  });

  console.log(counter);
};

weightCounter(obj);

//вариант 2

const object = {
  cards: 6,
  label: "Test",
  description: "value",
  type: 1,
  role: undefined,
  person: { name: "John Doe" },
  skills: null,
  report: () => {
    console.log("Hello,  world!");
  },
  experience: { count: 5 },
};

function weightElements(obj) {
  let counter = 0;

  Object.values(obj).forEach((val) => {
    switch (typeof val) {
      case "object":
        //if
        //date, array, object, null
        if (val === null) {
          counter += 2;
        } else if (val instanceof Date && !isNaN(val.valueOf())) {
          counter += 5;
        } else {
          counter += 10;
        }

        break;
      case "string":
        counter += 8;

        break;
      case "number":
        counter += 4;

        break;

      case "boolean":
        counter += 4;

        break;
      case "function":
        counter += 10;

        break;
    }
  });
  console.log(counter);
}
weightElements(object);

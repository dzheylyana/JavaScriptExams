// Part 4:

const findPropOfObject = (value, person) => {
  for (const [key] of Object.entries(value)) {
    if (value[key] === person[key]) {
      continue;
    } else return false;
  }

  return true;
};

const findObjInArray = (arr, person) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      if (
        arr[i] !== null &&
        !Array.isArray(arr[i]) &&
        !(arr[i] instanceof Date)
      ) {
        if (arr[i] === person) {
          return true;
        } else {
          for (const value of Object.values(arr[i])) {
            if (typeof value === "object") {
              if (value === person) {
                return true;
              } else break;
            }
          }
        }

        for (const [key] of Object.entries(arr[i])) {
          if (typeof arr[i][key] === "object") {
            return findPropOfObject(arr[i][key], person[key]);
          }
          if (arr[i][key] === person[key]) {
            continue;
          } else break;
        }
      }
    }
  }
  return false;
};
const person = {
  firstName: "John",
  lastName: "Doe",
  role: {
    type: "Admin",
    id: 2,
  },
};

console.log(
  findObjInArray(
    [
      6,
      "Test",
      "value",
      1,
      undefined,
      null,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      {
        firstName: "John",
        lastName: "Doe",
        role: { type: "Admin", id: 2 },
      },
    ],
    person
  )
);

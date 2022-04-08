// Exam 1.4
// Create a JavaScript function that accepts array of elements of random type and it returns an object with the following structure: 
const array = [
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
];

function countElementsInArray(array) {
  const counter = {
    nullCount: 0,
    objectsCount: 0,
    stringsCount: 0,
    numericsCount: 0,
    arraysCount: 0,
    undefinedCount: 0,
    datesCount: 0,
    booleansCount: 0,
    functions: 0,
  };

  for (const val of array) {
    switch (typeof val) {
      case "undefined":
        counter.undefinedCount++;
        break;
      case "object":
        //if
        //date, array, object, null
        if (val === null) {
          counter.nullCount++;
        } else if (Array.isArray(val)) {
          counter.arraysCount++;
        } else if (val instanceof Date && !isNaN(val.valueOf())) {
          counter.datesCount++;
        } else {
          counter.objectsCount++;
        }
        break;
      case "string":
        counter.stringsCount++;
        break;
      case "number":
        counter.numericsCount++;
        break;

      case "boolean":
        counter.booleansCount++;
        break;
      case "function":
        counter.functions++;
        break;
    }
  }
  console.log(counter);
}
countElementsInArray(array);


//вариант 2
const array2 = [
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
  ];
  
  function countElementsInArray(array2) {
    const counter2 = {
      nullCount: 0,
      objectsCount: 0,
      stringsCount: 0,
      numericsCount: 0,
      arraysCount: 0,
      undefinedCount: 0,
      datesCount: 0,
      booleansCount: 0,
      functions: 0,
    };
  
    for (const val of array2) {
      if (val === null) {
        counter2.nullCount++;
        continue;
      } else if (
        (typeof val === "object" && !Array.isArray(val)) ||
        val == undefined
      ) {
        counter2.objectsCount++;
        continue;
      } else if (typeof val === "string") {
        counter2.stringsCount++;
        continue;
      } else if (typeof val === "number") {
        counter2.numericsCount++;
        continue;
      } else if (Array.isArray(val)) {
        counter2.arraysCount++;
        continue;
      } else if (val === undefined) {
        counter2.undefinedCount++;
        continue;
      } else if (val instanceof Date && !isNaN(val.valueOf())) {
        counter2.datesCount++;
        continue;
      } else if (typeof val === "boolean") {
        counter2.booleansCount++;
        continue;
      } else if (typeof val === "function") {
        counter2.functions++;
        continue;
      }
    }
    console.log(counter2);
  }
  countElementsInArray(array2);
  
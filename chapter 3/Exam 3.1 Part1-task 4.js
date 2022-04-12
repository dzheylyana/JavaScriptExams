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

Array.prototype.countElementsInArray = function () {
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

  for (const val of this) {
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
};
console.log(array.countElementsInArray());

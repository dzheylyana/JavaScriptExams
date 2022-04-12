const array1 = [6, 4, 3, 1, 9, 44, 33, 2];

Array.prototype.OddCount = function () {
  let numberOdd = 0;
  for (let step = 0; step < this.length + 1; step++) {
    if (step % 2 !== 0) {
      numberOdd++;
    }
  }
  return numberOdd;
};
array1.OddCount();
console.log(array1.OddCount());

array = [6, 4, 3, 1, 9, 44, 33, 2];

Array.prototype.bblSort = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

// array.bblSort();
console.log(array.bblSort());

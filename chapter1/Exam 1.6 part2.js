// Exam 1.6 Part2
// Extend the function in Part 1 by adding a second argument that is a character. The function should now
// return the longest word that starts with the second character.

const findLongestWord = (str, char) => {
  return str
    .toLowerCase()
    .split(" ")
    .reduce(
      (previousValue, currentValue) =>
        previousValue.length < currentValue.length &&
        currentValue.startsWith(char.toLowerCase())
          ? currentValue
          : previousValue,
      ""
    );
};
console.log(findLongestWord("What we do in life echoes to eternity!", "w"));

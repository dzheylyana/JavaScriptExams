// Exam 1.6
// Create a JavaScript function that reads a string and finds the longest word.
// Part 1
// The function should accept one argument and return the longest word found. A word is a sequence of alphabetical characters (a to Z). Delimiters (. , ; ! ? etc.) and special characters (@, €, $ etc.) are not considered alphabetical characters.

const findLongestWord = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .reduce(
      (previousValue, currentValue) =>
        previousValue.length < currentValue.length
          ? currentValue
          : previousValue,
      ""
    );
};
console.log(findLongestWord("What we do in life echoes to eternity!"));

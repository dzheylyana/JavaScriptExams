// Exam 1.7
// Create a JavaScript function that accepts one argument - a Date object and returns the string representation of this object in the ISO 8601 format.
const padZero = (num) => num.toString().padStart(2, "0");

const toIsoString = (date) => {
  const year = date.getFullYear();
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1);
  const hours = padZero(date.getHours());
  const min = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());
  const millisec = padZero(date.getMilliseconds());

  return `${year}-${month}-${day}T${hours}:${min}:${seconds}.${millisec}Z`;
};

const date = new Date();
const strDate = toIsoString(date);
console.log(strDate);
 
// Exam 3.2
// Extend the Date class with the functionality developed in Exams 1.8 and 1.9

function bankersRound(num) {
  if (num % 1 <= 0.5) return Math.trunc(num);

  return Math.round(num);
}

let oldDate = new Date("2022-04-02 10:00:00");
let newDate = new Date();

Date.prototype.timeDfiff = function () {
  let newResultOfDate = newDate.getTime();
  let OldResultOfDate = this.getTime();
  let diffTime = newResultOfDate - OldResultOfDate;
  let typeOfTime = "We don't find result";
  let count = 0;

  if (diffTime / 1000 <= 59) {
    count = diffTime / 1000;
    typeOfTime = "sec";
  } else if (diffTime / (1000 * 60) <= 59) {
    count = diffTime / (1000 * 60);
    typeOfTime = "min";
  } else if (diffTime / (1000 * 60 * 60) <= 24) {
    count = diffTime / (1000 * 60 * 60);
    typeOfTime = "hours";
  } else if (
    diffTime / (1000 * 60 * 60 * 24) >= 1 &&
    diffTime / (1000 * 60 * 60 * 24) <= 7
  ) {
    count = diffTime / (1000 * 60 * 60 * 24);
    typeOfTime = "days";
  } else if (diffTime / (1000 * 60 * 60 * 24 * 7) <= 4) {
    count = diffTime / (1000 * 60 * 60 * 24 * 7);
    typeOfTime = "week";
  } else if (diffTime / (1000 * 60 * 60 * 24 * 30) <= 12) {
    count = diffTime / (1000 * 60 * 60 * 24 * 30);
    typeOfTime = "months";
  } else if (diffTime / (1000 * 60 * 60 * 24 * 365) >= 1) {
    count = diffTime / (1000 * 60 * 60 * 24 * 365);

    typeOfTime = "year";
  }

  console.log(`${bankersRound(count)} ${typeOfTime} ago`);
};

const padZero = (num) => num.toString().padStart(2, "0");

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const fullDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getMonthShortName(date) {
  const index = date.getMonth();
  return month[index].substring(0, 3);
}

function getMonthLongName(date) {
  const index = date.getMonth();
  return month[index];
}
function formatAMPM(date) {
  if (date.getHours() <= 12) {
    return "PM";
  } else {
    return "AM";
  }
}
function formatAMPMwithSmallLetters(date) {
  if (date.getHours() <= 12) {
    return "am";
  } else {
    return "pm";
  }
}
function quarter(date) {
  return Math.floor((date.getMonth() + 3) / 3);
}
function dayOfMonth(date) {
  let day = date.getDate();
  return day > 0
    ? ["th", "st", "nd", "rd"][
        (day > 3 && day < 21) || day % 10 > 3 ? 0 : day % 10
      ]
    : "";
}

function getDayShortName(date) {
  const dayName = date.getDay();
  return fullDays[dayName].substring(0, 3);
}

function getDayFullName(date) {
  const dayName = date.getDay();
  return fullDays[dayName];
}

var weekOfYear = function (date) {
  var d = new Date(+date);
  d.setHours(0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));

  return Math.ceil(((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
};
function weekOfYearWithPad(date) {
  var d = new Date(+date);
  d.setHours(0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  return padZero(
    Math.ceil(((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7)
  );
}
function stOfWeek(date) {
  var d = new Date(+date);
  d.setHours(0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const st = Math.ceil(
    ((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7
  );
  return st > 0
    ? ["th", "st", "nd", "rd"][(st > 3 && st < 21) || st % 10 > 3 ? 0 : st % 10]
    : "";
}
function MyTimeZone(date) {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
const object = {
  Q: quarter,
  A: formatAMPM,
  MMMM: getMonthLongName,
  MMM: getMonthShortName,
  MM: (date) => padZero(date.getMonth()),
  M: (date) => date.getMonth(),
  DD: (date) => padZero(date.getDate()),
  D: (date) => date.getDate(),
  YYYY: (date) => date.getFullYear(),
  HH: (date) => padZero(date.getHours()),
  H: (date) => date.getHours(),
  mm: (date) => padZero(date.getMinutes()),
  m: (date) => date.getMinutes(),
  ss: (date) => padZero(date.getSeconds()),
  a: formatAMPMwithSmallLetters,
  o: dayOfMonth,
  WW: weekOfYearWithPad,
  Wo: stOfWeek,
  W: weekOfYear,
  dddd: getDayFullName,
  ddd: getDayShortName,
  z: MyTimeZone,
};

function format(date, sentence) {
  return Object.entries(object).reduce((result, [keyValue, fun]) => {
    return result.replace(keyValue, fun(date));
  }, sentence);
}

oldDate.timeDfiff();
Date.prototype.formatDate = format;
const date = new Date();
const sentence = "YYYY-MMMM-dddd WW HH:mm:ss a Q z Is my proof of concept!";

console.log(date.formatDate(date, sentence));

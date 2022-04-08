// Exam 1.9
// Create a JavaScript function that accepts two parameters - 
// a date object and a string. The result of the function should be a 
// formatted string representation of the date object. The string indicates the format the date object 
// must be transformed into.
// Part1
const padZero = (num) => num.toString().padStart(2, "0");

const object = {
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
  A:formatAMPM,
  a:formatAMPMwithSmallLetters
};

function formatAMPM(date) {
    
     if(date.getHours()<=12){
       return 'PM'
     }else{
          return "AM"
     }
   }
   function formatAMPMwithSmallLetters(date) {
    
     if(date.getHours()<=12){
       return 'am'
     }else{
          return "pm"
     }
   }
 
function formatDate(date, sentence) {
  return Object.entries(object).reduce((result, [keyValue, fun]) => {
    return result.replace(keyValue, fun(date));
  }, sentence);
}

const date = new Date();
const sentence = "YYYY-M-DD HH:mm:ss a Is my proof of concept!";

console.log(formatDate(date, sentence));

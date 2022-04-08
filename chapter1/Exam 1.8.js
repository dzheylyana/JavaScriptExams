
function bankersRound(num) {
  if (num % 1 <= 0.5) return Math.trunc(num);

  return Math.round(num);
}

let oldDate = new Date( "2022-04-02 10:00:00");
  let newDate = new Date();
 

const timeDfiff = () => {
  let newResultOfDate = newDate.getTime();
  let OldResultOfDate = oldDate.getTime();
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
timeDfiff();

 
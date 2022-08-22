class clasicWatch {
  constructor(date = new Date(), dateFormat = null, timeZone = null) {
    this.date = date;
    this.dateFormat = dateFormat;
    this.timeZone = timeZone;
  }
  showTime = (dateFormat = null, timeZone = null) => {
    const padZero = (num) => num.toString().padStart(2, "0");
    const dateTokens = {
      YYYY: (date) => date.getFullYear(),
      MM: (date) => padZero(date.getMonth() + 1),
      M: (date) => date.getMonth(),
      DD: (date) => padZero(date.getDate()),
      D: (date) => date.getDate(),
      HH: (date) => padZero(date.getHours()),
      H: (date) => date.getHours(),
      mm: (date) => padZero(date.getMinutes()),
      m: (date) => date.getMinutes(),
      ss: (date) => padZero(date.getSeconds()),
      s: (date) => date.getSeconds(),
    };
    const time = () => {
      const hours = this.date.getHours();
      const minutes = this.date.getMinutes();
      const seconds = this.date.getSeconds();
      return `${hours}:${minutes}:${seconds}`;
    };
    const tokenFill = (date, dateFormat) => {
      return Object.entries(dateTokens).reduce((result, [token, func]) => {
        return result.replace(token, func(date));
      }, dateFormat);
    };

    let interval = 0;
    if (!dateFormat && !timeZone) {
      interval = setInterval(() => {
        this.date = new Date();
        console.log(time());
      }, 1000);
    } else if (dateFormat && !timeZone) {
      interval = setInterval(() => {
        this.date = new Date();
        console.log(tokenFill(this.date, dateFormat));
      }, 1000);
    } else if (dateFormat && timeZone) {
      interval = setInterval(() => {
        this.date = new Date();
        console.log(
          timeInDifferentTimezones(tokenFill(this.date, dateFormat), timeZone)
        ),
          1000;
      });
    }
  };
}

const watch = new clasicWatch();
console.log(watch.showTime("YYYY-MM-DD HH:mm:ss"));

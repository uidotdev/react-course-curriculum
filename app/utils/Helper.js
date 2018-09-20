let daysTable = {
  "0": "Monday",
  "1": "Tuesday",
  "2": "Wednesday",
  "3": "Thursday",
  "4": "Friday",
  "5": "Saturday",
  "6": "Sunday"
}

let monthsTable = {
  "0": "January",
  "1": "February",
  "2": "March",
  "3": "April",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "August",
  "8": "September",
  "9": "October",
  "10": "November",
  "11": "December"
}

const parseDate = (unixTimeStamp) => {
  let date = new Date(unixTimeStamp * 1000);
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getYear();
  let currentDay = daysTable[day];
  let currentMonth = monthsTable[month]
  return date.toLocaleString()
}

const parseTemp = (temp) => {
 {return ((temp - 273.15)* 1.8000 + 32.00)}
};

module.exports = {
  parseDate: parseDate,
  parseTemp: parseTemp
}

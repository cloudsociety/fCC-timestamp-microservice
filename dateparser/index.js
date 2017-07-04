var moment = require('moment');

var dateParser = (dateParam) => {
  var potentialDate = null;

  // using `new Date` to avoid future parse errors
  if (moment(new Date(dateParam)).isValid()) {
    potentialDate = moment(new Date(dateParam));
  } else if (moment(parseInt(dateParam)).isValid()){
    potentialDate = moment(parseInt(dateParam));
  }
  var natural = potentialDate === null ? null : potentialDate.format('MMMM D, YYYY');
  var unix = potentialDate === null ? null : potentialDate.valueOf();

  return {natural,unix};
}

module.exports = {
  dateParser
};

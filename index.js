var express = require('express');
var {dateParser} = require('./dateparser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/:date', (req,res) => {
  const dateParam = req.params.date;
  const dateObject = dateParser(dateParam);
  res.send(dateObject);
})


app.listen(PORT, function () {
  console.log(`Express server is up on port ${PORT}`);
});


module.exports = {
  app
};

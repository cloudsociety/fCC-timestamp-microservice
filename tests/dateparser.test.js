var expect = require('expect');

var {dateParser} = require('../dateparser/index.js');

describe('DateParser', function() {
  it('should return valid object with valid natural date', function() {
    var res = dateParser('2017-03-02');
    expect(res).toInclude({
      natural: 'March 2, 2017',
      unix: 1488412800000
    });
  });

  it('should return valid object with valid unix timestamp', function() {
    var res = dateParser('1467331200000');
    expect(res).toInclude({
      natural:"July 1, 2016",
      unix: 1467331200000
    });
  });

  it('should return null object with invalid date', function() {
    var res = dateParser('alsjhfg');
    expect(res).toInclude({
      natural: null,
      unix: null
    });
  });
});

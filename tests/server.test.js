var request = require('supertest');
var expect = require('expect');

var {app} = require('../index.js');

describe('Server', () => {
  describe('GET /', () => {
    it('should return index.html response', (done) => {
      request(app)
      .get('/')
      .expect(200)
      .end(done);
    });
  });
  describe('GET /:date', () => {
    it('should return valid date object', (done) => {
      request(app)
      .get('/2017-03-02')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          natural: 'March 2, 2017',
          unix: 1488412800000
        });
      })
      .end(done);
    });

    it('should return invalid date object', (done) => {
      request(app)
      .get('/poiuyt')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          natural: null,
          unix: null
        });
      })
      .end(done);
    });
  });
});

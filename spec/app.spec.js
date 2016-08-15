var  app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:3000/";


describe("Express Server API", function () {
  describe('should return users json on get /users', function() {
    it("returns status code 200", function (done) {
      supertest(app)
        .get('/profile')
        .set('Accept', 'text/html')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it("returns a correct json format", function (done) {
      supertest(app)
        .get('/profile')
        .expect({
          name: 'Lin Minghan',
          email: 'minghanmail@yahoo.com',
          hobbies: 'blah blah',
          description: 'blah blah blah'
        }, done);
    });

  });
});

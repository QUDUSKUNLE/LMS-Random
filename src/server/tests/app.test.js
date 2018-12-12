import chai from 'chai';
import assert from 'assert';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import server from '../../..';
import userData from './mockData';

dotenv.config();
chai.should();
const { expect } = chai;
chai.use(chaiHttp);



/**
 * @test for RandomPhoneNumberController
 */
describe('LMS Random controller', () => {
  const { user } = userData;
  let token;

  describe('', () => {
    let token;
    before((done) => {
      chai.request(server)
        .get('/api/v1/token?admin=admin')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
    it('should get home message', (done) => {
      chai.request(server)
        .get('/')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          res.should.have.status(200);
          assert.equal('LMS Home', res.body.home);
          done();
        });
    });
    it('should allow admin to get token', (done) => {
      chai.request(server)
        .get('/api/v1/token?admin=admin')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          res.should.have.status(200);
          assert.equal(true, res.body.success);
          done();
        });
    });
    it(
      'should return status 401 if password request query is not admin',
      (done) => {
        chai.request(server)
          .get('/api/v1/token?admin=admi')
          .set('Content-Type', 'application/json')
          .end((err, res) => {
            res.should.have.status(401);
            expect(res.body.success).to.eql(false);
            res.body.error.should
              .equals('Unauthorized to carry out this operation');
            done();
          });
      }
    );
    it(
      'should return status 403 with no valid toekn provided',
      (done) => {
        chai.request(server)
          .post('/api/v1/phone-numbers')
          .set('x-access-token', '')
          .type('application/json')
          .end((err, res) => {
            res.should.have.status(403);
            res.body.should.have.property('error')
              .equals('No valid token provided');
            done();
          });
      }
    );
    it('should return status 401 with expired token', (done) => {
      chai.request(server)
        .post('/api/v1/phone-numbers')
        .set('Content-Type', 'application/json')
        .set('x-access-token', user.expiredToken)
        .end((err, res) => {
          res.should.have.status(401);
          assert.equal('JsonWebTokenError', res.body.name);
          res.body.should.have.property('message')
            .equals('invalid signature');
          done();
        });
    });
    it(
      'should return status 201 if admin sends a valid token',
      (done) => {
        chai.request(server)
          .post('/api/v1/phone-numbers')
          .set('Content-Type', 'application/json')
          .set('x-access-token', token)
          .end((err, res) => {
            res.should.have.status(201);
            assert.equal(true, res.body.success);
            done();
          });
      }
    );
    it('should return total count of phone numbers created', (done) => {
      chai.request(server)
        .get('/api/v1/counts')
        .set('Content-Type', 'application/json')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.success).to.eql(true);
          done();
        });
    });
  });
});

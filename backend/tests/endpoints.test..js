const chai = require('chai');
const supertest = require('supertest');
const app = require('../server/server');
const Users = require('../database/models/users');
const mongoose = require('mongoose');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect();

chai.use(chaiHttp);

describe('auth endpoints', () => {
  it('should register new users, login and delete', (done) => {
    const name = 'test1';
    const username = 'testy1';
    const email = 'testyuh@test.tt';
    const password = 'password';
    const body = { name, username, email, password };
    chai.request(app)
      .post('/api/users/register')
      .send(body)
      .end((err, res) => {
        if (err) throw err;
        res.should.have.status(200);

        chai.request(app)
          .post('/api/users/login')
          .send({
            username,
            password,
          })
          .end((err, res) => {
            if (err) throw err;
            res.should.have.status(200);
            res.body.user.should.have.property('token');

            chai.request(app)
              .put(`/api/users/deleteUser/${res.body.user._id}`)
              .end((err, res) => {
                if (err) throw err;
                res.should.have.status(200);
                console.log(res)
                res.text.should.equal('User has been deleted');
                done();
              });
          });
      });
  });
});
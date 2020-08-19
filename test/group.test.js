const request = require('supertest');
const Group = require('../models/group');
const app = require('../app');

beforeAll(async() => {
  await Group.destroy({
      where: {}
  })
})


it('Should create group expecting status code 201', async (done) => {
    await request(app).post('/group')
    .send({
        name: "GroupTestExample"
    })
    .expect(201);
    done();
})

it('Response should status code 409 which is group already exist', async (done) => {
     let res =await request(app).post('/group')
    .send({
        name: "GroupTestExample"
    });
    expect(res.body).toHaveProperty('error');
    expect(res.statusCode).toEqual(409);
    done();
})
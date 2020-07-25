const request = require('supertest');
const app = require('../app');
const Group = require('../models/group');

beforeAll(async () => {
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

it('Response should status code 409 means group already exist', () => {
    let res = await request(app).post('/group')
    .send({
        name: "GroupTestExample"
    });
    expect(res.body).toHaveProperty('error');
    expect(res.statusCode).toEqual(409);
})



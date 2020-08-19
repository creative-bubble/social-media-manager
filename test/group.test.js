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

it('Response should status code 409 means group already exist', async (done) => {
    let res = await request(app).post('/group')
                    .send({
                        name: "GroupTestExample"
                    });
    expect(res.body).toHaveProperty('error');
    expect(res.statusCode).toEqual(409);
    done();
})


it('Should fetch all Group records', async (done) => {
    await request(app).get('/group')
    .expect(200);
    done();
})

it('should update the name of a group record', async (done) => {
    let group = await Group.findOne();
    let res = await request(app).put(`/group-update/${group.id}/${'testGroup'}`)
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.statusCode).toEqual(201);
    done();
})

it('Should delete a group record', async (done) => {
    let group = await Group.findOne();
    await request(app).delete(`/group-delete/${group.id}`)
    .expect(202);
    done();
})

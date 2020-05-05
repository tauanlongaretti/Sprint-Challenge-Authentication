const request = require('supertest');
const server = require('./server.js');

describe('GET /', () => {
    it('should return 200', () => {
        return request(server).get('/')
        .then(res => {
            expect(res.status).toBe(200);
        });
    });
    
    it('should return {api:"up"}', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({ api: "up" })
    })
});
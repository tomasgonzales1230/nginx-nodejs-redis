const request = require('supertest');
const createApp = require('./app');

describe('GET /', () => {

    it('should return visit count starting at 1', async () => {

        const mockRedis = {
            get: (key, cb) => cb(null, null),
            set: jest.fn()
        };

        const app = createApp(mockRedis);

        const res = await request(app).get('/');

        expect(res.text).toContain('Number of visits is: 1');
    });

    it('should increment visits', async () => {

        const mockRedis = {
            get: (key, cb) => cb(null, "5"),
            set: jest.fn()
        };

        const app = createApp(mockRedis);

        const res = await request(app).get('/');

        expect(res.text).toContain('Number of visits is: 6');
    });

});
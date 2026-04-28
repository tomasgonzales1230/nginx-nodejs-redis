jest.mock('redis', () => ({
  createClient: () => ({
    get: (key, cb) => cb(null, null),
    set: jest.fn()
  })
}));

const request = require('supertest');
const startServer = require('./server');

describe('Server', () => {

    it('should start and respond on a port', async () => {
        const { app, server } = startServer(0);

        const res = await request(app).get('/');

        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Number of visits is');

        server.close();
    });

});
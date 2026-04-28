const express = require('express');
const createApp = require('./app');
const redis = require('redis');

function startServer(port = 5000) {
    const redisClient = redis.createClient({
        host: 'redis',
        port: 6379
    });

    const app = createApp(redisClient);

    const server = app.listen(port, () => {
        console.log(`Web application is listening on port ${port}`);
    });

    return { app, server };
}

/* istanbul ignore next */
if (require.main === module) {
    startServer();
}

module.exports = startServer;
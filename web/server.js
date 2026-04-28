const os = require('node:os');
const express = require('express');
const createApp = require('./app')
const redis = require('redis');

const redisClient = redis.createClient({
  host: 'redis',
  port: 6379
});

const app = createApp(redisClient);

app.listen(5000, function() {
    console.log('Web application is listening on port 5000');
});

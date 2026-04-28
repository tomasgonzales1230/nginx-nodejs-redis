const os = require('node:os')
const express = require('express')

function createApp(redisClient) {

    const app = express();

    app.get('/', function (req, res) {
        redisClient.get('numVisits', function (err, numVisits) {
            let numVisitsToDisplay = Number.parseInt(numVisits) + 1;
            if (Number.isNaN(numVisitsToDisplay)) {
                numVisitsToDisplay = 1;
            }
            res.send(os.hostname() + ': Number of visits is: ' + numVisitsToDisplay);
            numVisits++;
            redisClient.set('numVisits', numVisits);
        });
    });
    return app;
}

module.exports = createApp;
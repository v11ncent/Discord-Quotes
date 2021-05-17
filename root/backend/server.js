const express = require('express');
const routes = require('./routes');
const app = express();
const port = 8080;

(function run() {
    (function listen() {
        app.use(express.text());
        app.use(express.json());
        app.use('/', routes);
        app.use('/get4discord', routes);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    })();
})();

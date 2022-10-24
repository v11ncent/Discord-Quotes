const express = require('express');
const routes = require('./routes');
const app = express();
// Heroku dynamically binds your server's port to the ENV variable
const port =  process.env.PORT || 8080;
const cors = require('cors'); // https://expressjs.com/en/resources/middleware/cors.html

(function run() {
    (function listen() {
        app.use(express.text());
        app.use(express.json());
        app.use(cors());
        app.use('/', routes);
        app.use('/get4discord', routes);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })();
})();

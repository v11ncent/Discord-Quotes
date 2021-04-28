const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
// https://stackoverflow.com/questions/51676494/how-to-join-a-react-app-and-an-express-app
// sets port 8080 to default or unless otherwise specified in the environment
const port = process.env.PORT || 8080;
mongoose.connect('',
                { useNewUrlParser: true, useUnifiedTopology: true })

function run() {
    (function listen() {
        // app.use(express.json()) has to be first so it can parse json
        app.use(express.json());
        app.use('/', routes);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    })();
}
    
run();
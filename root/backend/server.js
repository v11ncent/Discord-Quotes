const express = require('express');
const https = require('https');
const fs = require('fs');
const routes = require('./routes');
const app = express();
const port = 8080;
const cors = require('cors'); // https://expressjs.com/en/resources/middleware/cors.html
// https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b#:~:text=Enabling%20CORS,using%20the%20cors%20npm%20module.&text=That's%20it.,CORS%20is%20now%20enabled.&text=The%20Access%2DControl%2DAllow%2D,allows%20access%20from%20any%20origin).
const allowedOrigins = ['http://localhost:3000', 'https://www.quotelibrarian.com/'];

// https://phoenixnap.com/kb/openssl-tutorial-ssl-certificates-private-keys-csrs
// https://flaviocopes.com/express-https-self-signed-certificate/
const CERT_PATH = 'C:/Users/Vince/Desktop/server-cred/server.cert';
const KEY_PATH = 'C:/Users/Vince/Desktop/server-cred/server.key';

(function run() {
    (function listen() {
        app.use(express.text());
        app.use(express.json());
        app.use(cors({origin: allowedOrigins}));
        app.use('/', routes);
        app.use('/get4discord', routes);
        https.createServer({
            cert: fs.readFileSync(CERT_PATH),
            key: fs.readFileSync(KEY_PATH),
        }, app).listen(port, '0.0.0.0', () => {
            console.log(`Listening on port ${port}`);
        })
    })();
})();

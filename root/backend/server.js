const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));
// https://stackoverflow.com/questions/51676494/how-to-join-a-react-app-and-an-express-app

// sets port 8080 to default or unless otherwise specified in the environment
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    console.log('Hello World');
})

app.post('/', (req, res) => {
    res.send(`Quote received. Status Code: ${res.statusCode}`)
    console.log(`Quote received. Object: ${JSON.stringify(req.body)}`);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
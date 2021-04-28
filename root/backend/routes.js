const express = require('express');
const Quote = require('./models/Quote');
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const { Mongoose } = require('mongoose');

const url = 'mongodb+srv://vince:4T8yNWkNI4Omoi5I@quotes.k39re.mongodb.net/quotes?retryWrites=true&w=majority'
// primer on Router object 
// https://levelup.gitconnected.com/guide-to-the-express-router-object-multiple-requests-and-middleware-9d5c99b2ade6
// a Router object just acts like middleware
// Middleware looks at the incoming requests
// Checks to see if it is something we want
// And then passes it onto the route
const router = express.Router();

// connect to mongoose db



// here, the middleware does something with our data
// and then forwards the response to the route
router.post('/', async (req, res) => {
    try 
    {
        const quote = req.body.quote;
        const person = req.body.person;
        const date = req.body.date;
        const newQuote = new Quote({ quote: quote, person: person, date: date })
        await newQuote.save();
        res.status(200).send('Quote saved to Db.');
    }
    catch (err) 
    {
        console.error(err);
        res.status(500).send(err);
    }
});

router.get('/', async (req, res) => {
    try
    {
        console.log('Got request');
        const collection = await Quote.findOne({ person: 'a' });
        console.log(collection);
    }
    catch (err)
    {
        console.error(err);
        res.status(500).send(err);
    }

  
})

module.exports = router;
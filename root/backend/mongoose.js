// mongoose to send data to our database
// https://mongoosejs.com/docs/

const mongoose = require('mongoose');
mongoose.connect('<database uri string>', 
                {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // new schema
    const quoteSchema = new mongoose.Schema({
        quote: String,
        person: String,
        date: String
    })

    // methods must be added before we construct our model
    quoteSchema.methods.print = function() {
        const quote = this.quote;
        const person = this.person;
        const time = this.date;
        console.log(`Quote: ${quote} // ${person} // ${time}`);
    }
    // compiles schema into Model
    const Quote = mongoose.model('Quote', quoteSchema);
    // creates a new instance of Quote Model
    const newQuote = new Quote(`<data>`);
    // save instance of Quote object to mongoDb and print to console
    newQuote.save((err, newQuote) => {
        if (err) return console.error(err);
        newQuote.print();
    })
});

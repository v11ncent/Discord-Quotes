const mongoose = require('mongoose');

// new schema
// https://stackoverflow.com/questions/19627631/how-to-get-data-from-mongodb-using-mongoose
const schema = new mongoose.Schema({
    quote: String,
    person: String,
    date: String
}, {collection: 'quotes'});

// methods must be added before we construct our model
schema.methods.print = function() {
    const quote = this.quote;
    const person = this.person;
    const time = this.date;
    console.log(`Quote: ${quote} // ${person} // ${time}`);
}

// compiles our schema into a model named 'Quote' and exports
module.exports = mongoose.model('Quote', schema);
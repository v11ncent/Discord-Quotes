const mongoose = require('mongoose');

// new schema
const schema = new mongoose.Schema({
    quote: String,
    person: String,
    date: String
})

// methods must be added before we construct our model
schema.methods.print = function() {
    const quote = this.quote;
    const person = this.person;
    const time = this.date;
    console.log(`Quote: ${quote} // ${person} // ${time}`);
}

// compiles our schema into a model named 'Quote' and exports
module.exports = mongoose.model('Quote', schema);
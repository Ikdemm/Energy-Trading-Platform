const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Gadget = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    watt: {
        type: Number
    },
    volt: {
        type: Number
    },
    amp: {
        type: Number
    },
    state: {
        type: Boolean
    }
},{
    collection: 'gadgets'
});

module.exports = mongoose.model('Gadget', Gadget);
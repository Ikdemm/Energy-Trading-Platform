const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Gadget = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    type: String,
    watt: Number,
    volt: Number,
    amp: Number,
    state: Boolean
},{
    collection: 'gadgets'
});

module.exports = mongoose.model('Gadget', Gadget);
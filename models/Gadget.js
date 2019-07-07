const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Gadget = new Schema(
  {
    _id: Schema.Types.ObjectId,
    manufacturer: String,
    type: String,
    owner: String,
    power: Number,
    voltage: Number,
    amperage: Number,
    state: Boolean
  },
  {
    collection: "gadgets"
  }
);

module.exports = mongoose.model("Gadget", Gadget);

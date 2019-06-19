const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Gadget = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      required: true
    },
    watt: Number,
    volt: Number,
    amp: Number,
    state: Boolean
  },
  {
    collection: "gadgets"
  }
);

module.exports = mongoose.model("Gadget", Gadget);

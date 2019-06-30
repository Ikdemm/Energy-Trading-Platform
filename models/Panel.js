const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Panel = new Schema(
  {
    _id: Schema.Types.ObjectId,
    number: Number,
    manufacturer: String,
    cellsNumber: Number,
    installationDate: Date,
    state: Boolean,
    tilt: Number,
    azimuth: Number,
    owner: String
  },
  {
    collection: "panels"
  }
);

module.exports = mongoose.model("Panel", Panel);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Panel = new Schema(
  {
    _id: Schema.Types.ObjectId,
    manufacturer: String,
    cellsNumber: Number,
    installationDate: Date,
    state: Boolean,
    tilt: Number,
    azimuth: Number,
    owner: String,
    capacity: Number
  },
  {
    collection: "panels"
  }
);

module.exports = mongoose.model("Panel", Panel);

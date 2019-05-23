const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Account = new Schema(
  {
    _id: Schema.Types.ObjectId,
    address: String,
    isUsed: Boolean,
    isProducer: Boolean
  },
  {
    collection: "accounts"
  }
);

module.exports = mongoose.model("Account", Account);

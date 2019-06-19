const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Account = new Schema(
  {
    _id: Schema.Types.ObjectId,
    address: {
      type: String,
      unique: true,
      required: true
    },
    isUsed: {
      type: Boolean,
      required: true
    },
    isProducer: {
      type: Boolean,
      required: true
    }
  },
  {
    collection: "accounts"
  }
);

module.exports = mongoose.model("Account", Account);

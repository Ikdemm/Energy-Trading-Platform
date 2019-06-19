const accountModel = require("../models/Account.js");
var base = require("./repository.js");

module.exports = {
  save: function(account) {
    return base.save(account, accountModel);
  },
  update: function(account, id) {
    return base.update(account, id, accountModel);
  },
  findById: function(id) {
    base.findById(id, accountModel);
  },
  deleteById: function(id) {
    base.remove(id);
  }
};
